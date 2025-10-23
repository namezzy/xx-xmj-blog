#!/bin/bash

# 快速部署脚本

echo "📦 准备部署到 Vercel..."

# 检查是否有未提交的更改
if [[ -n $(git status -s) ]]; then
    echo "⚠️  检测到未提交的更改"
    read -p "是否提交所有更改? (y/n) " -n 1 -r
    echo
    if [[ $REPLY =~ ^[Yy]$ ]]; then
        git add .
        read -p "请输入提交信息: " commit_msg
        git commit -m "$commit_msg"
    else
        echo "❌ 取消部署"
        exit 1
    fi
fi

# 推送到 GitHub
echo "🚀 推送到 GitHub..."
git push

echo "✅ 完成！Vercel 将自动部署你的更新。"
echo "📱 访问 https://vercel.com/dashboard 查看部署状态"
