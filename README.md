# 区家敬｜AI 产品经理作品集

基于 Astro 的静态作品集。首页展示施工安全隐患整改Agent、安全生产数字化平台、票据管理工作台三个项目，点击项目会在当前页面打开可切换、可滚动的案例弹窗。案例中的图片可点击放大预览。

## 本地运行

```bash
npm install
npm run dev
```

访问终端显示的本地地址。发布前运行 `npm run build`，然后用 `npm run preview` 检查构建产物。

## 内容与图片

- 项目事实以各公开仓库的 README 为准。
- 首页三张项目封面是根据项目主题生成的概念图；案例弹窗的大图使用项目架构图，下方使用真实界面截图，安全生产数字化平台相关业务截图为演示场景数据。
- 首页不展示个人照片或简历。联系方式为本人提供的公开信息。
- 案例中的“产品价值”是基于功能与流程设计的定性描述，不代表已取得生产环境效果数据。

## GitHub Pages

本站是独立项目，目标仓库为 `oujiajing/oujiajing.github.io`。`astro.config.mjs` 已按用户站点根域名配置；仓库 Settings → Pages 的发布来源选择 GitHub Actions。部署工作流位于 `.github/workflows/deploy.yml`，推送到 `main` 后会自动构建和发布。
