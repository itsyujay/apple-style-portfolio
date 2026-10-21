# Apple-Style Portfolio Template

[English](README.md) | [简体中文](README.zh-CN.md)

A modern, minimalist portfolio template built with Astro and designed with Apple's design aesthetic in mind.

live demo: [apple-style-portfolio](https://apple-style-portfolio.yujay.dev/)

If you find this project helpful, please consider giving it a star ⭐️.

## Features

- 🍎 Apple-style design aesthetic
- ⚡️ Built with Astro for optimal performance
- 🎨 Tailwind CSS for styling
- 🌟 GSAP animations
- 📱 Fully responsive design
- 🎬 Three.js integration for 3D elements
- ⚛️ React components integration

## 💼 Commercial Use

This template is **MIT** — use it for client work, invoice for it, ship it. No strings, no gated "pro" version.

If you're shipping paid projects on it, there are three ways to support the work: a one-time
**$75 commercial sponsorship**, a **$199 ship-assist** if you're stuck, and a **$499/yr agency plan**.

**→ [Commercial use & support](./COMMERCIAL.md)**

## Table of Contents

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Development](#development)
  - [Building for Production](#building-for-production)
- [Deployment](#deployment)
  - [Deploy with Vercel](#deploy-with-vercel)
  - [Deploy with Cloudflare Pages](#deploy-with-cloudflare-pages)
- [Tech Stack](#tech-stack)
- [More Astro templates](#more-astro-templates)
- [License](#license)

## Getting Started

### Prerequisites

- Node.js (v20 or higher)

### Installation

1. Clone the repository:

```bash
# Clone the repository
git clone https://github.com/itsyujay/apple-style-portfolio
cd apple-style-portfolio

# Or use astro create
npm create astro@latest -- --template itsyujay/apple-style-portfolio
```

2. Install dependencies:

```bash
npm install
```

### Development

To start the development server:

```bash
npm run dev
```

The site will be available at `http://localhost:4321`

### Building for Production

To create a production build:

```bash
npm run build
```

To preview the production build:

```bash
npm run preview
```

## Deployment

### Deploy with Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/itsyujay/apple-style-portfolio)

1. Fork this repository
2. Connect to Vercel using your GitHub account
3. Select the forked repository
4. Vercel will automatically detect Astro and configure the build settings
5. Click "Deploy"

### Deploy with Cloudflare Pages

[![Deploy to Cloudflare Pages](https://img.shields.io/badge/Deploy%20to-Cloudflare%20Pages-orange.svg?logo=cloudflare)](https://dash.cloudflare.com/sign-up)

1. Fork this repository
2. Log in to the Cloudflare dashboard
3. Select "Pages" from the sidebar
4. Create a new project and connect your GitHub repository
5. Configure the build settings:
   - Build command: `npm run build`
   - Build output directory: `dist`
   - Node.js version: 20.x
6. Click "Save and Deploy"

## Tech Stack

- [Astro](https://astro.build)
- [React](https://reactjs.org)
- [Tailwind CSS](https://tailwindcss.com)
- [GSAP](https://greensock.com/gsap)
- [Three.js](https://threejs.org)
- [Inter Font](https://rsms.me/inter)
- [Source Sans Pro](https://fonts.google.com/specimen/Source+Sans+Pro)

## More Astro templates

- **[Astroloop](https://github.com/lx-themes/astroloop)** — a landing page for AI agent products: an agent-loop diagram with a human handoff gate, and a per-tool permission matrix. [Demo](https://astroloop.yujay.dev)
- [Astro Sassify](https://github.com/itsyujay/astro-sassify-template) — a SaaS landing page with a full design system, dark mode and view transitions. [Demo](https://astro-sassify.yujay.dev/)
- [Astro Zen Blog](https://github.com/itsyujay/astro-zen-blog) — a minimal blog, with typography tuned for long-form reading. [Demo](https://astro-zen-blog.yujay.dev/)
- [Quiet Bar](https://github.com/itsyujay/quiet-bar) — a one-pager for a bar or restaurant. No CSS framework, no JavaScript libraries. [Demo](https://quiet-bar-theme.yujay.dev)

All MIT, all free for commercial use.

## License

MIT License

Using it commercially? See [COMMERCIAL.md](./COMMERCIAL.md) — MIT means you owe nothing, but there is a button if you'd rather not.
