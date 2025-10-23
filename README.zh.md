# Personal Website

一个使用 Next.js 构建的简洁个人网站，包含博客和类似推特的"说说"功能。

A minimalist personal website built with Next.js, featuring blog posts and tweet-like thoughts.

## 功能特性 Features

- 📝 基于 Markdown 的博客系统 Markdown-based blog system
- 🎨 简洁优雅的界面设计 Clean and minimalist design inspired by gregbrockman.com
- 🌙 深色模式支持 Dark mode support
- 📱 响应式布局 Responsive design
- 🚀 可部署到 Vercel Ready for Vercel deployment
- ⚡ 静态生成，速度极快 Static generation for blazing fast performance
- 🏠 首页直接展示博客列表 Blog posts displayed directly on homepage

## 技术栈 Tech Stack

- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Deployment**: Vercel

## 开始使用 Getting Started

### 安装依赖 Install Dependencies

```bash
npm install
```

### 开发服务器 Development Server

```bash
npm run dev
```

在浏览器中打开 [http://localhost:3000](http://localhost:3000) 查看效果。

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

### 构建生产版本 Build for Production

```bash
npm run build
npm start
```

## 部署到 Vercel Deploy to Vercel

这个项目已经配置好可以直接部署到 Vercel：

This project is ready to deploy to Vercel:

1. 将代码推送到 GitHub 仓库 Push your code to a GitHub repository
2. 访问 [Vercel](https://vercel.com/new) 并导入项目 Visit [Vercel](https://vercel.com/new) and import your project
3. Vercel 会自动检测 Next.js 并配置构建设置 Vercel will automatically detect Next.js and configure build settings
4. 点击部署即可！ Click deploy!

或使用 Vercel CLI:

Or use the Vercel CLI:

```bash
npm install -g vercel
vercel
```

## 部署到 Vercel Deploy to Vercel

### 快速部署 Quick Deploy

1. 推送代码到 GitHub Push code to GitHub
2. 访问 [Vercel](https://vercel.com/new) 导入项目 Import project
3. 点击部署 Click Deploy

详细步骤请查看 [DEPLOY.md](./DEPLOY.md)

For detailed instructions, see [DEPLOY.md](./DEPLOY.md)

---

## 自定义内容 Customization

### 发布博客 Publish Blog Posts

只需在 `content/blog/` 目录下创建 Markdown 文件即可！文章会自动显示在首页。

Simply create Markdown files in `content/blog/` directory! Posts will automatically appear on the homepage.

**文件格式 File Format:**

```markdown
---
title: "文章标题"
date: "2024-01-20"
excerpt: "文章摘要，显示在首页列表"
---

# 文章正文

这里写你的内容，支持完整的 Markdown 语法。

## 二级标题

- 列表项
- 支持代码块
- 支持图片、链接等
```

**文件命名 File Naming:**
- 文件名将成为 URL：`my-post.md` → `/blog/my-post`
- 建议使用英文和连字符：`nextjs-tutorial.md`

### 修改个人信息 Update Personal Info

编辑 `app/page.tsx` 修改：
- 姓名 Your name
- 个人简介 Personal bio
- 邮箱地址 Email address

## 项目结构 Project Structure

```
p_website/
├── app/
│   ├── blog/
│   │   └── [slug]/
│   │       └── page.tsx      # 博客文章详情页 Blog post detail
│   ├── layout.tsx            # 根布局 Root layout
│   ├── page.tsx              # 首页（展示博客列表）Homepage with blog list
│   └── globals.css           # 全局样式 Global styles
├── content/
│   └── blog/                 # 📝 博客 Markdown 文件
│       ├── welcome.md
│       ├── nextjs-personal-site.md
│       └── markdown-guide.md
├── lib/
│   └── posts.ts              # 博客读取工具函数
├── public/                   # 静态资源 Static assets
├── .github/
│   └── copilot-instructions.md
├── HOW_TO_POST.md            # 📖 发布指南 Publishing guide
├── next.config.js
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

## 设计灵感 Design Inspiration

界面设计参考了 [gregbrockman.com](https://gregbrockman.com/)，追求简洁、清晰的阅读体验。

Design inspired by [gregbrockman.com](https://gregbrockman.com/), focusing on simplicity and clarity.

## License

MIT
