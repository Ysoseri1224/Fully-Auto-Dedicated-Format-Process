# Changelog

## 0.4.0

### UI 重构
- 全面更新为 Word 风格蓝白色主题（所有 CSS 变量、组件、交互状态）
- 字体从衬线体切换为 Segoe UI / Microsoft YaHei 无衬线体
- 圆角统一收紧为 4-8px，视觉更简洁
- Toast 通知重新定位到文档渲染区上方，增大字号和间距
- 模板提取视图中 "当前母版" 标签替换为 "导入其他文件作为模板" 按钮
- 新增应用 Logo（侧边栏品牌区）
- 关于对话框更新为 v0.4.0 信息，附 GitHub 地址
- 运行结果输出时自动切换 Inspector 到运行摘要 tab
- 生成模板 Profile 面板固定悬浮在文档渲染区顶部，不随滚动移动

### 核心功能
- 完整 numbering.xml 解析：支持 decimal、decimalEnclosedCircleChinese、bullet、upperLetter/lowerLetter、chineseCountingThousand 等格式
- 编号通过样式 basedOn 链继承（numId=0 正确禁用编号）
- docDefaults 字体/字号回退：所有段落都有 effective fontFamily 和 fontSizePt
- 字体解析链：direct rPr → style basedOn chain → docDefaults → Word 内置默认
- 图片提取支持 w:drawing 和 VML w:pict 两种嵌入方式
- 页眉页脚提取与渲染
- 自动聚类增强：识别 table、listLevel1/2、note 角色（基于编号、样式名、缩进）
- 生成 Profile 时自动用聚类样式填充空缺角色映射
- Profile 编辑器下拉分组显示聚类样式和 Word 样式

### 渲染精度
- 段落底纹（w:shd）渲染
- 文字高亮色（w:highlight）渲染
- 删除线（w:strike）渲染
- 段落缩进（左缩进、悬挂缩进、首行缩进）渲染
- 段落下边框渲染
- 编号 displayText 前缀渲染

### 工作台改进
- Inspector 简化为单层三 tab（当前状态 / 现有样式 / 运行摘要）
- 当前状态 tab 增加 JSON / 段落格式子切换
- 存为临时样式功能 + 持久化
- 自动聚类结果作为样式映射默认值
- Profile 生成面板改为可折叠 details 元素
- 最近使用列表支持滚动，显示上限 8 条

## 0.3.0

- 图片提取：支持 w:drawing 和 VML w:pict 两种嵌入方式
- 图片在 review pipeline 中保留（不再丢失）
- Release workflow 和 NSIS setup target
- Inspector 滚动修复

## 0.2.0

- 模板提取工作台完整实现
- Profile 配置视图
- 自动样式聚类
- Profile 驱动的 review pipeline

## 0.1.0

- Initial public scaffold for `WriteMaster`
- Shared Node core extracted from the current review pipeline (`review.js`, `build.js`)
- CLI entry added as `writemaster`
- Multi-master registry with `review-master` (default) and `chapter10-monograph`
- `--master-id <id>` and `--master <file>` for custom/override master selection
- `--extract <file>` hidden dev mode for DOCX structure extraction
- Single-file Node bundle with dual embedded masters (`npm run bundle`)
- Electron desktop shell upgraded to Workbench-style three-view layout
- Electron "apply task" view fully functional (md + docx modes)
- Electron "template extract" view: upload master → block preview → right-click semantic role assignment → auto-cluster → generate profile
- Electron "profile config" view: list / edit style mapping / import / export / delete profiles
- Electron right-side Inspector with JSON / styles / profile panels + summary tabs
- Electron recent files tracking in sidebar
- Electron portable build (`WriteMaster-portable-0.1.0.exe`, ~84MB)
- DOCX structure extractor (`extract.js`): paragraph/table extraction, format fingerprinting, style clustering
- Profile-driven review pipeline: `processReview` accepts optional profile for custom style mappings
- Rust CLI wrapper with clap, forwarding `--master-id` and `--extract` flags
- 10 new IPC channels for extraction, profile CRUD, clustering, and profile-driven execution
