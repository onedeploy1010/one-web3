'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { FaLayerGroup, FaRobot, FaTasks, FaIndustry, FaCoins, FaWallet, FaChartLine, FaNetworkWired, FaCubes, FaArrowRight } from 'react-icons/fa'
import { Breadcrumb } from '@/components/ui/breadcrumb'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export default function EcosystemPage() {
  const ecosystemLayers = [
    {
      level: 'L1',
      name: 'IDEA HUB',
      subtitle: '创意与研究层',
      description: '人类与 AI 共同生成商业构想，创意孵化平台结合人类创造力和AI分析能力',
      icon: FaLayerGroup,
      color: 'from-primary-500 to-primary-600',
      glowColor: 'shadow-glow-sm hover:shadow-glow-md',
      href: '/ecosystem/l1-idea-hub',
      tags: ['GPT-4', 'DALL-E', '区块链确权']
    },
    {
      level: 'L2',
      name: 'ANFT 智能体',
      subtitle: '智能人格层',
      description: '可进化的数字智能体，创建可进化、有记忆的AI人格智能体',
      icon: FaRobot,
      color: 'from-accent-cyan to-accent-teal',
      glowColor: 'shadow-glow-sm hover:shadow-glow-md',
      href: '/ecosystem/l2-anft',
      tags: ['ERC-721', 'Vector DB', 'Fine-tuning']
    },
    {
      level: 'L3',
      name: '任务激励层',
      subtitle: '协作与劳动力层',
      description: 'PFW 结算机制，零工经济平台，连接任务发布者与执行者',
      icon: FaTasks,
      color: 'from-accent-teal to-accent-emerald',
      glowColor: 'shadow-glow-sm hover:shadow-glow-md',
      href: '/ecosystem/l3-task',
      tags: ['智能合约', 'Oracle', 'ZK证明']
    },
    {
      level: 'L4',
      name: 'Deploy Factory',
      subtitle: '部署与执行层',
      description: '无代码 DApp 工厂，快速部署去中心化应用，无需编程知识',
      icon: FaIndustry,
      color: 'from-accent-emerald to-secondary-400',
      glowColor: 'shadow-glow-sm hover:shadow-glow-md',
      href: '/ecosystem/l4-deploy',
      tags: ['低代码', 'Multi-chain', 'Hardhat']
    },
    {
      level: 'L5',
      name: 'x402 结算中心',
      subtitle: '支付与收益分配层',
      description: 'Multi-Call 执行，统一的支付结算和收益分配中枢',
      icon: FaCoins,
      color: 'from-secondary-400 to-secondary-500',
      glowColor: 'shadow-glow-sm hover:shadow-glow-md',
      href: '/ecosystem/l5-x402',
      tags: ['Layer2', 'Rollup', 'Bridge']
    },
    {
      level: 'L6',
      name: 'ONE Wallet',
      subtitle: '身份与账户层',
      description: '统一钱包体系，一站式数字身份和资产管理',
      icon: FaWallet,
      color: 'from-secondary-500 to-accent-violet',
      glowColor: 'shadow-glow-sm hover:shadow-glow-md',
      href: '/ecosystem/l6-wallet',
      tags: ['EIP-4337', 'DID', 'Multi-sig']
    },
    {
      level: 'L7',
      name: 'RWA 投资生态',
      subtitle: '现实经营映射层',
      description: '代币化经营，将现实世界资产映射为链上代币',
      icon: FaChartLine,
      color: 'from-accent-violet to-accent-fuchsia',
      glowColor: 'shadow-glow-sm hover:shadow-glow-md',
      href: '/ecosystem/l7-rwa',
      tags: ['RWA协议', '预言机', 'KYC/AML']
    },
    {
      level: 'L8',
      name: '分片结算公链',
      subtitle: '数据与隐私执行层',
      description: 'zk 验证，高性能、隐私保护的底层公链',
      icon: FaNetworkWired,
      color: 'from-accent-fuchsia to-primary-500',
      glowColor: 'shadow-glow-sm hover:shadow-glow-md',
      href: '/ecosystem/l8-chain',
      tags: ['Sharding', 'ZK-Rollup', 'P2P']
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08
      }
    }
  }

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  }

  return (
    <main className="min-h-screen pt-24 md:pt-28 lg:pt-32 pb-16 md:pb-20 bg-black">
      {/* Animated Background */}
      <div className="fixed inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-primary-500/30 to-accent-cyan/30 rounded-full mix-blend-screen filter blur-[120px] animate-float-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-secondary-500/30 to-accent-violet/30 rounded-full mix-blend-screen filter blur-[120px] animate-float"></div>
      </div>

      {/* Breadcrumb Navigation */}
      <div className="relative z-10 container-responsive mb-6 md:mb-8">
        <Breadcrumb
          items={[
            { label: '生态架构', icon: <FaCubes /> }
          ]}
        />
      </div>

      {/* Hero Section */}
      <section className="relative z-10 container-responsive mb-12 md:mb-16 lg:mb-20">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-4xl mx-auto px-4"
        >
          <Badge className="mb-4 md:mb-6 text-sm md:text-base font-display">8层生态架构</Badge>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-4 md:mb-6 font-display">
            <span className="gradient-text-glow">生态架构</span>
          </h1>
          <p className="text-base md:text-lg lg:text-xl text-gray-300/90 mb-8 md:mb-10 leading-relaxed">
            ONE Web3 采用 8 层架构设计，从创意孵化到底层公链，构建完整的智能体经济生态
          </p>
          <div className="flex flex-wrap justify-center gap-3 md:gap-4 text-xs md:text-sm">
            <Badge variant="outline" className="px-4 py-2 glass-strong">创意驱动</Badge>
            <Badge variant="outline" className="px-4 py-2 glass-strong">AI赋能</Badge>
            <Badge variant="outline" className="px-4 py-2 glass-strong">经济闭环</Badge>
            <Badge variant="outline" className="px-4 py-2 glass-strong">隐私保护</Badge>
          </div>
        </motion.div>
      </section>

      {/* Ecosystem Cards Grid */}
      <section className="relative z-10 container-responsive mb-12 md:mb-16 lg:mb-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 lg:gap-6"
        >
          {ecosystemLayers.map((layer, index) => {
            const Icon = layer.icon
            return (
              <motion.div
                key={layer.level}
                variants={itemVariants}
              >
                <Link href={layer.href}>
                  <Card className="group h-full hover-lift cursor-pointer relative overflow-hidden">
                    {/* Gradient overlay on hover */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${layer.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>

                    <CardHeader className="relative z-10">
                      <div className={`w-14 h-14 md:w-16 md:h-16 rounded-xl bg-gradient-to-br ${layer.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform ${layer.glowColor}`}>
                        <Icon className="text-white text-2xl md:text-3xl" />
                      </div>

                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-xl md:text-2xl font-black gradient-text-primary font-display">{layer.level}</span>
                      </div>

                      <CardTitle className="text-lg md:text-xl font-display mb-1 group-hover:text-primary-400 transition-colors">{layer.name}</CardTitle>
                      <CardDescription className="text-xs md:text-sm">{layer.subtitle}</CardDescription>
                    </CardHeader>

                    <CardContent className="relative z-10">
                      <p className="text-gray-400/90 text-sm leading-relaxed mb-4 line-clamp-3">{layer.description}</p>

                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {layer.tags.map((tag, idx) => (
                          <span key={idx} className="text-xs px-2 py-1 rounded-full glass border border-primary-500/20">
                            {tag}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center gap-2 text-primary-400 text-sm font-semibold group-hover:gap-3 transition-all">
                        <span>查看详情</span>
                        <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            )
          })}
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 container-responsive text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto glass-strong p-8 md:p-10 lg:p-12 rounded-3xl neon-glow-multi border border-primary-500/30"
        >
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-black mb-4 md:mb-6 text-white font-display">
            <span className="gradient-text-glow">探索完整技术文档</span>
          </h3>
          <p className="text-gray-300/90 mb-6 md:mb-8 text-sm md:text-base lg:text-lg leading-relaxed">
            深入了解每一层的技术实现细节和架构设计思路
          </p>
          <Link
            href="/whitepaper"
            className="inline-block bg-gradient-to-r from-primary-500 to-secondary-500 px-6 md:px-8 py-3 md:py-4 rounded-full text-base md:text-lg font-semibold hover-lift hover-glow transition-all font-display"
          >
            阅读白皮书
          </Link>
        </motion.div>
      </section>
    </main>
  )
}
