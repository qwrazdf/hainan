# qwrazdf 海南海风计划

这是一个可直接部署到 GitHub Pages 的静态个人旅行网站，内容围绕 2026 年 6 月 2 日从合肥出发、三亚到海口的 5-6 天路线规划。

## 本地浏览

直接打开 `index.html` 即可浏览。也可以在本目录启动一个静态服务器：

```bash
python3 -m http.server 8000
```

然后访问 `http://localhost:8000`。

## 部署到 GitHub Pages

1. 新建或使用仓库 `hainan`，也可以使用个人主页仓库 `qwrazdf.github.io`。
2. 把 `index.html`、`styles.css`、`script.js`、`README.md` 推送到仓库根目录。
3. 在 GitHub 仓库的 Settings → Pages 中选择从 `main` 分支根目录发布。
4. 若使用 `hainan`，发布地址通常是 `https://qwrazdf.github.io/hainan/`。

## 出发前复核

- 2026-06-02 前 24-48 小时重新看三亚、海口天气。
- 用 12306 复核三亚到海口动车时间。
- 复核云洞图书馆、景区门票、潮汐和航班。
- 小红书和知乎内容变化快，页面底部保留了站内搜索入口。

## 备注栏说明

页面里的备注栏会自动保存在访客自己的浏览器 `localStorage` 中，不会直接写回 GitHub Pages。若要收集朋友的公开建议，可以让他们点击“发到 GitHub”，通过 GitHub Issue 提交。

GitHub Pages 是静态托管，普通访客不能像共享文档一样直接在线编辑页面内容。仓库协作者可以在 GitHub 网页端编辑文件；其他人通常通过 Issue、Discussion 或 Pull Request 留建议。
