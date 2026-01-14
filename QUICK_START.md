# 快速开始

## 安装依赖

```bash
npm install
```

## 启动开发服务器

```bash
npm run docs:dev
```

访问 http://localhost:8080 查看网站。

## 添加内容

1. 在 `docs/math/` 目录下添加数学笔记
2. 在 `docs/code/` 目录下添加代码笔记
3. 文件会自动出现在侧边栏中

## 部署到 GitHub Pages

1. 将代码推送到 GitHub 仓库
2. 在仓库设置中启用 GitHub Pages（使用 GitHub Actions）
3. 每次推送到 main 分支会自动部署

## 功能特性

- ✅ 暗色模式切换
- ✅ 全文搜索
- ✅ 数学公式支持（LaTeX）
- ✅ 代码高亮
- ✅ 响应式设计
- ✅ 自动生成侧边栏

## 下一步

- 添加 Logo 和 Favicon（见 `docs/.vuepress/public/README.md`）
- 修改网站标题和描述（编辑 `docs/.vuepress/config.ts`）
- 开始添加你的学习笔记！
