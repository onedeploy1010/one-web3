'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { FaRocket, FaRobot, FaCoins, FaNetworkWired, FaChartLine } from 'react-icons/fa'

export default function Home() {
  return (
    <main className="min-h-screen pt-20">
      {/* Hero Section with Enhanced Visuals */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Gradient Background */}
        <div className="absolute inset-0 animated-gradient-bg"></div>

        {/* Floating Orbs with Glow */}
        <div className="absolute inset-0 opacity-40">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              x: [0, 100, 0],
              y: [0, -50, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mix-blend-screen filter blur-3xl"
          ></motion.div>
          <motion.div
            animate={{
              scale: [1, 1.3, 1],
              x: [0, -80, 0],
              y: [0, 80, 0],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-1/3 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mix-blend-screen filter blur-3xl"
          ></motion.div>
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              x: [0, -50, 0],
              y: [0, 100, 0],
            }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-full mix-blend-screen filter blur-3xl"
          ></motion.div>
        </div>

        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-30"></div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            {/* Logo/Badge */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring" }}
              className="inline-block mb-8"
            >
              <div className="glass-strong px-6 py-3 rounded-full">
                <span className="text-sm font-semibold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  ✨ 下一代 Web3 智能体生态
                </span>
              </div>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-7xl md:text-9xl font-black mb-8 leading-tight"
            >
              <span className="gradient-text-glow">ONE</span>
            </motion.h1>

            {/* Subheading */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-3xl md:text-6xl font-bold mb-6 text-white leading-tight"
            >
              构建人类与智能<br />
              <span className="gradient-text">共生的经济文明</span>
            </motion.h2>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed"
            >
              通过 <span className="text-blue-400 font-semibold">AIDA</span> · <span className="text-purple-400 font-semibold">x402</span> · <span className="text-pink-400 font-semibold">RWA</span> · <span className="text-cyan-400 font-semibold">DAO</span> 驱动的全球智能体生态体系
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            >
              <Link
                href="/ecosystem"
                className="group relative px-10 py-5 rounded-full text-lg font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:scale-105 transition-all duration-300 neon-glow"
              >
                <span className="relative z-10">探索生态</span>
                <motion.div
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity"
                  animate={{
                    rotate: [0, 360],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                />
              </Link>
              <Link
                href="/whitepaper"
                className="glass-strong px-10 py-5 rounded-full text-lg font-bold hover:scale-105 transition-all duration-300 backdrop-blur-xl"
              >
                查看白皮书
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
            >
              {[
                { value: '8', label: '层架构' },
                { value: '6', label: '代币体系' },
                { value: '1B+', label: '市值目标' },
                { value: '10M+', label: '目标用户' },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                  className="glass-strong p-6 rounded-2xl"
                >
                  <div className="text-4xl font-black gradient-text mb-2">{stat.value}</div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{ delay: 1, duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <div className="flex flex-col items-center">
            <span className="text-gray-400 text-sm mb-2">向下滚动</span>
            <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </motion.div>
      </section>

      {/* Core Pillars Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black"></div>

        <div className="relative z-10 container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-7xl font-black mb-6">
              <span className="gradient-text-glow">四大支柱</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              通过 AI、区块链、RWA 和 DAO 技术，打造完整的智能体经济生态
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: FaRobot,
                title: 'AIDA',
                subtitle: 'AI 智能驱动',
                description: 'AI 平台币，驱动模型与质押生成子币，实现智能体经济',
                color: 'from-blue-500 to-cyan-500',
                delay: 0.1
              },
              {
                icon: FaCoins,
                title: 'x402',
                subtitle: '结算中心',
                description: '支付与分红中枢，多链分片验证与隐私执行',
                color: 'from-purple-500 to-pink-500',
                delay: 0.2
              },
              {
                icon: FaChartLine,
                title: 'RWA',
                subtitle: '现实资产',
                description: '现实经济映射，经营成本代币化与裂变系统',
                color: 'from-pink-500 to-orange-500',
                delay: 0.3
              },
              {
                icon: FaNetworkWired,
                title: 'DAO',
                subtitle: '智能治理',
                description: '人类与AI共治，HUB代币驱动的参数调节',
                color: 'from-cyan-500 to-teal-500',
                delay: 0.4
              }
            ].map((pillar, index) => {
              const Icon = pillar.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: pillar.delay }}
                  whileHover={{ y: -10 }}
                  className="group relative"
                >
                  <div className="gradient-border rounded-3xl p-8 h-full backdrop-blur-xl bg-black/50 hover:bg-black/30 transition-all duration-300">
                    {/* Icon */}
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                      className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${pillar.color} flex items-center justify-center mb-6 group-hover:shadow-2xl transition-shadow`}
                    >
                      <Icon className="text-white text-3xl" />
                    </motion.div>

                    {/* Title */}
                    <h3 className="text-4xl font-black mb-2">
                      <span className={`bg-gradient-to-r ${pillar.color} bg-clip-text text-transparent`}>
                        {pillar.title}
                      </span>
                    </h3>

                    {/* Subtitle */}
                    <p className="text-gray-400 font-semibold mb-4 text-lg">{pillar.subtitle}</p>

                    {/* Description */}
                    <p className="text-gray-500 leading-relaxed">{pillar.description}</p>

                    {/* Hover Glow Effect */}
                    <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${pillar.color} opacity-0 group-hover:opacity-10 transition-opacity blur-2xl -z-10`}></div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Ecosystem Preview */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-blue-950/20 to-black"></div>

        <div className="relative z-10 container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-7xl font-black mb-6">
              <span className="gradient-text-glow">8 层生态架构</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              从创意孵化到底层公链，构建完整的去中心化智能体经济体系
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto space-y-4">
            {[
              { level: 'L1', name: 'IDEA HUB', desc: '创意与研究层：人类与 AI 共同生成商业构想' },
              { level: 'L2', name: 'ANFT 智能体', desc: '智能人格层：可进化的数字智能体' },
              { level: 'L3', name: '任务激励层', desc: '协作与劳动力层：PFW 结算机制' },
              { level: 'L4', name: 'One Deploy Factory', desc: '部署与执行层：无代码 DApp 工厂' },
              { level: 'L5', name: 'x402 结算中心', desc: '支付与收益分配层：Multi-Call 执行' },
              { level: 'L6', name: 'ONE Wallet', desc: '身份与账户层：统一钱包体系' },
              { level: 'L7', name: 'RWA 投资生态', desc: '现实经营映射层：代币化经营' },
              { level: 'L8', name: '分片结算公链', desc: '数据与隐私执行层：zk 验证' }
            ].map((layer, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.02, x: 10 }}
                className="glass-strong p-6 rounded-2xl hover:neon-glow transition-all duration-300 cursor-pointer"
              >
                <div className="flex items-center gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center">
                      <span className="text-2xl font-black text-white">{layer.level}</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-2">{layer.name}</h3>
                    <p className="text-gray-400">{layer.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <Link
              href="/ecosystem"
              className="inline-block glass-strong px-10 py-5 rounded-full text-lg font-bold hover:scale-105 hover:neon-glow-purple transition-all duration-300"
            >
              探索完整架构 →
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-purple-900 to-pink-900 opacity-30"></div>

        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto glass-strong p-16 rounded-3xl neon-glow-purple"
          >
            <FaRocket className="text-6xl text-blue-400 mx-auto mb-8" />
            <h2 className="text-5xl md:text-6xl font-black mb-6">
              <span className="gradient-text-glow">加入 ONE 生态</span>
            </h2>
            <p className="text-2xl text-gray-300 mb-12 leading-relaxed">
              让智能与人类共享经济的未来<br />
              现在就开始您的 Web3 智能体之旅
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                href="/whitepaper"
                className="px-10 py-5 rounded-full text-lg font-bold bg-gradient-to-r from-blue-500 to-purple-500 hover:scale-105 hover:neon-glow transition-all duration-300"
              >
                阅读白皮书
              </Link>
              <Link
                href="/tokenomics"
                className="glass px-10 py-5 rounded-full text-lg font-bold hover:scale-105 transition-all duration-300"
              >
                了解代币经济
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
