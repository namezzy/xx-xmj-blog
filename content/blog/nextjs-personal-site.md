---
title: "如何使用 Next.js 构建个人网站"
date: "2025-10-23"
excerpt: "使用 Next.js 14 和 App Router 构建现代化的个人网站。"
---

使用 Next.js 构建个人网站是一个很好的选择，它提供了强大的功能和优秀的开发体验。

## 为什么选择 Next.js

Next.js 提供了很多开箱即用的功能：

- **服务端渲染 (SSR)**：提升首屏加载速度和 SEO
- **静态生成 (SSG)**：预渲染页面，性能极佳
- **API 路由**：可以直接在项目中创建后端 API
- **优化的性能**：自动代码分割、图片优化等

## 快速开始

使用官方脚手架创建项目：

```bash
npx create-next-app@latest my-website
cd my-website
npm run dev
```

## 项目结构

```
my-website/
├── app/           # 页面和路由
├── components/    # 可复用组件
├── public/        # 静态资源
└── content/       # Markdown 内容
```

## 部署

部署到 Vercel 只需要几分钟：

1. 将代码推送到 GitHub
2. 在 Vercel 中导入项目
3. 自动部署完成！

每次推送到主分支都会自动触发部署，非常方便。

## 总结

Next.js 是构建个人网站的优秀选择，无论是博客、作品集还是个人主页，都能轻松实现。
