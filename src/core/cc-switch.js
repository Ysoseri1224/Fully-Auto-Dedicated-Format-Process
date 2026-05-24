'use strict';

const path = require('path');
const os = require('os');
const fs = require('fs');

const DB_PATH = path.join(os.homedir(), '.cc-switch', 'cc-switch.db');
const SETTINGS_PATH = path.join(os.homedir(), '.cc-switch', 'settings.json');

function inferProviderConfig(env) {
  if (env.ANTHROPIC_AUTH_TOKEN) {
    return {
      format: 'anthropic',
      apiKey: env.ANTHROPIC_AUTH_TOKEN,
      baseUrl: env.ANTHROPIC_BASE_URL || 'https://api.anthropic.com',
      model: env.ANTHROPIC_MODEL || '',
    };
  }
  if (env.OPENAI_API_KEY) {
    return {
      format: 'openai',
      apiKey: env.OPENAI_API_KEY,
      baseUrl: env.OPENAI_BASE_URL || env.OPENAI_API_BASE || 'https://api.openai.com',
      model: env.OPENAI_MODEL || env.MODEL || '',
    };
  }
  const fallbackKey = env.API_KEY || env.AUTH_TOKEN || '';
  const fallbackUrl = env.BASE_URL || env.API_BASE || '';
  if (fallbackKey) {
    return {
      format: 'openai',
      apiKey: fallbackKey,
      baseUrl: fallbackUrl || 'https://api.openai.com',
      model: env.MODEL || '',
    };
  }
  return null;
}

async function readCCSwitchConfig() {
  try {
    if (!fs.existsSync(SETTINGS_PATH)) {
      return { error: 'CC Switch 配置文件不存在' };
    }
    if (!fs.existsSync(DB_PATH)) {
      return { error: 'CC Switch 数据库不存在' };
    }

    const settings = JSON.parse(fs.readFileSync(SETTINGS_PATH, 'utf8'));

    const providerKeys = Object.keys(settings).filter(k => k.startsWith('currentProvider'));
    if (!providerKeys.length) {
      return { error: '未找到任何 currentProvider 配置' };
    }

    const initSqlJs = require('sql.js');
    const SQL = await initSqlJs();
    const dbBuffer = fs.readFileSync(DB_PATH);
    const db = new SQL.Database(dbBuffer);

    // Try providers in order: Claude first, then others
    const ordered = ['currentProviderClaude', ...providerKeys.filter(k => k !== 'currentProviderClaude')];

    for (const key of ordered) {
      const providerId = settings[key];
      if (!providerId) continue;

      const stmt = db.prepare('SELECT name, settings_config FROM providers WHERE id = ?');
      stmt.bind([providerId]);

      if (!stmt.step()) {
        stmt.free();
        continue;
      }

      const row = stmt.getAsObject();
      stmt.free();

      const config = JSON.parse(row.settings_config || '{}');
      const env = config.env || {};
      const result = inferProviderConfig(env);

      if (result) {
        db.close();
        return {
          ...result,
          providerName: row.name || providerId,
        };
      }
    }

    db.close();
    return { error: '所有 provider 配置中均未找到有效的 API Key' };
  } catch (err) {
    return { error: err.message };
  }
}

module.exports = { readCCSwitchConfig };
