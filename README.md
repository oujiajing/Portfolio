# 区家敬｜AI 产品经理作品集

基于 Astro 构建的 AI 产品经理静态作品集，围绕用户问题、AI 能力边界与产品落地，展示三个可运行项目的产品设计与验证过程。

**在线访问：** [https://oujiajing.github.io/Portfolio/](https://oujiajing.github.io/Portfolio/)

## 精选项目

| 项目 | 产品方向 | 核心内容 |
| --- | --- | --- |
| **SafeGuard Agent｜施工安全隐患整改 Agent** | AI 产品 · 施工安全 | 通过多模态分析、法规 RAG、Agent 工具调用与人工复核，将现场信息转化为可追溯的整改建议。 |
| **SafeFlow｜安全生产数字化管控平台** | B 端产品 · 安全生产 | 覆盖 PC 管理端与微信小程序，以班组作业任务串联检查、隐患整改、验收与管理分析。 |
| **Invoice Assistant｜发票自动化管理工作台** | 效率工具 · 票据管理 | 结合原生解析、OCR 与规则化处理，完成票据识别、文件整理、台账、查重统计和合并打印。 |

首页展示三个项目的概览与关键词。点击项目会在当前页面打开可切换、可滚动的案例详情，内容依次包括：

1. 项目定位
2. 项目背景
3. 核心问题
4. 产品价值
5. 关键产品决策
6. 已验证的部分

案例中的架构图和产品界面均可点击放大预览。

## 本地运行

```bash
npm install
npm run dev
```

访问终端显示的本地地址（包含 `/Portfolio/` 路径）。发布前运行 `npm run build`，然后用 `npm run preview` 检查构建产物。

## 内容与图片

- 项目事实以各公开仓库的 README 为准。
- 首页三张项目封面是根据项目主题生成的概念图；案例弹窗的大图使用项目架构图，下方使用真实界面截图，安全生产数字化平台相关业务截图为演示场景数据。
- 首页不展示个人照片或简历。联系方式为本人提供的公开信息。
- 案例中的“产品价值”是基于功能与流程设计的定性描述，不代表已取得生产环境效果数据。

## GitHub Pages

本站是独立项目，仓库为 `oujiajing/Portfolio`，目标地址为 `https://oujiajing.github.io/Portfolio/`。`astro.config.mjs` 已配置项目站点的基础路径；仓库 Settings → Pages 的发布来源选择 GitHub Actions。部署工作流位于 `.github/workflows/deploy.yml`，推送到 `main` 后会自动构建和发布。
