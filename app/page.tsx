'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { FaRocket, FaRobot, FaCoins, FaNetworkWired, FaChartLine, FaArrowRight, FaCheckCircle } from 'react-icons/fa'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 md:pt-20">
        {/* Animated Gradient Background */}
        <div className="absolute inset-0 animated-gradient-bg"></div>

        {/* Floating Orbs */}
        <div className="absolute inset-0 opacity-30 md:opacity-40">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              x: [0, 50, 0],
              y: [0, -30, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-1/4 left-1/4 w-48 h-48 md:w-96 md:h-96 bg-gradient-to-r from-primary-500 to-accent-teal rounded-full mix-blend-screen filter blur-3xl"
          ></motion.div>
          <motion.div
            animate={{
              scale: [1, 1.3, 1],
              x: [0, -40, 0],
              y: [0, 40, 0],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-1/3 right-1/4 w-48 h-48 md:w-96 md:h-96 bg-gradient-to-r from-accent-emerald to-accent-cyan rounded-full mix-blend-screen filter blur-3xl"
          ></motion.div>
        </div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-20 md:opacity-30"></div>

        {/* Content */}
        <div className="relative z-10 container-responsive text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="max-w-6xl mx-auto"
          >
            {/* Badge */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring" }}
              className="flex justify-center mb-6 md:mb-8"
            >
              <Badge className="text-sm md:text-base px-6 py-2">
                ✨ 下一代 Web3 智能体生态
              </Badge>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black mb-6 md:mb-8 leading-tight"
            >
              <span className="gradient-text-glow">ONE Web3</span>
            </motion.h1>

            {/* Subheading */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 md:mb-8 text-white leading-tight max-w-4xl mx-auto"
            >
              构建人类与智能<span className="gradient-text">共生</span>的经济文明
            </motion.h2>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-10 md:mb-12 max-w-3xl mx-auto leading-relaxed"
            >
              通过 <span className="text-primary-400 font-bold">AIDA</span> · <span className="text-accent-teal font-bold">x402</span> · <span className="text-accent-emerald font-bold">RWA</span> · <span className="text-accent-cyan font-bold">DAO</span> 驱动的全球智能体生态体系
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-stretch sm:items-center mb-16 md:mb-20"
            >
              <Button size="xl" className="group" asChild>
                <Link href="/ecosystem">
                  探索生态
                  <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button size="xl" variant="outline" asChild>
                <Link href="/whitepaper">
                  查看白皮书
                </Link>
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 max-w-4xl mx-auto"
            >
              {[
                { value: '8', label: '层架构', icon: FaNetworkWired },
                { value: '6', label: '代币体系', icon: FaCoins },
                { value: '$1B+', label: '市值目标', icon: FaChartLine },
                { value: '10M+', label: '目标用户', icon: FaRocket },
              ].map((stat, index) => {
                const Icon = stat.icon
                return (
                  <motion.div
                    key={index}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.8 + index * 0.1 }}
                  >
                    <Card className="text-center group">
                      <CardContent className="pt-6">
                        <Icon className="text-3xl md:text-4xl text-primary-400 mx-auto mb-3 group-hover:scale-110 transition-transform" />
                        <div className="text-3xl md:text-4xl font-black gradient-text mb-2">{stat.value}</div>
                        <div className="text-gray-400 text-sm">{stat.label}</div>
                      </CardContent>
                    </Card>
                  </motion.div>
                )
              })}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding relative overflow-hidden bg-black">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge variant="secondary" className="mb-6">核心特性</Badge>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6">
              <span className="gradient-text-glow">四大支柱</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
              通过 AI、区块链、RWA 和 DAO 技术，打造完整的智能体经济生态
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {[
              {
                icon: FaRobot,
                title: 'AIDA',
                subtitle: 'AI 智能驱动',
                description: 'AI 平台币，驱动模型与质押生成子币，实现智能体经济',
                color: 'from-primary-500 to-accent-teal',
                features: ['智能模型', '算力质押', '子币生成']
              },
              {
                icon: FaCoins,
                title: 'x402',
                subtitle: '结算中心',
                description: '支付与分红中枢，多链分片验证与隐私执行',
                color: 'from-accent-teal to-accent-emerald',
                features: ['跨链支付', '智能分账', '实时结算']
              },
              {
                icon: FaChartLine,
                title: 'RWA',
                subtitle: '现实资产',
                description: '现实经济映射，经营成本代币化与裂变系统',
                color: 'from-accent-emerald to-accent-cyan',
                features: ['资产上链', '代币化', '收益分红']
              },
              {
                icon: FaNetworkWired,
                title: 'DAO',
                subtitle: '智能治理',
                description: '人类与AI共治，HUB代币驱动的参数调节',
                color: 'from-accent-cyan to-primary-500',
                features: ['链上治理', '社区投票', '透明决策']
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
                  <Card className="h-full group hover:scale-105">
                    <CardHeader>
                      <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${pillar.color} flex items-center justify-center mb-4 group-hover:rotate-12 transition-transform`}>
                        <Icon className="text-white text-2xl" />
                      </div>
                      <CardTitle className="text-3xl mb-2">{pillar.title}</CardTitle>
                      <CardDescription className="text-base font-semibold text-accent-teal">
                        {pillar.subtitle}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-400 mb-4 leading-relaxed">
                        {pillar.description}
                      </p>
                      <div className="space-y-2">
                        {pillar.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center text-sm text-gray-300">
                            <FaCheckCircle className="text-primary-400 mr-2 flex-shrink-0" />
                            {feature}
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

      {/* Ecosystem Layers */}
      <section className="section-padding relative overflow-hidden bg-gradient-to-b from-black via-primary-950/10 to-black">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge variant="outline" className="mb-6">生态架构</Badge>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6">
              <span className="gradient-text-glow">8 层生态体系</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
              从创意孵化到底层公链，构建完整的去中心化智能体经济体系
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { level: 'L1', name: 'IDEA HUB', desc: '创意与研究层' },
              { level: 'L2', name: 'ANFT 智能体', desc: '智能人格层' },
              { level: 'L3', name: '任务激励层', desc: '协作与劳动力层' },
              { level: 'L4', name: 'Deploy Factory', desc: '部署与执行层' },
              { level: 'L5', name: 'x402 结算', desc: '支付与分配层' },
              { level: 'L6', name: 'ONE Wallet', desc: '身份与账户层' },
              { level: 'L7', name: 'RWA 生态', desc: '现实映射层' },
              { level: 'L8', name: '分片公链', desc: '隐私执行层' }
            ].map((layer, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <Card className="hover:scale-105 cursor-pointer">
                  <CardHeader className="flex-row items-center space-y-0 space-x-4">
                    <div className="w-14 h-14 flex-shrink-0 rounded-xl bg-gradient-to-br from-primary-500 to-accent-teal flex items-center justify-center">
                      <span className="text-xl font-black text-white">{layer.level}</span>
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl mb-1">{layer.name}</CardTitle>
                      <CardDescription>{layer.desc}</CardDescription>
                    </div>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Button size="lg" variant="outline" asChild>
              <Link href="/ecosystem">
                探索完整架构
                <FaArrowRight className="ml-2" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900/30 via-accent-teal/20 to-accent-emerald/30"></div>

        <div className="relative z-10 container-responsive text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <Card className="p-8 md:p-12 neon-glow-teal">
              <FaRocket className="text-5xl md:text-6xl text-primary-400 mx-auto mb-6" />
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6">
                <span className="gradient-text-glow">加入 ONE 生态</span>
              </h2>
              <p className="text-xl md:text-2xl text-gray-300 mb-10 leading-relaxed">
                让智能与人类共享经济的未来<br />
                现在就开始您的 Web3 智能体之旅
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="xl" asChild>
                  <Link href="/whitepaper">
                    阅读白皮书
                    <FaArrowRight className="ml-2" />
                  </Link>
                </Button>
                <Button size="xl" variant="outline" asChild>
                  <Link href="/tokenomics">
                    了解代币经济
                  </Link>
                </Button>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
