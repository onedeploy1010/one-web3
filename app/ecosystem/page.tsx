'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { FaLayerGroup, FaRobot, FaTasks, FaIndustry, FaCoins, FaWallet, FaChartLine, FaNetworkWired, FaCubes } from 'react-icons/fa'
import { Breadcrumb } from '@/components/ui/breadcrumb'

export default function EcosystemPage() {
  const [selectedLayer, setSelectedLayer] = useState<number | null>(null)

  const ecosystemLayers = [
    {
      level: 'L1',
      name: 'IDEA HUB',
      subtitle: '创意与研究层',
      description: '人类与 AI 共同生成商业构想',
      icon: FaLayerGroup,
      color: 'from-blue-500 to-cyan-500',
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
      color: 'from-purple-500 to-pink-500',
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
      color: 'from-green-500 to-teal-500',
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
      color: 'from-orange-500 to-red-500',
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
      color: 'from-yellow-500 to-amber-500',
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
      color: 'from-indigo-500 to-purple-500',
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
      color: 'from-pink-500 to-rose-500',
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
      color: 'from-cyan-500 to-blue-500',
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
    <main className="min-h-screen pt-32 pb-20 bg-black">
      {/* Breadcrumb Navigation */}
      <div className="container mx-auto px-4 mb-8">
        <Breadcrumb
          items={[
            { label: '生态架构', icon: <FaCubes /> }
          ]}
        />
      </div>

      {/* Hero Section */}
      <section className="container mx-auto px-4 mb-16">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="gradient-text">生态架构</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            ONE Web3 采用 8 层架构设计，从创意孵化到底层公链，构建完整的智能体经济生态
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <span className="glass px-4 py-2 rounded-full">创意驱动</span>
            <span className="glass px-4 py-2 rounded-full">AI赋能</span>
            <span className="glass px-4 py-2 rounded-full">经济闭环</span>
            <span className="glass px-4 py-2 rounded-full">隐私保护</span>
          </div>
        </motion.div>
      </section>

      {/* Architecture Visualization */}
      <section className="container mx-auto px-4 mb-16">
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
                className={`mb-4 cursor-pointer transition-all duration-300 ${
                  isSelected ? 'scale-105' : ''
                }`}
              >
                <div className={`glass p-6 rounded-2xl hover:border-primary-500 ${
                  isSelected ? 'border-2 border-primary-500' : ''
                }`}>
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${layer.color} flex items-center justify-center flex-shrink-0`}>
                      <Icon className="text-white text-2xl" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-2xl font-bold gradient-text">{layer.level}</span>
                        <h3 className="text-xl font-bold text-white">{layer.name}</h3>
                      </div>
                      <p className="text-primary-400 font-semibold mb-1">{layer.subtitle}</p>
                      <p className="text-gray-400">{layer.description}</p>
                    </div>
                    <motion.div
                      animate={{ rotate: isSelected ? 180 : 0 }}
                      className="text-primary-500 text-2xl"
                    >
                      ▼
                    </motion.div>
                  </div>

                  {/* Expanded Details */}
                  {isSelected && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="border-t border-gray-700 pt-6 mt-4"
                    >
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="text-lg font-bold text-white mb-3">核心功能</h4>
                          <ul className="space-y-2">
                            {layer.details.features.map((feature, idx) => (
                              <li key={idx} className="text-gray-300 text-sm flex items-start">
                                <span className="text-primary-500 mr-2">●</span>
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="text-lg font-bold text-white mb-3">技术栈</h4>
                          <div className="flex flex-wrap gap-2 mb-4">
                            {layer.details.tech.map((tech, idx) => (
                              <span key={idx} className="bg-gray-800 px-3 py-1 rounded-full text-xs text-gray-300">
                                {tech}
                              </span>
                            ))}
                          </div>
                          <h4 className="text-lg font-bold text-white mb-2">输出</h4>
                          <p className="text-gray-300 text-sm">{layer.details.output}</p>
                        </div>
                      </div>
                      <div className="mt-6 p-4 bg-gray-800/50 rounded-xl">
                        <h4 className="text-white font-semibold mb-2">目标</h4>
                        <p className="text-gray-300 text-sm">{layer.details.purpose}</p>
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
      <section className="container mx-auto px-4 mb-16">
        <h2 className="text-3xl font-bold text-center mb-12">
          <span className="gradient-text">数据流向</span>
        </h2>
        <div className="max-w-4xl mx-auto glass p-8 rounded-2xl">
          <div className="space-y-6">
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
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-4"
              >
                <div className="flex-1 bg-gray-800 px-4 py-2 rounded-lg text-center">
                  <span className="text-white font-semibold">{flow.from}</span>
                </div>
                <div className="text-primary-500 text-2xl">→</div>
                <div className="flex-1 bg-gray-800 px-4 py-2 rounded-lg text-center">
                  <span className="text-white font-semibold">{flow.to}</span>
                </div>
                <div className="flex-1 text-gray-400 text-sm">{flow.desc}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-2xl mx-auto glass p-12 rounded-3xl"
        >
          <h3 className="text-3xl font-bold mb-4 text-white">探索完整技术文档</h3>
          <p className="text-gray-300 mb-8">
            深入了解每一层的技术实现细节和架构设计思路
          </p>
          <a
            href="/whitepaper"
            className="inline-block bg-gradient-to-r from-primary-500 to-accent-purple px-8 py-4 rounded-full text-lg font-semibold hover:scale-105 transition-transform"
          >
            阅读白皮书
          </a>
        </motion.div>
      </section>
    </main>
  )
}
