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
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 md:pt-24 lg:pt-28">
        {/* Animated Gradient Mesh Background */}
        <div className="absolute inset-0 animated-gradient-mesh"></div>

        {/* Floating Orbs - 使用新配色 */}
        <div className="absolute inset-0 opacity-40 md:opacity-50">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              x: [0, 60, 0],
              y: [0, -40, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-1/4 left-1/4 w-64 h-64 md:w-96 md:h-96 lg:w-[32rem] lg:h-[32rem] bg-gradient-to-r from-primary-500 to-accent-cyan rounded-full mix-blend-screen filter blur-[100px]"
          ></motion.div>
          <motion.div
            animate={{
              scale: [1, 1.3, 1],
              x: [0, -50, 0],
              y: [0, 50, 0],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-1/3 right-1/4 w-64 h-64 md:w-96 md:h-96 lg:w-[32rem] lg:h-[32rem] bg-gradient-to-r from-secondary-500 to-accent-violet rounded-full mix-blend-screen filter blur-[100px]"
          ></motion.div>
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              x: [0, 30, 0],
              y: [0, -20, 0],
            }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute bottom-1/4 left-1/3 w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-gradient-to-r from-accent-teal to-accent-fuchsia rounded-full mix-blend-screen filter blur-[80px]"
          ></motion.div>
        </div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-20 md:opacity-30"></div>

        {/* Content */}
        <div className="relative z-10 container-responsive text-center px-4 sm:px-6">
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
              className="flex justify-center mb-6 md:mb-8 lg:mb-10"
            >
              <Badge className="text-sm md:text-base lg:text-lg px-6 md:px-8 py-2 md:py-3 font-display font-semibold shimmer">
                ✨ 下一代 Web3 智能体生态
              </Badge>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black mb-6 md:mb-8 lg:mb-10 leading-[0.9] tracking-tight font-display"
            >
              <span className="gradient-text-glow">ONE Web3</span>
            </motion.h1>

            {/* Subheading */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 md:mb-8 lg:mb-10 text-white leading-tight max-w-4xl mx-auto font-display px-4"
            >
              构建人类与智能<span className="gradient-text-primary">共生</span>的经济文明
            </motion.h2>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300/90 mb-10 md:mb-12 lg:mb-14 max-w-3xl mx-auto leading-relaxed px-4"
            >
              通过 <span className="text-primary-400 font-bold">AIDA</span> · <span className="text-accent-cyan font-bold">x402</span> · <span className="text-accent-teal font-bold">RWA</span> · <span className="text-secondary-400 font-bold">DAO</span> 驱动的全球智能体生态体系
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 md:gap-5 justify-center items-stretch sm:items-center mb-16 md:mb-20 lg:mb-24 px-4"
            >
              <Button size="xl" className="group hover-lift font-display font-semibold" asChild>
                <Link href="/ecosystem">
                  探索生态
                  <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button size="xl" variant="outline" className="font-display font-semibold hover-lift" asChild>
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
              className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 max-w-5xl mx-auto px-4"
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
                    <Card className="text-center group hover-lift">
                      <CardContent className="pt-5 pb-5 px-3 md:pt-6 md:pb-6 md:px-4">
                        <Icon className="text-2xl md:text-3xl lg:text-4xl text-primary-400 mx-auto mb-2 md:mb-3 group-hover:scale-110 group-hover:text-primary-300 transition-all" />
                        <div className="text-2xl sm:text-3xl md:text-4xl font-black gradient-text-primary mb-1 md:mb-2 font-display">{stat.value}</div>
                        <div className="text-gray-400 text-xs sm:text-sm md:text-base">{stat.label}</div>
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
            className="text-center mb-12 md:mb-16 lg:mb-20"
          >
            <Badge variant="secondary" className="mb-4 md:mb-6 text-sm md:text-base font-display">核心特性</Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black mb-4 md:mb-6 font-display">
              <span className="gradient-text-glow">四大支柱</span>
            </h2>
            <p className="text-base md:text-lg lg:text-xl text-gray-400/90 max-w-3xl mx-auto px-4 leading-relaxed">
              通过 AI、区块链、RWA 和 DAO 技术，打造完整的智能体经济生态
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6 lg:gap-8">
            {[
              {
                icon: FaRobot,
                title: 'AIDA',
                subtitle: 'AI 智能驱动',
                description: 'AI 平台币，驱动模型与质押生成子币，实现智能体经济',
                color: 'from-primary-500 via-primary-400 to-accent-cyan',
                features: ['智能模型', '算力质押', '子币生成']
              },
              {
                icon: FaCoins,
                title: 'x402',
                subtitle: '结算中心',
                description: '支付与分红中枢，多链分片验证与隐私执行',
                color: 'from-accent-cyan via-accent-teal to-accent-emerald',
                features: ['跨链支付', '智能分账', '实时结算']
              },
              {
                icon: FaChartLine,
                title: 'RWA',
                subtitle: '现实资产',
                description: '现实经济映射，经营成本代币化与裂变系统',
                color: 'from-accent-teal via-accent-emerald to-secondary-400',
                features: ['资产上链', '代币化', '收益分红']
              },
              {
                icon: FaNetworkWired,
                title: 'DAO',
                subtitle: '智能治理',
                description: '人类与AI共治，HUB代币驱动的参数调节',
                color: 'from-secondary-500 via-accent-violet to-accent-fuchsia',
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
                  <Card className="h-full group hover-lift hover-glow">
                    <CardHeader className="pb-4">
                      <div className={`w-14 h-14 md:w-16 md:h-16 rounded-xl bg-gradient-to-br ${pillar.color} flex items-center justify-center mb-3 md:mb-4 group-hover:rotate-12 transition-transform shadow-glow-md`}>
                        <Icon className="text-white text-2xl md:text-3xl" />
                      </div>
                      <CardTitle className="text-2xl md:text-3xl mb-2 font-display">{pillar.title}</CardTitle>
                      <CardDescription className="text-sm md:text-base font-semibold text-primary-400">
                        {pillar.subtitle}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-400/90 mb-4 md:mb-5 leading-relaxed text-sm md:text-base">
                        {pillar.description}
                      </p>
                      <div className="space-y-2">
                        {pillar.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center text-xs md:text-sm text-gray-300/90">
                            <FaCheckCircle className="text-accent-teal mr-2 flex-shrink-0 text-sm md:text-base" />
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
      <section className="section-padding relative overflow-hidden bg-gradient-to-b from-black via-primary-950/5 to-black">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-16 lg:mb-20"
          >
            <Badge variant="outline" className="mb-4 md:mb-6 text-sm md:text-base font-display">生态架构</Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black mb-4 md:mb-6 font-display">
              <span className="gradient-text-glow">8 层生态体系</span>
            </h2>
            <p className="text-base md:text-lg lg:text-xl text-gray-400/90 max-w-3xl mx-auto px-4 leading-relaxed">
              从创意孵化到底层公链，构建完整的去中心化智能体经济体系
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 lg:gap-5">
            {[
              { level: 'L1', name: 'IDEA HUB', desc: '创意与研究层', color: 'from-primary-500 to-primary-600' },
              { level: 'L2', name: 'ANFT 智能体', desc: '智能人格层', color: 'from-accent-cyan to-accent-teal' },
              { level: 'L3', name: '任务激励层', desc: '协作与劳动力层', color: 'from-accent-teal to-accent-emerald' },
              { level: 'L4', name: 'Deploy Factory', desc: '部署与执行层', color: 'from-accent-emerald to-secondary-400' },
              { level: 'L5', name: 'x402 结算', desc: '支付与分配层', color: 'from-secondary-400 to-secondary-500' },
              { level: 'L6', name: 'ONE Wallet', desc: '身份与账户层', color: 'from-secondary-500 to-accent-violet' },
              { level: 'L7', name: 'RWA 生态', desc: '现实映射层', color: 'from-accent-violet to-accent-fuchsia' },
              { level: 'L8', name: '分片公链', desc: '隐私执行层', color: 'from-accent-fuchsia to-primary-500' }
            ].map((layer, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <Card className="hover-lift cursor-pointer group">
                  <CardHeader className="flex-row items-center space-y-0 space-x-3 md:space-x-4 py-4 md:py-5">
                    <div className={`w-12 h-12 md:w-14 md:h-14 flex-shrink-0 rounded-xl bg-gradient-to-br ${layer.color} flex items-center justify-center shadow-glow-sm group-hover:shadow-glow-md transition-all`}>
                      <span className="text-lg md:text-xl font-black text-white font-display">{layer.level}</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <CardTitle className="text-base md:text-lg lg:text-xl mb-0.5 md:mb-1 font-display truncate">{layer.name}</CardTitle>
                      <CardDescription className="text-xs md:text-sm">{layer.desc}</CardDescription>
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
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900/20 via-secondary-900/15 to-accent-cyan/10"></div>

        <div className="relative z-10 container-responsive text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <Card className="p-6 md:p-10 lg:p-12 neon-glow-multi">
              <FaRocket className="text-4xl md:text-5xl lg:text-6xl text-primary-400 mx-auto mb-4 md:mb-6 animate-float" />
              <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black mb-4 md:mb-6 font-display">
                <span className="gradient-text-glow">加入 ONE 生态</span>
              </h2>
              <p className="text-lg md:text-xl lg:text-2xl text-gray-300/90 mb-8 md:mb-10 leading-relaxed px-4">
                让智能与人类共享经济的未来<br className="hidden sm:block" />
                现在就开始您的 Web3 智能体之旅
              </p>
              <div className="flex flex-col sm:flex-row gap-4 md:gap-5 justify-center px-4">
                <Button size="xl" className="hover-lift font-display font-semibold" asChild>
                  <Link href="/whitepaper">
                    阅读白皮书
                    <FaArrowRight className="ml-2" />
                  </Link>
                </Button>
                <Button size="xl" variant="outline" className="hover-lift font-display font-semibold" asChild>
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
