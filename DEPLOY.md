# 部署到 Vercel

## 方式 1：通过 Vercel 网站部署（推荐）

### 步骤 1：准备 Git 仓库

1. 初始化 Git 仓库（如果还没有）：
```bash
git init
git add .
git commit -m "Initial commit"
```

2. 在 GitHub 创建一个新仓库

3. 推送代码到 GitHub：
```bash
git remote add origin https://github.com/你的用户名/你的仓库名.git
git branch -M main
git push -u origin main
```

### 步骤 2：在 Vercel 部署

1. 访问 [Vercel](https://vercel.com)
2. 使用 GitHub 账号登录
3. 点击 "Add New Project"
4. 导入你的 GitHub 仓库
5. Vercel 会自动检测到 Next.js 项目
6. 点击 "Deploy" 

等待几分钟，你的网站就部署完成了！

### 步骤 3：自动部署

之后每次推送代码到 GitHub，Vercel 会自动重新部署：

```bash
# 编辑文件后
git add .
git commit -m "更新内容"
git push
```

---

## 方式 2：通过 Vercel CLI 部署

### 安装 Vercel CLI

```bash
npm install -g vercel
```

### 部署

```bash
# 在项目目录下运行
vercel

# 首次部署会询问一些问题，按照提示操作即可
```

### 生产环境部署

```bash
vercel --prod
```

---

## 发布新博客文章后部署

### 方法 1：通过 Git（推荐）

1. 在 `content/blog/` 创建新的 `.md` 文件
2. 提交并推送：
```bash
git add content/blog/你的文章.md
git commit -m "添加新文章：标题"
git push
```

3. Vercel 会自动检测到更新并重新部署

### 方法 2：通过 Vercel CLI

```bash
vercel --prod
```

---

## 自定义域名

1. 在 Vercel 项目设置中选择 "Domains"
2. 添加你的域名
3. 按照提示配置 DNS 记录

---

## 环境变量（可选）

如果需要配置环境变量：

1. 在 Vercel 项目设置中选择 "Environment Variables"
2. 添加你的环境变量
3. 重新部署项目

---

## 故障排查

### 构建失败

检查：
- `package.json` 中的依赖是否完整
- 运行 `npm run build` 本地测试
- 查看 Vercel 构建日志

### 页面显示问题

- 确保所有 Markdown 文件的 frontmatter 格式正确
- 检查文件路径是否正确

---

## 本地测试生产构建

部署前建议本地测试：

```bash
# 构建生产版本
npm run build

# 启动生产服务器
npm start
```

访问 http://localhost:3000 检查是否正常。

---

## 项目 URL

部署后，你会获得：
- 免费的 `.vercel.app` 域名
- 可选：自定义域名

示例：`https://你的项目名.vercel.app`

---

## 快速部署按钮

如果你想让其他人一键部署你的项目，可以在 README.md 中添加：

```markdown
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/你的用户名/你的仓库名)
```

---

祝部署顺利！🚀
