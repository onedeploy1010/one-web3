'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { FaLayerGroup, FaRobot, FaTasks, FaIndustry, FaCoins, FaWallet, FaChartLine, FaNetworkWired, FaCubes, FaChevronDown } from 'react-icons/fa'
import { Breadcrumb } from '@/components/ui/breadcrumb'
import { Badge } from '@/components/ui/badge'

export default function EcosystemPage() {
  const [selectedLayer, setSelectedLayer] = useState<number | null>(null)

  const ecosystemLayers = [
    {
      level: 'L1',
      name: 'IDEA HUB',
      subtitle: '创意与研究层',
      description: '人类与 AI 共同生成商业构想',
      icon: FaLayerGroup,
      color: 'from-primary-500 to-primary-600',
      glowColor: 'shadow-glow-sm hover:shadow-glow-md',
      details: {
        purpose: '创意孵化平台，结合人类创造力和AI分析能力',
        features: [
          'AI辅助创意生成：利用大语言模型帮助用户构思商业想法',
          '市场可行性分析：AI自动评估创意的市场潜力',
          '创意确权系统：通过CRT代币记录创意贡献',
          '协作创新工坊：支持多人跨地域协作创新'
        ],
        tech: ['GPT-4', 'DALL-E', '区块链确权', 'DAO治理'],
        output: '生成商业构想白皮书，获得CRT创意确权代币'
      }
    },
    {
      level: 'L2',
      name: 'ANFT 智能体',
      subtitle: '智能人格层',
      description: '可进化的数字智能体',
      icon: FaRobot,
      color: 'from-accent-cyan to-accent-teal',
      glowColor: 'shadow-glow-sm hover:shadow-glow-md',
      details: {
        purpose: '创建可进化、有记忆的AI人格智能体',
        features: [
          'NFT智能体：每个ANFT是独特的AI人格',
          '记忆与学习：智能体可保留交互历史并持续进化',
          '技能树系统：通过AIDA代币解锁新能力',
          '人格市场：可交易、租赁ANFT智能体'
        ],
        tech: ['ERC-721', 'Vector Database', 'Fine-tuning', 'IPFS'],
        output: '生成专属AI助手，可参与L3层任务执行'
      }
    },
    {
      level: 'L3',
      name: '任务激励层',
      subtitle: '协作与劳动力层',
      description: 'PFW 结算机制',
      icon: FaTasks,
      color: 'from-accent-teal to-accent-emerald',
      glowColor: 'shadow-glow-sm hover:shadow-glow-md',
      details: {
        purpose: '零工经济平台，连接任务发布者与执行者',
        features: [
          'PFW代币结算：完成任务获得PFW劳动凭证',
          '人机协作：人类与ANFT共同完成任务',
          '技能匹配算法：自动匹配最合适的执行者',
          '信誉评分系统：建立去中心化信用体系'
        ],
        tech: ['智能合约', 'Oracle预言机', 'ZK证明', 'DAO仲裁'],
        output: '任务完成凭证，PFW代币分配'
      }
    },
    {
      level: 'L4',
      name: 'One Deploy Factory',
      subtitle: '部署与执行层',
      description: '无代码 DApp 工厂',
      icon: FaIndustry,
      color: 'from-accent-emerald to-secondary-400',
      glowColor: 'shadow-glow-sm hover:shadow-glow-md',
      details: {
        purpose: '快速部署去中心化应用，无需编程知识',
        features: [
          '模板库：预置常见DApp模板（DEX、NFT市场等）',
          '拖拽式编辑器：可视化构建智能合约逻辑',
          '一键部署：自动生成并部署到多链',
          'AI代码审计：部署前自动检测安全漏洞'
        ],
        tech: ['低代码平台', 'Multi-chain SDK', 'Hardhat', 'Slither'],
        output: '生成可运行的DApp，自动接入x402结算'
      }
    },
    {
      level: 'L5',
      name: 'x402 结算中心',
      subtitle: '支付与收益分配层',
      description: 'Multi-Call 执行',
      icon: FaCoins,
      color: 'from-secondary-400 to-secondary-500',
      glowColor: 'shadow-glow-sm hover:shadow-glow-md',
      details: {
        purpose: '统一的支付结算和收益分配中枢',
        features: [
          'Multi-Call批量执行：一次交易完成多笔结算',
          '跨链支付：支持多链资产统一结算',
          '智能分账：按贡献自动分配收益',
          '实时清算：T+0即时到账'
        ],
        tech: ['Layer2', 'Rollup', 'Cross-chain Bridge', '状态通道'],
        output: '完成支付结算，生成分账凭证'
      }
    },
    {
      level: 'L6',
      name: 'ONE Wallet',
      subtitle: '身份与账户层',
      description: '统一钱包体系',
      icon: FaWallet,
      color: 'from-secondary-500 to-accent-violet',
      glowColor: 'shadow-glow-sm hover:shadow-glow-md',
      details: {
        purpose: '一站式数字身份和资产管理',
        features: [
          'DID身份系统：去中心化身份认证',
          '多链资产管理：统一管理所有链上资产',
          '社交恢复：通过社交关系恢复钱包',
          'Gas费抽象：使用任意代币支付Gas'
        ],
        tech: ['EIP-4337', 'DID', 'Multi-sig', 'Account Abstraction'],
        output: '统一数字身份，跨链资产账户'
      }
    },
    {
      level: 'L7',
      name: 'RWA 投资生态',
      subtitle: '现实经营映射层',
      description: '代币化经营',
      icon: FaChartLine,
      color: 'from-accent-violet to-accent-fuchsia',
      glowColor: 'shadow-glow-sm hover:shadow-glow-md',
      details: {
        purpose: '将现实世界资产映射为链上代币',
        features: [
          'RWT代币化：经营成本转化为投资标的',
          '裂变系统：投资回报自动再投资',
          '分红机制：定期向RWT持有者分红',
          '资产证券化：房产、艺术品等实物上链'
        ],
        tech: ['RWA协议', '预言机', '合规框架', 'KYC/AML'],
        output: '发行RWT代币，连接实体经济'
      }
    },
    {
      level: 'L8',
      name: '分片结算公链',
      subtitle: '数据与隐私执行层',
      description: 'zk 验证',
      icon: FaNetworkWired,
      color: 'from-accent-fuchsia to-primary-500',
      glowColor: 'shadow-glow-sm hover:shadow-glow-md',
      details: {
        purpose: '高性能、隐私保护的底层公链',
        features: [
          '分片技术：并行处理，提升TPS',
          'ZK-SNARK：零知识证明保护隐私',
          '跨片通信：分片间高效数据传递',
          'EVM兼容：支持以太坊生态迁移'
        ],
        tech: ['Sharding', 'ZK-Rollup', 'Consensus算法', 'P2P网络'],
        output: '提供高性能、低成本、隐私的链上执行环境'
      }
    }
  ]

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

      {/* Architecture Visualization */}
      <section className="relative z-10 container-responsive mb-12 md:mb-16 lg:mb-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-5xl mx-auto"
        >
          {ecosystemLayers.map((layer, index) => {
            const Icon = layer.icon
            const isSelected = selectedLayer === index

            return (
              <motion.div
                key={layer.level}
                variants={itemVariants}
                onClick={() => setSelectedLayer(isSelected ? null : index)}
                className={`mb-3 md:mb-4 cursor-pointer transition-all duration-300 ${
                  isSelected ? 'scale-[1.02]' : 'hover:scale-[1.01]'
                }`}
              >
                <div className={`glass-strong p-4 md:p-6 rounded-2xl transition-all duration-300 ${
                  isSelected
                    ? 'border-2 border-primary-500 shadow-glow-lg'
                    : 'border border-transparent hover:border-primary-500/50 hover:shadow-glow-md'
                }`}>
                  <div className="flex items-center gap-3 md:gap-4 mb-4">
                    <div className={`w-14 h-14 md:w-16 md:h-16 rounded-xl bg-gradient-to-br ${layer.color} flex items-center justify-center flex-shrink-0 ${layer.glowColor} transition-all`}>
                      <Icon className="text-white text-xl md:text-2xl" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 md:gap-3 mb-1 md:mb-2">
                        <span className="text-xl md:text-2xl font-black gradient-text-primary font-display">{layer.level}</span>
                        <h3 className="text-lg md:text-xl font-bold text-white font-display truncate">{layer.name}</h3>
                      </div>
                      <p className="text-primary-400 font-semibold mb-1 text-xs md:text-sm">{layer.subtitle}</p>
                      <p className="text-gray-400/90 text-sm md:text-base">{layer.description}</p>
                    </div>
                    <motion.div
                      animate={{ rotate: isSelected ? 180 : 0 }}
                      className="text-primary-500 text-lg md:text-2xl flex-shrink-0"
                    >
                      <FaChevronDown />
                    </motion.div>
                  </div>

                  {/* Expanded Details */}
                  {isSelected && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="border-t border-primary-500/30 pt-4 md:pt-6 mt-4"
                    >
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                        <div>
                          <h4 className="text-base md:text-lg font-bold text-white mb-3 font-display flex items-center gap-2">
                            <span className="text-primary-400">▸</span> 核心功能
                          </h4>
                          <ul className="space-y-2">
                            {layer.details.features.map((feature, idx) => (
                              <li key={idx} className="text-gray-300/90 text-xs md:text-sm flex items-start leading-relaxed">
                                <span className="text-accent-teal mr-2 mt-1">●</span>
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="text-base md:text-lg font-bold text-white mb-3 font-display flex items-center gap-2">
                            <span className="text-secondary-400">▸</span> 技术栈
                          </h4>
                          <div className="flex flex-wrap gap-2 mb-4 md:mb-5">
                            {layer.details.tech.map((tech, idx) => (
                              <span key={idx} className="glass px-3 py-1.5 rounded-full text-xs text-gray-300 border border-primary-500/20 hover:border-primary-500/50 transition-colors">
                                {tech}
                              </span>
                            ))}
                          </div>
                          <h4 className="text-base md:text-lg font-bold text-white mb-2 font-display flex items-center gap-2">
                            <span className="text-accent-cyan">▸</span> 输出
                          </h4>
                          <p className="text-gray-300/90 text-xs md:text-sm leading-relaxed">{layer.details.output}</p>
                        </div>
                      </div>
                      <div className="mt-4 md:mt-6 p-4 md:p-5 glass-gradient rounded-xl border border-primary-500/20">
                        <h4 className="text-white font-bold mb-2 text-sm md:text-base font-display flex items-center gap-2">
                          <span className="text-accent-violet">●</span> 目标定位
                        </h4>
                        <p className="text-gray-300/90 text-xs md:text-sm leading-relaxed">{layer.details.purpose}</p>
                      </div>
                    </motion.div>
                  )}
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </section>

      {/* Data Flow Diagram */}
      <section className="relative z-10 container-responsive mb-12 md:mb-16 lg:mb-20">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-center mb-8 md:mb-12 font-display">
          <span className="gradient-text-glow">数据流向</span>
        </h2>
        <div className="max-w-4xl mx-auto glass-strong p-6 md:p-8 lg:p-10 rounded-2xl border border-primary-500/20">
          <div className="space-y-4 md:space-y-6">
            {[
              { from: 'L1 IDEA HUB', to: 'L2 ANFT', desc: '创意转化为AI执行方案' },
              { from: 'L2 ANFT', to: 'L3 任务层', desc: 'AI智能体接取并执行任务' },
              { from: 'L3 任务层', to: 'L5 x402', desc: '任务完成触发PFW结算' },
              { from: 'L4 Deploy Factory', to: 'L5 x402', desc: 'DApp收益自动接入结算' },
              { from: 'L5 x402', to: 'L6 Wallet', desc: '收益分配至用户钱包' },
              { from: 'L6 Wallet', to: 'L7 RWA', desc: '投资RWT参与实体经济' },
              { from: 'L8 公链', to: '所有层', desc: '提供底层计算和存储' }
            ].map((flow, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex flex-col md:flex-row items-stretch md:items-center gap-3 md:gap-4"
              >
                <div className="flex-1 glass px-3 md:px-4 py-2 md:py-3 rounded-lg text-center border border-primary-500/20 hover:border-primary-500/50 transition-colors">
                  <span className="text-white font-semibold text-sm md:text-base">{flow.from}</span>
                </div>
                <div className="text-primary-500 text-xl md:text-2xl text-center md:text-left">→</div>
                <div className="flex-1 glass px-3 md:px-4 py-2 md:py-3 rounded-lg text-center border border-secondary-500/20 hover:border-secondary-500/50 transition-colors">
                  <span className="text-white font-semibold text-sm md:text-base">{flow.to}</span>
                </div>
                <div className="flex-1 text-gray-400/90 text-xs md:text-sm text-center md:text-left">{flow.desc}</div>
              </motion.div>
            ))}
          </div>
        </div>
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
          <a
            href="/whitepaper"
            className="inline-block bg-gradient-to-r from-primary-500 to-secondary-500 px-6 md:px-8 py-3 md:py-4 rounded-full text-base md:text-lg font-semibold hover-lift hover-glow transition-all font-display"
          >
            阅读白皮书
          </a>
        </motion.div>
      </section>
    </main>
  )
}
