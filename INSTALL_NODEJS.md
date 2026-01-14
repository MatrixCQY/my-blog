# Node.js 安装指南

## 问题说明

您的系统中没有安装 Node.js，因此无法使用 `npm` 命令。需要先安装 Node.js 才能继续使用 VuePress 博客项目。

## 安装步骤

### 方法一：从官网下载安装（推荐）

1. **访问 Node.js 官网**
   - 打开浏览器访问：https://nodejs.org/
   - 或直接访问中文站：https://nodejs.org/zh-cn/

2. **下载安装包**
   - 选择 LTS（长期支持）版本（推荐）
   - 下载 Windows Installer (.msi) 64位版本

3. **运行安装程序**
   - 双击下载的 `.msi` 文件
   - 按照安装向导完成安装
   - **重要**：安装时确保勾选 "Add to PATH" 选项

4. **验证安装**
   - 关闭当前 PowerShell 窗口
   - 重新打开 PowerShell
   - 运行以下命令验证：
   ```powershell
   node --version
   npm --version
   ```
   - 如果显示版本号，说明安装成功

### 方法二：使用包管理器安装

#### 使用 Chocolatey（如果已安装）

```powershell
choco install nodejs-lts
```

#### 使用 Scoop（如果已安装）

```powershell
scoop install nodejs-lts
```

### 方法三：使用 Anaconda/Miniconda（如果您使用 Conda）

```powershell
conda install nodejs npm
```

## 安装后操作

安装完成后，请：

1. **关闭并重新打开 PowerShell**（重要！）
   - 这是为了让环境变量生效

2. **验证安装**
   ```powershell
   node --version
   npm --version
   ```

3. **进入项目目录并安装依赖**
   ```powershell
   cd D:\CS\blog
   npm install
   ```

4. **启动开发服务器**
   ```powershell
   npm run docs:dev
   ```

## 常见问题

### 问题：安装后仍然提示找不到 npm

**解决方案：**
1. 确保安装时勾选了 "Add to PATH"
2. 关闭所有 PowerShell 窗口并重新打开
3. 检查环境变量：
   ```powershell
   $env:PATH -split ';' | Select-String node
   ```
   如果看不到 Node.js 路径，需要手动添加到 PATH

### 问题：如何手动添加到 PATH

1. 右键点击"此电脑" > "属性"
2. 点击"高级系统设置"
3. 点击"环境变量"
4. 在"系统变量"中找到 `Path`，点击"编辑"
5. 添加 Node.js 安装路径（通常是 `C:\Program Files\nodejs\`）
6. 点击"确定"保存
7. 重新打开 PowerShell

## 版本要求

- Node.js 版本：>= 16.0.0
- npm 版本：>= 7.0.0（通常随 Node.js 一起安装）

## 下一步

安装完 Node.js 后，请按照 `QUICK_START.md` 中的说明继续操作。
