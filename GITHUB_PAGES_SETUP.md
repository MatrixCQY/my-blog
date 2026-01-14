# GitHub Pages 设置指南

## 问题：别人点击链接看到的是 GitHub 仓库页面，而不是网站

## 解决方案

### 1. 确认正确的网站链接

**✅ 正确的网站链接（分享这个）：**
```
https://matrixcqy.github.io/my-blog/
```

**❌ 错误的仓库链接（不要分享这个）：**
```
https://github.com/MatrixCQY/my-blog
```

### 2. 检查 GitHub Pages 设置

1. 打开 GitHub 仓库：https://github.com/MatrixCQY/my-blog
2. 点击 **Settings**（设置）
3. 在左侧菜单中找到 **Pages**
4. 确认以下设置：
   - **Source**: 选择 **GitHub Actions**（不是 "Deploy from a branch"）
   - **Branch**: 如果显示，应该选择 `main` 分支和 `/ (root)` 目录

### 3. 检查 GitHub Actions 部署状态

1. 在仓库页面，点击 **Actions** 标签
2. 查看最新的工作流运行状态
3. 如果显示 ✅（绿色），说明部署成功
4. 如果显示 ❌（红色），点击查看错误信息

### 4. 等待部署完成

GitHub Actions 部署通常需要 1-3 分钟。部署完成后，网站才会可用。

### 5. 清除浏览器缓存

如果网站已经部署，但显示不正确，尝试：
- **Chrome/Edge**: `Ctrl + Shift + Delete` → 清除缓存
- **Firefox**: `Ctrl + Shift + Delete` → 清除缓存
- 或者使用**无痕模式**访问网站

### 6. 验证网站是否可访问

在浏览器中访问：
```
https://matrixcqy.github.io/my-blog/
```

如果看到你的博客网站（有导航栏、侧边栏等），说明部署成功。

## 常见问题

### Q: 为什么别人看到的是仓库页面？
A: 可能分享的是仓库链接 `https://github.com/...` 而不是网站链接 `https://matrixcqy.github.io/...`

### Q: 网站显示 404 错误
A: 
1. 检查 GitHub Actions 是否部署成功
2. 确认 `base` 路径配置正确（应该是 `/my-blog/`）
3. 等待几分钟后重试（GitHub Pages 可能需要时间更新）

### Q: 网站样式不正确
A: 
1. 清除浏览器缓存
2. 检查 `docs/.vuepress/config.ts` 中的 `base` 路径是否正确
3. 确认所有资源路径都包含 `/my-blog/` 前缀

## 分享链接的正确方式

**✅ 正确：**
```
我的博客：https://matrixcqy.github.io/my-blog/
```

**❌ 错误：**
```
我的博客：https://github.com/MatrixCQY/my-blog
```
