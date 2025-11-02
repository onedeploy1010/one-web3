'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { FaRocket, FaRobot, FaCoins, FaNetworkWired, FaChartLine, FaArrowRight, FaCheckCircle, FaLightbulb, FaTasks, FaWallet, FaIndustry, FaLayerGroup, FaCubes, FaStar, FaBolt, FaGlobe, FaShieldAlt } from 'react-icons/fa'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

export default function Home() {
  return (
    <main className="min-h-screen bg-black relative">
      {/* 全局背景效果 */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-primary-900/10 via-transparent to-transparent"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-secondary-900/10 via-transparent to-transparent"></div>
      </div>

      {/* Hero Section - 极简现代 */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* 动态背景 */}
        <div className="absolute inset-0">
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.15, 0.25, 0.15],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-0 right-0 w-[1000px] h-[1000px] bg-gradient-to-br from-primary-500/30 via-accent-cyan/20 to-transparent rounded-full blur-[150px]"
          ></motion.div>
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.15, 0.3, 0.15],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
            className="absolute bottom-0 left-0 w-[1200px] h-[1200px] bg-gradient-to-tr from-secondary-500/30 via-accent-fuchsia/20 to-transparent rounded-full blur-[180px]"
          ></motion.div>
        </div>

        {/* 精致网格 */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(14,165,233,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(14,165,233,0.02)_1px,transparent_1px)] bg-[size:80px_80px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,black_40%,transparent_100%)]"></div>

        <div className="relative z-10 container-responsive text-center px-4 py-32">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="max-w-7xl mx-auto"
          >
            {/* 精致徽章 */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="flex justify-center mb-12"
            >
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full blur opacity-25 group-hover:opacity-40 transition"></div>
                <Badge className="relative text-sm px-8 py-3 font-display font-semibold bg-black/50 backdrop-blur-xl border-primary-500/30 shadow-xl">
                  <FaStar className="inline mr-2 text-primary-400 animate-pulse" />
                  下一代 Web3 智能体生态系统
                </Badge>
              </div>
            </motion.div>

            {/* 超大标题 - 更优雅 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="mb-12"
            >
              <h1 className="text-7xl sm:text-8xl md:text-9xl lg:text-[12rem] font-black leading-none tracking-tighter font-display mb-8">
                <span className="inline-block bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-white/40">
                  ONE
                </span>
                <br />
                <span className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-primary-400 via-accent-cyan to-secondary-400 animate-gradient-x">
                  Web3
                </span>
              </h1>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 1 }}
                className="max-w-5xl mx-auto"
              >
                <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white/80 font-bold leading-tight mb-6 font-display">
                  构建人类与智能<span className="text-primary-400">共生</span>的经济文明
                </p>
                <p className="text-lg sm:text-xl md:text-2xl text-gray-400 leading-relaxed max-w-3xl mx-auto">
                  通过 AI · 区块链 · RWA · DAO 驱动全球智能体生态
                </p>
              </motion.div>
            </motion.div>

            {/* CTA 按钮 - 更精致 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-6 justify-center items-stretch sm:items-center mb-24"
            >
              <Link href="/ecosystem" className="group relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-500"></div>
                <div className="relative px-12 py-5 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl font-bold text-lg text-white shadow-2xl hover:shadow-primary-500/50 transition-all duration-300 flex items-center justify-center font-display">
                  <FaRocket className="mr-3 text-xl" />
                  探索生态架构
                  <FaArrowRight className="ml-3 group-hover:translate-x-2 transition-transform" />
                </div>
              </Link>

              <Link href="/whitepaper" className="group relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-white/20 to-white/5 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-500"></div>
                <div className="relative px-12 py-5 bg-white/5 backdrop-blur-xl border-2 border-white/10 rounded-2xl font-bold text-lg text-white hover:border-white/30 transition-all duration-300 flex items-center justify-center font-display">
                  <FaCubes className="mr-3 text-xl" />
                  查看白皮书
                </div>
              </Link>
            </motion.div>

            {/* 数据统计 - 极简设计 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto"
            >
              {[
                { value: '8', label: '生态层级', icon: FaLayerGroup },
                { value: '6', label: '代币体系', icon: FaCoins },
                { value: '$1B+', label: '市值目标', icon: FaChartLine },
                { value: '10M+', label: '目标用户', icon: FaGlobe },
              ].map((stat, index) => {
                const Icon = stat.icon
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.4 + index * 0.1, duration: 0.5 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="group relative"
                  >
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl blur opacity-0 group-hover:opacity-20 transition duration-500"></div>
                    <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:border-primary-500/50 transition-all duration-300">
                      <Icon className="text-4xl text-primary-400 mb-4 mx-auto group-hover:scale-110 transition-transform" />
                      <div className="text-5xl font-black text-white mb-2 font-display">{stat.value}</div>
                      <div className="text-gray-400 text-sm font-medium">{stat.label}</div>
                    </div>
                  </motion.div>
                )
              })}
            </motion.div>
          </motion.div>
        </div>

        {/* 滚动提示 */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-2 text-gray-500"
          >
            <div className="text-xs font-medium">SCROLL</div>
            <div className="w-[2px] h-12 bg-gradient-to-b from-gray-500 to-transparent"></div>
          </motion.div>
        </motion.div>
      </section>

      {/* 核心特性 - 大气简约 */}
      <section className="relative py-40 overflow-hidden">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-24"
          >
            <Badge variant="outline" className="mb-8 text-base font-display px-8 py-3 bg-white/5 backdrop-blur-xl border-primary-500/30">
              <FaBolt className="inline mr-2 text-primary-400" />
              核心技术
            </Badge>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-black mb-8 font-display">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60">
                四大技术支柱
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              构建完整的智能体经济生态系统
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
            {[
              {
                icon: FaRobot,
                title: 'AIDA',
                subtitle: 'AI 智能驱动',
                description: 'AI 平台币，驱动模型训练与算力质押，生成智能体子币，实现完整的智能体经济循环',
                color: 'from-primary-500 to-accent-cyan',
                features: ['AI 模型训练', '算力质押挖矿', '智能体子币生成', 'GPT-4 集成'],
              },
              {
                icon: FaCoins,
                title: 'x402',
                subtitle: '智能结算',
                description: '去中心化支付与收益分配中枢，支持多链分片验证、隐私计算与实时结算',
                color: 'from-accent-cyan to-accent-emerald',
                features: ['跨链支付', '智能分账', '实时结算', 'ZK 隐私保护'],
              },
              {
                icon: FaChartLine,
                title: 'RWA',
                subtitle: '资产映射',
                description: '将现实世界经营成本代币化，通过裂变系统实现资产上链与收益分红',
                color: 'from-accent-emerald to-secondary-400',
                features: ['资产代币化', '链上确权', '收益分红', '合规框架'],
              },
              {
                icon: FaShieldAlt,
                title: 'DAO',
                subtitle: '去中心化治理',
                description: '人类与 AI 共同治理，通过 HUB 代币驱动生态参数调节与社区决策',
                color: 'from-secondary-500 to-accent-fuchsia',
                features: ['链上投票', '参数治理', '社区提案', '透明决策'],
              }
            ].map((pillar, index) => {
              const Icon = pillar.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15, duration: 0.8 }}
                  whileHover={{ scale: 1.02, y: -8 }}
                  className="group relative"
                >
                  <div className={`absolute -inset-1 bg-gradient-to-r ${pillar.color} rounded-3xl blur-xl opacity-0 group-hover:opacity-30 transition duration-500`}></div>
                  <div className="relative h-full bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-10 hover:border-primary-500/50 transition-all duration-500">
                    <div className="flex items-start justify-between mb-8">
                      <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${pillar.color} flex items-center justify-center shadow-2xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                        <Icon className="text-white text-3xl" />
                      </div>
                      <Badge variant="outline" className="border-primary-500/30 bg-primary-500/10 backdrop-blur-xl text-xs font-semibold">核心</Badge>
                    </div>
                    <h3 className="text-4xl font-black mb-3 font-display text-white group-hover:text-primary-300 transition-colors">{pillar.title}</h3>
                    <p className="text-primary-400 font-semibold mb-6 text-lg">{pillar.subtitle}</p>
                    <p className="text-gray-300 mb-8 leading-relaxed text-base">{pillar.description}</p>
                    <div className="grid grid-cols-2 gap-4">
                      {pillar.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center text-sm text-gray-400">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary-400 mr-3"></div>
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* 8层生态 - 流畅展示 */}
      <section className="relative py-40 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary-950/5 to-transparent"></div>

        <div className="relative container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-24"
          >
            <Badge variant="outline" className="mb-8 text-base font-display px-8 py-3 bg-white/5 backdrop-blur-xl border-primary-500/30">
              <FaCubes className="inline mr-2 text-primary-400" />
              生态架构
            </Badge>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-black mb-8 font-display">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60">
                8 层完整生态
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              从创意孵化到底层公链的完整技术栈
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto space-y-5">
            {[
              { level: 'L1', name: 'IDEA HUB', desc: '创意与研究层', icon: FaLightbulb, color: 'from-primary-500 to-primary-600', href: '/ecosystem/l1-idea-hub' },
              { level: 'L2', name: 'ANFT 智能体', desc: '智能人格层', icon: FaRobot, color: 'from-accent-cyan to-accent-teal', href: '/ecosystem/l2-anft' },
              { level: 'L3', name: '任务激励层', desc: '协作与劳动力', icon: FaTasks, color: 'from-accent-teal to-accent-emerald', href: '/ecosystem/l3-task' },
              { level: 'L4', name: 'Deploy Factory', desc: '部署与执行', icon: FaIndustry, color: 'from-accent-emerald to-secondary-400', href: '/ecosystem/l4-deploy' },
              { level: 'L5', name: 'x402 结算中心', desc: '支付与分配', icon: FaCoins, color: 'from-secondary-400 to-secondary-500', href: '/ecosystem/l5-x402' },
              { level: 'L6', name: 'ONE Wallet', desc: '身份与账户', icon: FaWallet, color: 'from-secondary-500 to-accent-violet', href: '/ecosystem/l6-wallet' },
              { level: 'L7', name: 'RWA 投资生态', desc: '资产映射', icon: FaChartLine, color: 'from-accent-violet to-accent-fuchsia', href: '/ecosystem/l7-rwa' },
              { level: 'L8', name: '分片结算公链', desc: '隐私执行', icon: FaNetworkWired, color: 'from-accent-fuchsia to-primary-500', href: '/ecosystem/l8-chain' }
            ].map((layer, index) => {
              const Icon = layer.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -60 : 60 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08, duration: 0.6 }}
                >
                  <Link href={layer.href} className="group block">
                    <div className="relative">
                      <div className={`absolute -inset-0.5 bg-gradient-to-r ${layer.color} rounded-2xl blur opacity-0 group-hover:opacity-30 transition duration-500`}></div>
                      <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:border-primary-500/50 transition-all duration-300 flex items-center gap-8">
                        <div className={`w-20 h-20 flex-shrink-0 rounded-2xl bg-gradient-to-br ${layer.color} flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300`}>
                          <Icon className="text-white text-2xl" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-4 mb-3">
                            <span className="text-2xl font-black text-primary-400 font-display">{layer.level}</span>
                            <h3 className="text-2xl font-bold text-white group-hover:text-primary-300 transition-colors font-display">{layer.name}</h3>
                          </div>
                          <p className="text-gray-400 text-lg">{layer.desc}</p>
                        </div>
                        <FaArrowRight className="text-3xl text-gray-600 group-hover:text-primary-400 group-hover:translate-x-2 transition-all flex-shrink-0" />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              )
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="text-center mt-20"
          >
            <Link href="/ecosystem" className="group relative inline-block">
              <div className="absolute -inset-1 bg-gradient-to-r from-white/20 to-white/5 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-500"></div>
              <div className="relative px-12 py-5 bg-white/5 backdrop-blur-xl border-2 border-white/10 rounded-2xl font-bold text-lg text-white hover:border-white/30 transition-all duration-300 flex items-center justify-center font-display">
                探索完整架构
                <FaArrowRight className="ml-3 group-hover:translate-x-2 transition-transform" />
              </div>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA - 强力号召 */}
      <section className="relative py-40 overflow-hidden">
        <div className="absolute inset-0">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.2, 0.1],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
            }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-gradient-to-r from-primary-500/20 to-secondary-500/20 rounded-full blur-[200px]"
          ></motion.div>
        </div>

        <div className="relative container-responsive text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-3xl blur-2xl opacity-20 group-hover:opacity-40 transition duration-1000"></div>
              <div className="relative bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl p-16 md:p-20">
                <motion.div
                  animate={{ y: [-8, 8, -8], rotate: [0, 5, 0, -5, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  className="mb-12"
                >
                  <FaRocket className="text-7xl text-primary-400 mx-auto" />
                </motion.div>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-8 font-display">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60">
                    加入 ONE 生态系统
                  </span>
                </h2>
                <p className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed max-w-2xl mx-auto">
                  与全球开发者、创业者、投资者一起<br />
                  共建智能体经济的未来
                </p>
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <Link href="/whitepaper" className="group relative">
                    <div className="absolute -inset-1 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-500"></div>
                    <div className="relative px-12 py-5 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl font-bold text-lg text-white shadow-2xl hover:shadow-primary-500/50 transition-all duration-300 flex items-center justify-center font-display">
                      阅读白皮书
                      <FaArrowRight className="ml-3 group-hover:translate-x-2 transition-transform" />
                    </div>
                  </Link>
                  <Link href="/tokenomics" className="group relative">
                    <div className="absolute -inset-1 bg-gradient-to-r from-white/20 to-white/5 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-500"></div>
                    <div className="relative px-12 py-5 bg-white/5 backdrop-blur-xl border-2 border-white/10 rounded-2xl font-bold text-lg text-white hover:border-white/30 transition-all duration-300 flex items-center justify-center font-display">
                      了解代币经济
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
