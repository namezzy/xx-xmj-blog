# 📝 如何发布博客

## 发布博客文章

### 步骤 1：创建 Markdown 文件

在 `content/blog/` 目录下创建一个新的 `.md` 文件：

```bash
# 例如：创建一个名为 my-first-post.md 的文件
touch content/blog/my-first-post.md
```

### 步骤 2：添加 Frontmatter 和内容

在文件中添加以下内容：

```markdown
---
title: "我的第一篇博客"
date: "2024-01-25"
excerpt: "这是我的第一篇博客文章，真让人兴奋！"
---

# 我的第一篇博客

欢迎阅读我的第一篇博客文章！

## 为什么写博客

写博客是一个很好的习惯：
- 记录学习过程
- 分享知识和经验
- 提升写作能力

## 接下来

我会继续分享更多有趣的内容。

---

感谢阅读！
```

### 步骤 3：保存并查看

1. 保存文件
2. 访问 `http://localhost:3000` 查看首页
3. 新文章会自动出现在博客列表中
4. 点击文章标题查看详情页

### Frontmatter 字段说明

必填字段：
- `title`: 文章标题
- `date`: 发布日期（格式：YYYY-MM-DD）
- `excerpt`: 文章摘要（显示在首页列表）

### 文件命名规则

- 文件名会成为 URL 路径
- `my-post.md` → `/blog/my-post`
- 建议使用小写字母和连字符
- 避免使用空格和特殊字符

### Markdown 语法提示

```markdown
# 一级标题
## 二级标题
### 三级标题

**粗体** *斜体* ~~删除线~~

- 无序列表
- 列表项 2

1. 有序列表
2. 列表项 2

[链接文字](https://example.com)

![图片描述](图片URL)

> 引用文字

\`行内代码\`

\`\`\`javascript
// 代码块
console.log('Hello');
\`\`\`
```

---

## 📂 文件结构示例

```
content/blog/
├── welcome.md              # 欢迎文章
├── nextjs-personal-site.md # Next.js 教程
├── markdown-guide.md       # Markdown 指南
└── my-new-post.md         # 你的新文章
```

---

## 💡 写作小技巧

1. **使用有意义的文件名**
   - ✅ `nextjs-tutorial.md`
   - ❌ `post1.md`

2. **写好摘要**
   - 摘要会显示在首页列表
   - 建议 50-150 字

3. **添加日期**
   - 文章会按日期倒序排列
   - 使用 YYYY-MM-DD 格式

4. **使用 Markdown 预览**
   - VS Code 可以按 `Ctrl+Shift+V` 预览
   - 或安装 Markdown Preview Enhanced 插件

---

## 🚀 部署到 Vercel

### 方式 1：通过 Git

1. 将代码推送到 GitHub：
```bash
git add .
git commit -m "Add new blog post"
git push
```

2. Vercel 会自动检测并部署
3. 新文章立即上线！

### 方式 2：手动部署

```bash
vercel deploy
```

---

## ❓ 常见问题

**Q: 博客文章不显示？**

A: 检查：
- 文件是否在 `content/blog/` 目录下
- 文件扩展名是否为 `.md`
- Frontmatter 格式是否正确（三个短横线）

**Q: 如何添加图片？**

A: 两种方式：
1. 使用外部链接：`![描述](https://example.com/image.jpg)`
2. 放在 `public/` 目录：`![描述](/images/photo.jpg)`

**Q: 如何修改文章？**

A: 直接编辑对应的 `.md` 文件，保存即可。

**Q: 如何删除文章？**

A: 删除对应的 `.md` 文件即可。

**Q: 文章排序规则？**

A: 文章按照 frontmatter 中的 `date` 字段倒序排列，最新的在最上面。

---

## 📚 更多资源

- [Markdown 指南](https://www.markdownguide.org/)
- [Markdown 在线编辑器](https://dillinger.io/)
- [Next.js 文档](https://nextjs.org/docs)
- [Vercel 部署指南](https://vercel.com/docs)

---

祝你写作愉快！🎉
