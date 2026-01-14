# 快速部署指南

## 🚀 5 步完成部署

### 1. 创建 GitHub 仓库

在 GitHub 上创建一个新仓库（例如：`my-blog`），**不要**初始化仓库。

### 2. 初始化并推送代码

在项目目录下执行：

```bash
# 初始化 Git（如果还没有）
git init

# 添加所有文件
git add .

# 提交代码
git commit -m "Initial commit"

# 添加远程仓库（替换为你的仓库地址）
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git

# 推送到 main 分支
git branch -M main
git push -u origin main
```

### 3. 配置 GitHub Pages

1. 进入仓库 **Settings** > **Pages**
2. **Source** 选择 **GitHub Actions**
3. 保存设置

### 4. 修改 base 路径（重要！）

如果你的仓库名**不是** `YOUR_USERNAME.github.io`，需要修改 `docs/.vuepress/config.ts`：

```typescript
base: "/YOUR_REPO_NAME/",  // 替换为你的仓库名
```

然后提交并推送：

```bash
git add docs/.vuepress/config.ts
git commit -m "Update base path for GitHub Pages"
git push
```

### 5. 等待部署完成

- GitHub Actions 会自动构建和部署
- 在仓库的 **Actions** 标签页可以查看部署进度
- 部署完成后，网站地址：
  - 如果仓库名是 `YOUR_USERNAME.github.io`：`https://YOUR_USERNAME.github.io/`
  - 否则：`https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/`

## ✅ 验证部署

访问你的网站，确认：
- ✅ 页面正常显示
- ✅ 导航栏和侧边栏正常
- ✅ 数学公式正常渲染
- ✅ 代码高亮正常
- ✅ 搜索功能正常

## 🔄 后续更新

每次更新内容后，只需：

```bash
git add .
git commit -m "Update content"
git push
```

GitHub Actions 会自动重新构建和部署！

## 📝 注意事项

- 首次部署可能需要几分钟时间
- 如果部署失败，检查 **Actions** 标签页的错误信息
- 确保 `package.json` 中的依赖都已正确安装
