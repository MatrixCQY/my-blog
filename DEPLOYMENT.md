# 部署说明

## 本地开发

1. 安装依赖：
```bash
npm install
```

2. 启动开发服务器：
```bash
npm run docs:dev
```

3. 在浏览器中访问 `http://localhost:8080`

## 构建

```bash
npm run docs:build
```

构建后的文件将输出到 `docs/.vuepress/dist` 目录。

## GitHub Pages 部署

### 方法一：使用 GitHub Actions（推荐）

#### 步骤 1：创建 GitHub 仓库

1. 在 GitHub 上创建一个新仓库（例如：`my-blog`）
2. **不要**初始化仓库（不要添加 README、.gitignore 或 license）

#### 步骤 2：初始化 Git 并推送代码

如果项目还没有 Git 仓库，执行以下命令：

```bash
# 初始化 Git 仓库
git init

# 添加所有文件
git add .

# 提交代码
git commit -m "Initial commit"

# 添加远程仓库（替换 YOUR_USERNAME 和 YOUR_REPO_NAME）
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git

# 推送到 main 分支（如果默认分支是 master，改为 master）
git branch -M main
git push -u origin main
```

#### 步骤 3：配置 GitHub Pages

1. 进入你的 GitHub 仓库页面
2. 点击 **Settings**（设置）
3. 在左侧菜单中找到 **Pages**（页面）
4. 在 **Build and deployment**（构建和部署）部分：
   - **Source**（源）选择 **GitHub Actions**
5. 保存设置

#### 步骤 4：自动部署

- 当你推送代码到 `main` 分支时，GitHub Actions 会自动运行
- 构建完成后，你的网站将在 `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/` 可访问
- 如果仓库名是 `YOUR_USERNAME.github.io`，网站将在 `https://YOUR_USERNAME.github.io/` 可访问

#### 重要提示

- 如果仓库名**不是** `YOUR_USERNAME.github.io`，需要在 `docs/.vuepress/config.ts` 中修改 `base` 配置：
  ```typescript
  base: "/YOUR_REPO_NAME/",  // 替换为你的仓库名
  ```
- 如果仓库名**是** `YOUR_USERNAME.github.io`，保持 `base: "/"` 即可

### 方法二：手动部署

1. 构建项目：
```bash
npm run docs:build
```

2. 将 `docs/.vuepress/dist` 目录的内容推送到 `gh-pages` 分支

**注意：** 推荐使用方法一（GitHub Actions），更简单且自动化。

## 配置说明

### 修改网站信息

编辑 `docs/.vuepress/config.ts` 文件：
- `title`: 网站标题
- `description`: 网站描述
- `base`: 部署路径（如果部署在子路径下需要修改）

### 添加内容

在 `docs` 目录下创建 Markdown 文件即可。文件会自动出现在侧边栏中。

### 数学公式

使用 LaTeX 语法编写数学公式：

- 行内公式：`$公式$`
- 块级公式：`$$公式$$`

示例：
```markdown
这是行内公式：$E = mc^2$

这是块级公式：
$$
\int_{-\infty}^{\infty} e^{-x^2} dx = \sqrt{\pi}
$$
```

### 代码高亮

使用代码块语法：

````markdown
```python
def hello():
    print("Hello, World!")
```
````

## 注意事项

- 确保 Node.js 版本 >= 16
- Markdown 文件使用 UTF-8 编码
- 图片资源放在 `docs/.vuepress/public/` 目录下
- 修改配置后需要重启开发服务器
