'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { FaLayerGroup, FaArrowLeft, FaCheckCircle, FaLightbulb, FaBrain, FaChartBar, FaUsers } from 'react-icons/fa'
import { Breadcrumb } from '@/components/ui/breadcrumb'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export default function IdeaHubPage() {
  return (
    <main className="min-h-screen pt-24 md:pt-28 lg:pt-32 pb-16 md:pb-20 bg-black">
      {/* Animated Background */}
      <div className="fixed inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-primary-500/30 to-primary-600/30 rounded-full mix-blend-screen filter blur-[120px] animate-float-slow"></div>
      </div>

      {/* Breadcrumb */}
      <div className="relative z-10 container-responsive mb-6 md:mb-8">
        <Breadcrumb
          items={[
            { label: '生态架构', href: '/ecosystem' },
            { label: 'L1 IDEA HUB', icon: <FaLayerGroup /> }
          ]}
        />
      </div>

      {/* Hero Section */}
      <section className="relative z-10 container-responsive mb-12 md:mb-16">
        <Link href="/ecosystem" className="inline-flex items-center gap-2 text-primary-400 hover:text-primary-300 transition-colors mb-6 group">
          <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" />
          <span>返回生态架构</span>
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center shadow-glow-lg">
              <FaLayerGroup className="text-white text-3xl md:text-4xl" />
            </div>
            <div>
              <Badge className="mb-2">L1 - 创意与研究层</Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black font-display">
                <span className="gradient-text-glow">IDEA HUB</span>
              </h1>
            </div>
          </div>

          <p className="text-xl md:text-2xl text-gray-300/90 leading-relaxed mb-8">
            人类与 AI 共同生成商业构想，创意孵化平台结合人类创造力和AI分析能力
          </p>

          <div className="flex flex-wrap gap-3">
            <Badge variant="outline" className="px-4 py-2">GPT-4</Badge>
            <Badge variant="outline" className="px-4 py-2">DALL-E</Badge>
            <Badge variant="outline" className="px-4 py-2">区块链确权</Badge>
            <Badge variant="outline" className="px-4 py-2">DAO治理</Badge>
          </div>
        </motion.div>
      </section>

      {/* Core Features */}
      <section className="relative z-10 container-responsive mb-12 md:mb-16">
        <h2 className="text-2xl md:text-3xl font-black mb-8 font-display">
          <span className="gradient-text-primary">核心功能</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {[
            {
              icon: FaBrain,
              title: 'AI辅助创意生成',
              description: '利用大语言模型帮助用户构思商业想法',
              color: 'from-primary-400 to-accent-cyan'
            },
            {
              icon: FaChartBar,
              title: '市场可行性分析',
              description: 'AI自动评估创意的市场潜力',
              color: 'from-accent-cyan to-accent-teal'
            },
            {
              icon: FaLightbulb,
              title: '创意确权系统',
              description: '通过CRT代币记录创意贡献',
              color: 'from-accent-teal to-secondary-400'
            },
            {
              icon: FaUsers,
              title: '协作创新工坊',
              description: '支持多人跨地域协作创新',
              color: 'from-secondary-400 to-secondary-500'
            }
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="group hover-lift hover-glow h-full">
                <CardHeader>
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-glow-sm`}>
                    <feature.icon className="text-white text-xl" />
                  </div>
                  <CardTitle className="text-xl font-display">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-400/90 leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="relative z-10 container-responsive mb-12 md:mb-16">
        <h2 className="text-2xl md:text-3xl font-black mb-8 font-display">
          <span className="gradient-text-secondary">工作流程</span>
        </h2>

        <Card className="glass-strong border border-primary-500/20">
          <CardContent className="p-6 md:p-8">
            <div className="space-y-6">
              {[
                { step: '1', title: '创意提交', desc: '用户提出初步商业构想' },
                { step: '2', title: 'AI分析', desc: 'GPT-4深度分析市场需求和可行性' },
                { step: '3', title: '方案生成', desc: '生成完整的商业计划和执行路线图' },
                { step: '4', title: '社区评审', desc: 'DAO社区投票评估项目价值' },
                { step: '5', title: '确权发行', desc: '获得CRT代币，记录创意贡献' }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center flex-shrink-0 font-bold text-white shadow-glow-sm">
                    {item.step}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-white mb-1">{item.title}</h3>
                    <p className="text-gray-400/90 text-sm">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Key Benefits */}
      <section className="relative z-10 container-responsive mb-12 md:mb-16">
        <h2 className="text-2xl md:text-3xl font-black mb-8 font-display">
          <span className="gradient-text-accent">核心优势</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {[
            '降低创业门槛',
            '提高创意质量',
            '快速验证想法',
            '保护知识产权',
            '激励创新思维',
            '连接全球资源'
          ].map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="glass-strong p-4 rounded-xl flex items-center gap-3 hover:border-primary-500/50 border border-transparent transition-colors"
            >
              <FaCheckCircle className="text-accent-teal text-xl flex-shrink-0" />
              <span className="text-white font-semibold">{benefit}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Output Section */}
      <section className="relative z-10 container-responsive">
        <Card className="glass-strong border-2 border-primary-500/30 neon-glow-multi">
          <CardContent className="p-6 md:p-8 text-center">
            <h3 className="text-2xl md:text-3xl font-black mb-4 font-display">
              <span className="gradient-text-glow">输出成果</span>
            </h3>
            <p className="text-lg md:text-xl text-gray-300/90 mb-6 leading-relaxed">
              生成商业构想白皮书，获得 <span className="text-primary-400 font-bold">CRT创意确权代币</span>
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Badge className="px-4 py-2 text-sm">白皮书文档</Badge>
              <Badge className="px-4 py-2 text-sm">CRT代币</Badge>
              <Badge className="px-4 py-2 text-sm">创意NFT</Badge>
              <Badge className="px-4 py-2 text-sm">市场分析报告</Badge>
            </div>
          </CardContent>
        </Card>
      </section>
    </main>
  )
}
