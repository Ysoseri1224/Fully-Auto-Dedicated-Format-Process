const fs = require('fs');
const os = require('os');
const path = require('path');
const https = require('https');
const { execFileSync } = require('child_process');

const PANDOC_VERSION = '3.6.4';
const PANDOC_ZIP = `pandoc-${PANDOC_VERSION}-windows-x86_64.zip`;
const DOWNLOAD_URL = `https://github.com/jgm/pandoc/releases/download/${PANDOC_VERSION}/${PANDOC_ZIP}`;

function getLocalPandocDir() {
  const base = process.env.LOCALAPPDATA || path.join(os.homedir(), 'AppData', 'Local');
  return path.join(base, 'WriteMaster', 'pandoc');
}

function getLocalPandocExe() {
  return path.join(getLocalPandocDir(), 'pandoc.exe');
}

function resolvePandocPath(explicitPath) {
  if (explicitPath) return explicitPath;
  if (process.env.WRITEMASTER_PANDOC) return process.env.WRITEMASTER_PANDOC;
  const localExe = getLocalPandocExe();
  if (fs.existsSync(localExe)) return localExe;
  const windowsPandoc = 'D:\\Pandoc\\pandoc.exe';
  if (fs.existsSync(windowsPandoc)) return windowsPandoc;
  return 'pandoc';
}

function isPandocAvailable(explicitPath) {
  const resolved = resolvePandocPath(explicitPath);
  try {
    const out = execFileSync(resolved, ['--version'], { stdio: 'pipe', timeout: 5000 });
    const firstLine = out.toString().split('\n')[0] || '';
    const match = firstLine.match(/pandoc(?:\.exe)?\s+([\d.]+)/i);
    return { available: true, path: resolved, version: match ? match[1] : 'unknown' };
  } catch (_) {
    return { available: false, path: null, version: null };
  }
}

function httpsGet(url) {
  return new Promise((resolve, reject) => {
    https.get(url, { headers: { 'User-Agent': 'WriteMaster' } }, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        httpsGet(res.headers.location).then(resolve, reject);
        return;
      }
      if (res.statusCode !== 200) {
        reject(new Error(`HTTP ${res.statusCode} from ${url}`));
        return;
      }
      const chunks = [];
      res.on('data', (chunk) => chunks.push(chunk));
      res.on('end', () => resolve(Buffer.concat(chunks)));
      res.on('error', reject);
    }).on('error', reject);
  });
}

async function downloadPandoc() {
  const dir = getLocalPandocDir();
  fs.mkdirSync(dir, { recursive: true });

  const zipBuf = await httpsGet(DOWNLOAD_URL);

  const PizZip = require('pizzip');
  const zip = new PizZip(zipBuf);

  const prefix = `pandoc-${PANDOC_VERSION}/`;
  const exeEntry = zip.file(prefix + 'pandoc.exe') || zip.file('pandoc.exe');
  if (!exeEntry) {
    const files = Object.keys(zip.files);
    const found = files.find(f => f.endsWith('pandoc.exe'));
    if (!found) throw new Error('pandoc.exe not found in downloaded zip');
    const buf = zip.file(found).asNodeBuffer();
    fs.writeFileSync(getLocalPandocExe(), buf);
  } else {
    fs.writeFileSync(getLocalPandocExe(), exeEntry.asNodeBuffer());
  }

  return getLocalPandocExe();
}

module.exports = {
  PANDOC_VERSION,
  DOWNLOAD_URL,
  getLocalPandocDir,
  getLocalPandocExe,
  resolvePandocPath,
  isPandocAvailable,
  downloadPandoc,
};
