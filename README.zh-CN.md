# Apple-Style Portfolio Template

[English](README.md) | [简体中文](README.zh-CN.md)

一个使用 Astro 构建的现代简约作品集模板，设计灵感来自苹果的设计美学。

在线演示: [apple-style-portfolio](https://apple-style-portfolio.yujay.dev/)

如果这个项目对你有帮助，欢迎给一个 star ⭐️。

## 特性

- 🍎 苹果风格设计美学
- ⚡️ 使用 Astro 构建，性能优异
- 🎨 使用 Tailwind CSS 构建样式
- 🌟 GSAP 动画效果
- 📱 完全响应式设计
- 🎬 集成 Three.js 实现 3D 元素
- ⚛️ 集成 React 组件

## 💼 商业使用

本模板采用 **MIT** 协议 —— 你可以拿它接客户项目、开发票、上线交付，没有任何附加条件，也没有被阉割的"专业版"。

如果你正在用它做付费项目，有三种方式支持这个项目：一次性 **$75 商用赞助**、卡住时的 **$199 落地协助**、以及 **$499/年 的工作室方案**。

**→ [商业使用与支持](./COMMERCIAL.md)**

## 目录

- [快速开始](#快速开始)
  - [环境要求](#环境要求)
  - [安装](#安装)
  - [开发](#开发)
  - [生产构建](#生产构建)
- [部署](#部署)
  - [使用 Vercel 部署](#使用-vercel-部署)
  - [使用 Cloudflare Pages 部署](#使用-cloudflare-pages-部署)
- [技术栈](#技术栈)
- [其他 Astro 模板](#其他-astro-模板)
- [许可证](#许可证)

## 快速开始

### 环境要求

- Node.js (v20 或更高版本)

### 安装

1. 克隆仓库：

```bash
# 克隆仓库
git clone https://github.com/itsyujay/apple-style-portfolio
cd apple-style-portfolio

# 或者使用 astro create
npm create astro@latest -- --template itsyujay/apple-style-portfolio
```

2. 安装依赖：

```bash
npm install
```

### 开发

启动开发服务器：

```bash
npm run dev
```

网站将在 `http://localhost:4321` 上运行

### 生产构建

创建生产构建：

```bash
npm run build
```

预览生产构建：

```bash
npm run preview
```

## 部署

### 使用 Vercel 部署

[![使用 Vercel 部署](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/itsyujay/apple-style-portfolio)

1. Fork 这个仓库
2. 使用你的 GitHub 账号连接到 Vercel
3. 选择 fork 的仓库
4. Vercel 将自动检测 Astro 并配置构建设置
5. 点击 "Deploy"

### 使用 Cloudflare Pages 部署

[![部署到 Cloudflare Pages](https://img.shields.io/badge/Deploy%20to-Cloudflare%20Pages-orange.svg?logo=cloudflare)](https://dash.cloudflare.com/sign-up)

1. Fork 这个仓库
2. 登录到 Cloudflare 控制台
3. 从侧边栏选择 "Pages"
4. 创建新项目并连接你的 GitHub 仓库
5. 配置构建设置：
   - 构建命令：`npm run build`
   - 构建输出目录：`dist`
   - Node.js 版本：20.x
6. 点击 "保存并部署"

## 技术栈

- [Astro](https://astro.build)
- [React](https://reactjs.org)
- [Tailwind CSS](https://tailwindcss.com)
- [GSAP](https://greensock.com/gsap)
- [Three.js](https://threejs.org)
- [Inter Font](https://rsms.me/inter)
- [Source Sans Pro](https://fonts.google.com/specimen/Source+Sans+Pro)

## 其他 Astro 模板

- **[Astroloop](https://github.com/lx-themes/astroloop)** —— 面向 AI agent 产品的落地页：带人工闸门的 agent loop 流程图，以及逐工具的权限矩阵。[Demo](https://astroloop.yujay.dev)
- [Astro Sassify](https://github.com/itsyujay/astro-sassify-template) —— SaaS 落地页，完整设计系统、暗色模式与视图过渡。[Demo](https://astro-sassify.yujay.dev/)
- [Astro Zen Blog](https://github.com/itsyujay/astro-zen-blog) —— 极简博客，排版针对长文阅读调过。[Demo](https://astro-zen-blog.yujay.dev/)
- [Quiet Bar](https://github.com/itsyujay/quiet-bar) —— 酒吧 / 餐厅单页。无 CSS 框架，无 JS 库。[Demo](https://quiet-bar-theme.yujay.dev)

全部 MIT，均可商用。

## 许可证

MIT License
