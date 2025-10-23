# Levi's Personal Website

A minimalist personal website built with Next.js, featuring a clean blog system with Markdown support. Inspired by [gregbrockman.com](https://gregbrockman.com/).

## ✨ Features

- 📝 **Markdown-based Blog System** - Write posts in Markdown
- 🎨 **Minimalist Design** - Clean, distraction-free interface
- 📱 **Responsive Layout** - Works on all devices
- ⚡ **Static Generation** - Blazing fast performance
- 🚀 **Vercel Ready** - One-click deployment
- 🎯 **No CMS Required** - Simple file-based content management

## 🚀 Quick Start

### Installation

```bash
# Clone the repository
git clone https://github.com/namezzy/xx-xmj-blog.git
cd xx-xmj-blog

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view your site.

### Build for Production

```bash
npm run build
npm start
```

## 📝 Writing Blog Posts

### Create a New Post

Simply create a new Markdown file in the `content/blog/` directory:

```bash
touch content/blog/my-new-post.md
```

### Post Format

Each post requires frontmatter metadata:

```markdown
---
title: "My Blog Post Title"
date: "2024-01-25"
excerpt: "A brief description of the post that appears on the homepage"
---

# Your Content Here

Write your content using **Markdown** syntax.

## Subheading

- List item 1
- List item 2

[Link example](https://example.com)
```

### Frontmatter Fields

- `title` (required): Post title
- `date` (required): Publication date (YYYY-MM-DD format)
- `excerpt` (required): Brief description shown on homepage

### File Naming

- Filename becomes the URL slug
- `my-post.md` → `/blog/my-post`
- Use lowercase letters and hyphens
- Avoid spaces and special characters

## 🎨 Customization

### Personal Information

Edit `app/page.tsx` to update:
- Your name (line 8)
- About section (lines 20-26)
- Email address (line 34)

### Site Metadata

Edit `app/layout.tsx` to change:
- Site title
- Meta description

### Styling

The site uses a paper-like design with:
- Gray background (#666666)
- White content area (left/right margins: 285px)
- Georgia serif font
- Classic blue hyperlinks (#0000EE)

Modify `app/globals.css` to customize the appearance.

## 📁 Project Structure

```
xx-xmj-blog/
├── app/
│   ├── blog/
│   │   └── [slug]/
│   │       └── page.tsx      # Blog post detail page
│   ├── layout.tsx            # Root layout
│   ├── page.tsx              # Homepage with blog list
│   └── globals.css           # Global styles
├── content/
│   └── blog/                 # 📝 Markdown blog posts
│       ├── some-insights.md
│       └── nextjs-personal-site.md
├── lib/
│   └── posts.ts              # Blog post utilities
├── public/                   # Static assets
├── DEPLOY.md                 # Deployment guide
├── HOW_TO_POST.md            # Posting guide
└── package.json
```

## 🚀 Deploy to Vercel

### Method 1: Via Vercel Dashboard (Recommended)

1. Push your code to GitHub
2. Visit [Vercel](https://vercel.com/new)
3. Import your repository
4. Click "Deploy"

Vercel automatically detects Next.js and configures everything.

### Method 2: Via Vercel CLI

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel

# Deploy to production
vercel --prod
```

### Automatic Deployments

After initial setup, every push to `main` branch triggers automatic deployment:

```bash
git add .
git commit -m "Add new blog post"
git push
```

For detailed deployment instructions, see [DEPLOY.md](./DEPLOY.md).

## 📖 Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/) with App Router
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Markdown Processing**: 
  - [gray-matter](https://github.com/jonschlinkert/gray-matter) - Parse frontmatter
  - [remark](https://github.com/remarkjs/remark) - Markdown to HTML
- **Deployment**: [Vercel](https://vercel.com/)
- **Language**: TypeScript

## 🎯 Design Philosophy

This site follows a minimalist approach inspired by classic web design:

- **Content First**: No distractions, just your words
- **File-Based**: No database, no CMS complexity
- **Developer Friendly**: Write in Markdown, deploy with Git
- **Fast**: Static generation for instant page loads
- **Timeless**: Classic typography and simple layout

## 📄 License

MIT

## 🙏 Acknowledgments

Design inspired by [Greg Brockman's website](https://gregbrockman.com/)

---

Built with ❤️ by Levi
