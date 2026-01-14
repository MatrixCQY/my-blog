import { defineUserConfig } from "vuepress";
import { viteBundler } from "@vuepress/bundler-vite";
import { hopeTheme } from "vuepress-theme-hope";

export default defineUserConfig({
  lang: "zh-CN",
  title: "学习笔记",
  description: "数学和代码学习笔记博客",
  base: "/",

  bundler: viteBundler({
    viteOptions: {
      css: {
        preprocessorOptions: {
          scss: {
            quietDeps: true,
            silenceDeprecations: ['if-function'],
          },
        },
      },
    },
  }),
  
  head: [
    ["link", { rel: "icon", href: "/favicon.ico" }],
  ],

  theme: hopeTheme({
    // Logo 配置
    logo: "/logo.png",
    
    // 导航栏配置
    navbar: [
      {
        text: "首页",
        link: "/",
        icon: "home",
      },
      {
        text: "数学笔记",
        link: "/math/",
        icon: "function",
      },
      {
        text: "代码笔记",
        link: "/code/",
        icon: "code",
      },
    ],

    // 侧边栏配置
    sidebar: {
      "/math/": "structure",
      "/code/": "structure",
    },

    // 页脚配置
    footer: "Copyright © 2025",
    displayFooter: true,

    // 暗色模式切换
    darkmode: "toggle",

    // 作者信息
    author: {
      name: "作者",
    },

    // 面包屑导航
    breadcrumb: true,

    // 页面信息
    pageInfo: ["Author", "Date", "Category", "Tag", "ReadingTime"],

    // Markdown 配置
    markdown: {
      // 启用数学公式支持
      math: true,
    },

    // 插件配置
    plugins: {
      // 搜索插件配置
      search: {
        // 搜索快捷键
        hotKeys: ["k", "/"],
      },

      // Markdown 增强
      mdEnhance: {
        // 启用代码块行号
        lineNumbers: true,
        // 启用代码复制按钮
        copy: true,
      },
    },
  }),
});
