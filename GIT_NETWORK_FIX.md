# Git 网络连接问题解决方案

## 问题：`fatal: unable to access 'https://github.com/...': Recv failure: Connection was reset`

这是网络连接问题，常见于访问 GitHub。以下是几种解决方案：

## 解决方案

### 方案 1：使用 SSH 代替 HTTPS（推荐）

SSH 连接通常比 HTTPS 更稳定。

#### 步骤 1：生成 SSH 密钥（如果还没有）

```bash
ssh-keygen -t ed25519 -C "your_email@example.com"
```

按回车使用默认路径，可以设置密码或留空。

#### 步骤 2：添加 SSH 密钥到 GitHub

1. 复制公钥内容：
```bash
cat ~/.ssh/id_ed25519.pub
```

2. 在 GitHub 上：
   - 进入 **Settings** > **SSH and GPG keys**
   - 点击 **New SSH key**
   - 粘贴公钥内容并保存

#### 步骤 3：修改远程仓库地址为 SSH

```bash
cd D:\CS\blog
git remote set-url origin git@github.com:MatrixCQY/my-blog.git
```

#### 步骤 4：测试连接

```bash
ssh -T git@github.com
```

如果看到 "Hi MatrixCQY! You've successfully authenticated..." 说明连接成功。

#### 步骤 5：重新推送

```bash
git push -u origin main
```

---

### 方案 2：配置 Git 使用代理（如果有代理）

如果你有代理服务器，可以配置 Git 使用代理：

```bash
# HTTP/HTTPS 代理
git config --global http.proxy http://127.0.0.1:7890
git config --global https.proxy http://127.0.0.1:7890

# 或者只对 GitHub 使用代理
git config --global http.https://github.com.proxy http://127.0.0.1:7890
```

**注意：** 将 `7890` 替换为你的代理端口号。

取消代理：
```bash
git config --global --unset http.proxy
git config --global --unset https.proxy
```

---

### 方案 3：增加 Git 缓冲区大小

```bash
git config --global http.postBuffer 524288000
git config --global http.maxRequestBuffer 100M
```

---

### 方案 4：使用 GitHub Desktop 或 VS Code

如果命令行一直失败，可以使用图形化工具：
- **GitHub Desktop**：https://desktop.github.com/
- **VS Code**：内置 Git 支持，通常更稳定

---

### 方案 5：临时禁用 SSL 验证（仅用于测试，不推荐）

如果浏览器可以访问 GitHub，但命令行一直连接失败，可能是 SSL 证书验证问题。可以临时禁用 SSL 验证：

```bash
# 临时禁用 SSL 验证
git config --global http.sslVerify false

# 尝试推送
git push -u origin main

# 推送成功后，恢复 SSL 验证（重要！）
git config --global http.sslVerify true
```

**⚠️ 警告：** 禁用 SSL 验证会降低安全性，仅用于测试。推送成功后应立即恢复。

---

### 方案 6：重试多次

网络问题可能是暂时的，可以多试几次：

```bash
git push -u origin main
```

如果失败，等待几分钟后重试。

---

## 推荐方案

**优先尝试方案 1（SSH）**，因为：
- SSH 连接更稳定
- 不需要每次输入密码（如果配置了 SSH 密钥）
- 不受 HTTPS 连接问题影响

## 验证

推送成功后，你应该能看到：
```
Enumerating objects: X, done.
Counting objects: 100% (X/X), done.
...
To https://github.com/MatrixCQY/my-blog.git
 * [new branch]      main -> main
```
