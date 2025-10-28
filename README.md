# ONE Web3 - 构建人类与智能共生的经济文明

![ONE Web3](https://img.shields.io/badge/ONE-Web3-blue)
![Next.js](https://img.shields.io/badge/Next.js-16.0-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0-38bdf8)

## 项目简介

ONE Web3 是一个去中心化的智能体经济生态系统，通过 AIDA、x402、RWA 和 DAO 四大支柱，构建从创意孵化到执行落地的完整闭环。

### 核心特性

- 🎨 **IDEA HUB** - AI 辅助创意孵化平台
- 🤖 **ANFT 智能体** - 可进化的数字 AI 人格
- 💼 **零工经济** - PFW 代币结算的任务市场
- 🏭 **Deploy Factory** - 无代码 DApp 工厂
- 💰 **x402 结算** - Multi-Call 高效支付
- 🏦 **RWA 生态** - 现实资产代币化
- 🗳️ **DAO 治理** - 社区驱动的去中心化治理

### 技术栈

- **前端框架**: Next.js 16 (Turbopack)
- **编程语言**: TypeScript
- **样式方案**: Tailwind CSS 4
- **动画库**: Framer Motion
- **图表库**: Recharts
- **图标库**: React Icons
- **UI 组件**: 自定义组件库

## 项目结构

\`\`\`
one-web3/
├── app/                    # Next.js App Router
│   ├── page.tsx           # 首页
│   ├── ecosystem/         # 生态架构页
│   ├── tokenomics/        # 代币经济页
│   ├── whitepaper/        # 白皮书页
│   ├── layout.tsx         # 全局布局
│   └── globals.css        # 全局样式
├── components/            # React 组件
│   ├── Header.tsx        # 导航头部
│   └── Footer.tsx        # 页脚
├── public/               # 静态资源
├── package.json          # 项目配置
└── README.md            # 项目文档
\`\`\`

## 快速开始

### 环境要求

- Node.js 18.17 或更高版本
- npm 或 yarn 或 pnpm

### 安装依赖

\`\`\`bash
npm install
# 或
yarn install
# 或
pnpm install
\`\`\`

### 开发模式

\`\`\`bash
npm run dev
# 或
yarn dev
# 或
pnpm dev
\`\`\`

打开浏览器访问 [http://localhost:3000](http://localhost:3000)

### 构建生产版本

\`\`\`bash
npm run build
# 或
yarn build
# 或
pnpm build
\`\`\`

### 启动生产服务器

\`\`\`bash
npm run start
# 或
yarn start
# 或
pnpm start
\`\`\`

## 页面说明

### 首页 (/)
- Hero 区域：品牌展示和核心价值主张
- 核心概念：AIDA、x402、RWA、DAO 简介
- 生态架构：8 层架构概览
- 代币体系：6 层代币简介
- CTA 区域：引导用户深入了解

### 生态架构 (/ecosystem)
- 8 层架构详细说明
- 交互式卡片展开
- 数据流向图
- 技术栈展示

### 代币经济 (/tokenomics)
- 6 层代币详情
- 交互式图表（饼图、雷达图）
- 代币流转示意
- 价值驱动因素

### 白皮书 (/whitepaper)
- 完整技术文档
- 目录导航
- 简介/详情切换
- 可下载 PDF

## 设计系统

### 颜色方案

- **主色**: `#0ea5e9` (天蓝)
- **强调色**:
  - 紫色: `#a855f7`
  - 青色: `#06b6d4`
  - 粉色: `#ec4899`

### 动画效果

- **淡入**: 页面元素渐显
- **浮动**: 背景装饰动画
- **悬停**: 卡片缩放和边框变化
- **页面切换**: 路由过渡动画

### 响应式设计

- **移动端**: < 768px
- **平板**: 768px - 1024px
- **桌面**: > 1024px

## 部署

### Vercel (推荐)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

1. 连接 GitHub 仓库
2. 自动检测 Next.js 项目
3. 一键部署

### Docker

\`\`\`bash
docker build -t one-web3 .
docker run -p 3000:3000 one-web3
\`\`\`

### 静态导出

\`\`\`bash
npm run build
# 输出在 .next 目录
\`\`\`

## 性能优化

- ✅ Turbopack 快速构建
- ✅ 图片懒加载
- ✅ 代码分割
- ✅ SSG 静态生成
- ✅ 字体优化

## 浏览器支持

- Chrome (最新)
- Firefox (最新)
- Safari (最新)
- Edge (最新)

## 开发团队

ONE Web3 由来自区块链、AI、金融领域的资深专家团队开发。

## 许可证

Copyright © 2021-2025 ONE Web3 Ecosystem. All rights reserved.

## 联系我们

- 官网: https://oneweb3.io
- Twitter: [@ONEWeb3_](https://twitter.com/ONEWeb3_)
- Telegram: [t.me/oneweb3](https://t.me/oneweb3)
- Email: contact@oneweb3.io

---

**构建人类与智能共生的经济文明** 🚀
