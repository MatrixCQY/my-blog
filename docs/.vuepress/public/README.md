# 静态资源目录

此目录用于存放网站的静态资源文件。

## 必需文件

### Logo
- 文件名：`logo.png`
- 建议尺寸：120x120 像素
- 格式：PNG（支持透明背景）

### Favicon
- 文件名：`favicon.ico`
- 建议尺寸：32x32 或 16x16 像素
- 格式：ICO

## 使用方法

将图片文件放在此目录下，然后在 `config.ts` 中引用：

```typescript
logo: "/logo.png",  // 不需要 public/ 前缀
```

## 在线工具

- Logo 制作：可以使用在线工具如 [Canva](https://www.canva.com/) 或 [Logo Maker](https://www.logomaker.com/)
- Favicon 生成：可以使用 [Favicon Generator](https://www.favicon-generator.org/)

## 临时方案

如果暂时没有 Logo 和 Favicon，可以：
1. 从网上下载免费的图标
2. 使用文字 Logo
3. 暂时注释掉 config.ts 中的 logo 配置
