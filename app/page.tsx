'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { FaRocket, FaRobot, FaCoins, FaNetworkWired, FaChartLine, FaArrowRight, FaCheckCircle, FaLightbulb, FaTasks, FaWallet, FaIndustry, FaLayerGroup, FaCubes, FaStar, FaShieldAlt, FaBolt, FaGlobe } from 'react-icons/fa'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  }

  return (
    <main className="min-h-screen bg-black">
      {/* Hero Section - 超大视觉冲击 */}
      <section className="relative min-h-[100vh] flex items-center justify-center overflow-hidden">
        {/* 动态背景渐变 */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-primary-950/20 to-black"></div>
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-gradient-to-r from-primary-500/30 to-accent-cyan/30 rounded-full blur-[120px]"
          ></motion.div>
          <motion.div
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
            className="absolute bottom-0 right-1/4 w-[700px] h-[700px] bg-gradient-to-r from-secondary-500/30 to-accent-fuchsia/30 rounded-full blur-[140px]"
          ></motion.div>
        </div>

        {/* 网格背景 */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(14,165,233,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(14,165,233,0.03)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_80%)]"></div>

        {/* 内容 */}
        <div className="relative z-10 container-responsive text-center px-4 py-20">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="max-w-6xl mx-auto"
          >
            {/* 闪亮徽章 */}
            <motion.div variants={itemVariants} className="flex justify-center mb-8">
              <Badge className="text-base px-6 py-3 font-display font-semibold border-primary-500/30 bg-primary-500/10 backdrop-blur-xl shadow-glow-md">
                <FaStar className="inline mr-2 text-primary-400 animate-pulse" />
                下一代 Web3 智能体生态系统
              </Badge>
            </motion.div>

            {/* 超大标题 */}
            <motion.h1
              variants={itemVariants}
              className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black mb-8 leading-[0.9] tracking-tight font-display"
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-primary-200 to-white animate-gradient-x">
                ONE Web3
              </span>
            </motion.h1>

            {/* 副标题 - 更大更醒目 */}
            <motion.div variants={itemVariants} className="mb-10">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white/90 leading-tight max-w-5xl mx-auto font-display mb-6">
                构建人类与智能
                <span className="relative inline-block mx-3">
                  <span className="gradient-text-glow">共生</span>
                  <motion.span
                    className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 0.8, duration: 0.6 }}
                  ></motion.span>
                </span>
                的经济文明
              </h2>
              <p className="text-xl sm:text-2xl md:text-3xl text-gray-300/80 max-w-4xl mx-auto leading-relaxed">
                通过 AI · 区块链 · RWA · DAO 驱动的全球智能体生态
              </p>
            </motion.div>

            {/* CTA 按钮组 - 更现代的设计 */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-5 justify-center items-stretch sm:items-center mb-20"
            >
              <Button size="xl" className="group relative overflow-hidden font-display font-bold text-lg px-10 py-7 rounded-2xl shadow-glow-lg hover:shadow-glow-xl transition-all" asChild>
                <Link href="/ecosystem">
                  <span className="relative z-10 flex items-center">
                    <FaRocket className="mr-3 text-xl" />
                    探索生态架构
                    <FaArrowRight className="ml-3 group-hover:translate-x-2 transition-transform" />
                  </span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-primary-400 to-secondary-400"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  ></motion.div>
                </Link>
              </Button>
              <Button size="xl" variant="outline" className="font-display font-bold text-lg px-10 py-7 rounded-2xl border-2 border-primary-500/30 hover:border-primary-500/60 backdrop-blur-xl hover-lift" asChild>
                <Link href="/whitepaper" className="flex items-center">
                  <FaCubes className="mr-3 text-xl" />
                  查看白皮书
                </Link>
              </Button>
            </motion.div>

            {/* 数据统计 - 玻璃态卡片 */}
            <motion.div
              variants={containerVariants}
              className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto"
            >
              {[
                { value: '8层', label: '生态架构', icon: FaLayerGroup, color: 'from-primary-500 to-accent-cyan' },
                { value: '6种', label: '代币体系', icon: FaCoins, color: 'from-accent-cyan to-accent-teal' },
                { value: '$1B+', label: '市值目标', icon: FaChartLine, color: 'from-accent-teal to-secondary-400' },
                { value: '10M+', label: '目标用户', icon: FaGlobe, color: 'from-secondary-400 to-accent-fuchsia' },
              ].map((stat, index) => {
                const Icon = stat.icon
                return (
                  <motion.div key={index} variants={itemVariants}>
                    <div className="group relative glass-strong rounded-2xl p-6 hover:scale-105 transition-all duration-300 border border-primary-500/20 hover:border-primary-500/40 shadow-glow-sm hover:shadow-glow-md">
                      <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity`}></div>
                      <Icon className="text-4xl mb-4 mx-auto bg-gradient-to-br ${stat.color} text-transparent bg-clip-text" style={{
                        background: `linear-gradient(135deg, var(--tw-gradient-stops))`,
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent'
                      }} />
                      <div className="text-4xl font-black gradient-text-primary mb-2 font-display">{stat.value}</div>
                      <div className="text-gray-400 text-sm font-medium">{stat.label}</div>
                    </div>
                  </motion.div>
                )
              })}
            </motion.div>
          </motion.div>
        </div>

        {/* 滚动指示器 */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 1, repeat: Infinity, repeatType: "reverse" }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-primary-500/30 rounded-full flex items-start justify-center p-2">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-1.5 bg-primary-400 rounded-full"
            ></motion.div>
          </div>
        </motion.div>
      </section>

      {/* 核心特性 - 大卡片展示 */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-primary-950/5 to-black"></div>

        <div className="relative z-10 container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <Badge variant="secondary" className="mb-6 text-base font-display px-6 py-3 border-primary-500/30">
              <FaBolt className="inline mr-2 text-primary-400" />
              核心特性
            </Badge>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 font-display">
              <span className="gradient-text-glow">四大技术支柱</span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              通过 AI、区块链、RWA 和 DAO 技术构建完整的智能体经济生态
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
            {[
              {
                icon: FaRobot,
                title: 'AIDA',
                subtitle: 'AI 智能驱动平台',
                description: 'AI 平台币，驱动模型训练与算力质押，生成智能体子币，实现完整的智能体经济循环',
                color: 'from-primary-500 to-accent-cyan',
                features: ['AI 模型训练', '算力质押挖矿', '智能体子币生成', 'GPT-4 集成'],
                gradient: 'from-primary-500/20 to-accent-cyan/20'
              },
              {
                icon: FaCoins,
                title: 'x402',
                subtitle: '智能结算中心',
                description: '去中心化支付与收益分配中枢，支持多链分片验证、隐私计算与实时结算',
                color: 'from-accent-cyan to-accent-emerald',
                features: ['跨链支付', '智能分账', '实时结算', 'ZK 隐私保护'],
                gradient: 'from-accent-cyan/20 to-accent-emerald/20'
              },
              {
                icon: FaChartLine,
                title: 'RWA',
                subtitle: '现实资产映射',
                description: '将现实世界经营成本代币化，通过裂变系统实现资产上链与收益分红',
                color: 'from-accent-emerald to-secondary-400',
                features: ['资产代币化', '链上确权', '收益分红', '合规框架'],
                gradient: 'from-accent-emerald/20 to-secondary-400/20'
              },
              {
                icon: FaNetworkWired,
                title: 'DAO',
                subtitle: '去中心化治理',
                description: '人类与 AI 共同治理，通过 HUB 代币驱动生态参数调节与社区决策',
                color: 'from-secondary-500 to-accent-fuchsia',
                features: ['链上投票', '参数治理', '社区提案', '透明决策'],
                gradient: 'from-secondary-500/20 to-accent-fuchsia/20'
              }
            ].map((pillar, index) => {
              const Icon = pillar.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="group h-full relative overflow-hidden border-primary-500/20 hover:border-primary-500/40 transition-all hover-lift shadow-glow-sm hover:shadow-glow-lg">
                    {/* 悬浮渐变背景 */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${pillar.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>

                    <CardHeader className="relative z-10 pb-6">
                      <div className="flex items-start justify-between mb-6">
                        <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${pillar.color} flex items-center justify-center shadow-glow-md group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                          <Icon className="text-white text-3xl" />
                        </div>
                        <Badge variant="outline" className="border-primary-500/30 text-xs">核心</Badge>
                      </div>
                      <CardTitle className="text-3xl md:text-4xl mb-3 font-display group-hover:text-primary-300 transition-colors">{pillar.title}</CardTitle>
                      <CardDescription className="text-base font-semibold text-primary-400">
                        {pillar.subtitle}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="relative z-10">
                      <p className="text-gray-300/90 mb-6 leading-relaxed text-base">
                        {pillar.description}
                      </p>
                      <div className="grid grid-cols-2 gap-3">
                        {pillar.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center text-sm text-gray-300">
                            <FaCheckCircle className="text-accent-teal mr-2 flex-shrink-0" />
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* 8层生态架构 - 视觉化展示 */}
      <section className="relative py-32 overflow-hidden bg-gradient-to-b from-black via-secondary-950/5 to-black">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <Badge variant="outline" className="mb-6 text-base font-display px-6 py-3 border-primary-500/30">
              <FaCubes className="inline mr-2 text-primary-400" />
              生态架构
            </Badge>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 font-display">
              <span className="gradient-text-glow">8 层完整生态</span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              从创意孵化到底层公链，构建完整的去中心化智能体经济体系
            </p>
          </motion.div>

          <div className="max-w-6xl mx-auto">
            {[
              { level: 'L1', name: 'IDEA HUB', desc: '创意与研究层 · 人类与 AI 共同孵化商业构想', icon: FaLightbulb, color: 'from-primary-500 to-primary-600' },
              { level: 'L2', name: 'ANFT 智能体', desc: '智能人格层 · 可进化的数字智能体', icon: FaRobot, color: 'from-accent-cyan to-accent-teal' },
              { level: 'L3', name: '任务激励层', desc: '协作与劳动力层 · PFW 结算机制', icon: FaTasks, color: 'from-accent-teal to-accent-emerald' },
              { level: 'L4', name: 'Deploy Factory', desc: '部署与执行层 · 无代码 DApp 工厂', icon: FaIndustry, color: 'from-accent-emerald to-secondary-400' },
              { level: 'L5', name: 'x402 结算中心', desc: '支付与收益分配层 · Multi-Call 执行', icon: FaCoins, color: 'from-secondary-400 to-secondary-500' },
              { level: 'L6', name: 'ONE Wallet', desc: '身份与账户层 · 统一钱包体系', icon: FaWallet, color: 'from-secondary-500 to-accent-violet' },
              { level: 'L7', name: 'RWA 投资生态', desc: '现实经营映射层 · 代币化经营', icon: FaChartLine, color: 'from-accent-violet to-accent-fuchsia' },
              { level: 'L8', name: '分片结算公链', desc: '数据与隐私执行层 · zk 验证', icon: FaNetworkWired, color: 'from-accent-fuchsia to-primary-500' }
            ].map((layer, index) => {
              const Icon = layer.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="mb-4"
                >
                  <Link href={`/ecosystem/l${index + 1}-${layer.name.toLowerCase().replace(/\s+/g, '-')}`}>
                    <Card className="group hover-lift cursor-pointer relative overflow-hidden border-primary-500/20 hover:border-primary-500/50 transition-all">
                      <div className={`absolute inset-0 bg-gradient-to-r ${layer.color} opacity-0 group-hover:opacity-10 transition-opacity`}></div>
                      <CardHeader className="flex-row items-center space-y-0 gap-6 py-6 relative z-10">
                        <div className={`w-16 h-16 flex-shrink-0 rounded-2xl bg-gradient-to-br ${layer.color} flex items-center justify-center shadow-glow-md group-hover:shadow-glow-lg group-hover:scale-110 transition-all`}>
                          <Icon className="text-white text-2xl" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-3 mb-2">
                            <span className="text-xl font-black text-primary-400 font-display">{layer.level}</span>
                            <CardTitle className="text-2xl font-display group-hover:text-primary-300 transition-colors">{layer.name}</CardTitle>
                          </div>
                          <CardDescription className="text-base text-gray-400">{layer.desc}</CardDescription>
                        </div>
                        <FaArrowRight className="text-2xl text-primary-500 opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all" />
                      </CardHeader>
                    </Card>
                  </Link>
                </motion.div>
              )
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <Button size="xl" variant="outline" className="font-display font-bold text-lg px-10 py-7 rounded-2xl border-2 hover-lift" asChild>
              <Link href="/ecosystem">
                探索完整架构图
                <FaArrowRight className="ml-3" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* CTA Section - 强力号召 */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-primary-900/20 via-secondary-900/20 to-accent-cyan/10"></div>
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
            }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-primary-500/20 to-secondary-500/20 rounded-full blur-[150px]"
          ></motion.div>
        </div>

        <div className="relative z-10 container-responsive text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto"
          >
            <Card className="p-10 md:p-16 lg:p-20 border-primary-500/30 shadow-glow-xl relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-secondary-500/5"></div>
              <div className="relative z-10">
                <motion.div
                  animate={{ y: [-5, 5, -5] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <FaRocket className="text-6xl md:text-7xl text-primary-400 mx-auto mb-8" />
                </motion.div>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 font-display">
                  <span className="gradient-text-glow">加入 ONE 生态系统</span>
                </h2>
                <p className="text-xl md:text-2xl lg:text-3xl text-gray-300 mb-10 leading-relaxed">
                  与全球开发者、创业者、投资者一起<br />
                  共建智能体经济的未来
                </p>
                <div className="flex flex-col sm:flex-row gap-6 justify-center items-stretch sm:items-center">
                  <Button size="xl" className="font-display font-bold text-lg px-12 py-7 rounded-2xl shadow-glow-lg hover:shadow-glow-xl hover-lift" asChild>
                    <Link href="/whitepaper">
                      阅读完整白皮书
                      <FaArrowRight className="ml-3" />
                    </Link>
                  </Button>
                  <Button size="xl" variant="outline" className="font-display font-bold text-lg px-12 py-7 rounded-2xl border-2 hover-lift" asChild>
                    <Link href="/tokenomics">
                      了解代币经济
                    </Link>
                  </Button>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
