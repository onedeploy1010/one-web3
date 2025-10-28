'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { PieChart, Pie, Cell, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, Legend, LineChart, Line, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from 'recharts'
import { FaCoins, FaRobot, FaBriefcase, FaBuilding, FaFileContract, FaVoteYea } from 'react-icons/fa'

export default function TokenomicsPage() {
  const [selectedToken, setSelectedToken] = useState<string | null>(null)

  const tokens = [
    {
      symbol: 'ONE',
      name: 'ONE Token',
      type: '稳定层',
      icon: FaCoins,
      color: '#0ea5e9',
      description: '生态稳定币，所有结算与报价的能量计价单位',
      totalSupply: '1,000,000,000',
      details: {
        purpose: '作为生态内统一的价值标准和交换媒介',
        mechanism: '与法币锚定，通过超额抵押和算法稳定机制维持价值',
        useCase: [
          '支付Gas费用',
          '质押获取收益',
          '参与流动性挖矿',
          '购买生态服务'
        ],
        distribution: [
          { name: '社区激励', value: 40 },
          { name: '生态建设', value: 25 },
          { name: '团队储备', value: 15 },
          { name: '投资者', value: 10 },
          { name: '流动性池', value: 10 }
        ]
      }
    },
    {
      symbol: 'AIDA',
      name: 'AIDA Token',
      type: '智能层',
      icon: FaRobot,
      color: '#a855f7',
      description: 'AI 平台代币，驱动模型与算力执行',
      totalSupply: '500,000,000',
      details: {
        purpose: '支付AI算力消耗，激励模型开发和优化',
        mechanism: '质押AIDA可生成子币用于训练专属AI模型',
        useCase: [
          '购买AI算力时间',
          '质押生成ANFT智能体',
          'Fine-tuning模型',
          '访问高级AI功能'
        ],
        distribution: [
          { name: '挖矿奖励', value: 50 },
          { name: '研发基金', value: 20 },
          { name: '早期支持者', value: 15 },
          { name: '团队', value: 10 },
          { name: '市场推广', value: 5 }
        ]
      }
    },
    {
      symbol: 'PFW',
      name: 'ProofOfWork Token',
      type: '劳动层',
      icon: FaBriefcase,
      color: '#10b981',
      description: '零工经济结算，人类与AI协作凭证',
      totalSupply: 'Unlimited',
      details: {
        purpose: '证明工作完成，作为劳动价值凭证',
        mechanism: '完成任务自动发放，可兑换ONE或其他代币',
        useCase: [
          '接取并完成任务',
          '累积信誉积分',
          '兑换生态权益',
          '参与任务分红'
        ],
        distribution: [
          { name: '任务奖励', value: 70 },
          { name: '质押激励', value: 15 },
          { name: '推荐奖励', value: 10 },
          { name: '治理激励', value: 5 }
        ]
      }
    },
    {
      symbol: 'RWT',
      name: 'Real World Token',
      type: '经营层',
      icon: FaBuilding,
      color: '#f59e0b',
      description: '经营成本投资，代币化裂变系统',
      totalSupply: 'Dynamic',
      details: {
        purpose: '将实体经济成本代币化，投资者分享经营收益',
        mechanism: '锚定实体资产，收益按持币比例分配',
        useCase: [
          '投资实体项目',
          '获得分红收益',
          '资产流转交易',
          '参与项目决策'
        ],
        distribution: [
          { name: '资产锚定', value: 60 },
          { name: '投资者', value: 25 },
          { name: '运营储备', value: 10 },
          { name: '风险基金', value: 5 }
        ]
      }
    },
    {
      symbol: 'CRT',
      name: 'Creation Right Token',
      type: '确权层',
      icon: FaFileContract,
      color: '#ec4899',
      description: '贡献确权，记录创意与分配收益',
      totalSupply: 'Dynamic',
      details: {
        purpose: '记录创意贡献，确保创作者权益',
        mechanism: '通过区块链确权，自动追踪衍生收益',
        useCase: [
          '创意版权登记',
          '收益分配追踪',
          '授权许可管理',
          'IP价值评估'
        ],
        distribution: [
          { name: '创作者', value: 80 },
          { name: '平台手续费', value: 10 },
          { name: '孵化基金', value: 5 },
          { name: '治理金库', value: 5 }
        ]
      }
    },
    {
      symbol: 'HUB',
      name: 'Hub Governance Token',
      type: '治理层',
      icon: FaVoteYea,
      color: '#06b6d4',
      description: 'DAO 治理代币，参数调节与投票',
      totalSupply: '100,000,000',
      details: {
        purpose: '赋予持有者生态治理权，参与关键决策',
        mechanism: '一币一票或二次方投票，防止巨鲸控制',
        useCase: [
          '提案与投票',
          '参数调整权',
          '资金分配决策',
          '生态升级表决'
        ],
        distribution: [
          { name: 'DAO金库', value: 40 },
          { name: '长期激励', value: 30 },
          { name: '核心贡献者', value: 20 },
          { name: '初始分配', value: 10 }
        ]
      }
    }
  ]

  // Token flow data
  const tokenFlowData = [
    { source: 'ONE', target: 'AIDA', value: '兑换AI算力' },
    { source: 'AIDA', target: 'ANFT', value: '铸造智能体' },
    { source: 'ANFT', target: 'PFW', value: '执行任务获得' },
    { source: 'PFW', target: 'ONE', value: '兑换结算' },
    { source: 'ONE', target: 'RWT', value: '投资实体' },
    { source: 'RWT', target: 'ONE', value: '分红返还' },
    { source: 'IDEA', target: 'CRT', value: '创意确权' },
    { source: 'CRT', target: 'ONE', value: '收益分配' },
    { source: 'HUB', target: 'ALL', value: '治理整个生态' }
  ]

  // Token utility comparison
  const utilityData = [
    { category: '支付', ONE: 90, AIDA: 70, PFW: 60, RWT: 50, CRT: 30, HUB: 20 },
    { category: '质押', ONE: 80, AIDA: 90, PFW: 50, RWT: 70, CRT: 40, HUB: 95 },
    { category: '治理', ONE: 30, AIDA: 40, PFW: 20, RWT: 50, CRT: 60, HUB: 100 },
    { category: '流通', ONE: 100, AIDA: 85, PFW: 70, RWT: 60, CRT: 50, HUB: 75 }
  ]

  // Token value drivers
  const valueDrivers = [
    { token: 'ONE', drivers: ['稳定机制', '生态需求', '流动性', '应用场景', '锚定资产'] },
    { token: 'AIDA', drivers: ['算力需求', 'AI模型', '质押收益', '生态扩张', '技术创新'] },
    { token: 'PFW', drivers: ['任务数量', '用户活跃', '兑换需求', '信誉系统', '协作网络'] },
    { token: 'RWT', drivers: ['资产质量', '经营收益', '分红稳定', '资产流动性', '市场信心'] },
    { token: 'CRT', drivers: ['创意质量', 'IP价值', '衍生收益', '版权保护', '市场认可'] },
    { token: 'HUB', drivers: ['治理参与', '生态决策', '长期价值', '社区共识', '权益增值'] }
  ]

  const COLORS = ['#0ea5e9', '#a855f7', '#10b981', '#f59e0b', '#ec4899', '#06b6d4']

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
      {/* Hero Section */}
      <section className="container mx-auto px-4 mb-16">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="gradient-text">代币经济</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            6 层代币体系，构建从稳定、智能、劳动、经营、确权到治理的完整经济闭环
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <span className="glass px-4 py-2 rounded-full">多层架构</span>
            <span className="glass px-4 py-2 rounded-full">价值流通</span>
            <span className="glass px-4 py-2 rounded-full">去中心化治理</span>
            <span className="glass px-4 py-2 rounded-full">实体锚定</span>
          </div>
        </motion.div>
      </section>

      {/* Token Cards */}
      <section className="container mx-auto px-4 mb-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto"
        >
          {tokens.map((token, index) => {
            const Icon = token.icon
            const isSelected = selectedToken === token.symbol

            return (
              <motion.div
                key={token.symbol}
                variants={itemVariants}
                onClick={() => setSelectedToken(isSelected ? null : token.symbol)}
                className={`glass p-6 rounded-2xl cursor-pointer transition-all duration-300 hover:scale-105 ${
                  isSelected ? 'ring-2 ring-primary-500' : ''
                }`}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center"
                    style={{ backgroundColor: token.color }}
                  >
                    <Icon className="text-white text-xl" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{token.symbol}</h3>
                    <p className="text-sm" style={{ color: token.color }}>{token.type}</p>
                  </div>
                </div>
                <p className="text-gray-300 text-sm mb-4">{token.description}</p>
                <div className="flex justify-between items-center text-xs text-gray-400">
                  <span>总供应</span>
                  <span className="font-semibold">{token.totalSupply}</span>
                </div>

                {/* Expanded Details */}
                {isSelected && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    className="mt-6 pt-6 border-t border-gray-700"
                  >
                    <h4 className="text-white font-semibold mb-2">用途</h4>
                    <ul className="space-y-1 mb-4">
                      {token.details.useCase.map((use, idx) => (
                        <li key={idx} className="text-gray-300 text-xs flex items-start">
                          <span className="mr-2" style={{ color: token.color }}>●</span>
                          {use}
                        </li>
                      ))}
                    </ul>

                    <h4 className="text-white font-semibold mb-3">分配</h4>
                    <div className="h-48">
                      <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                          <Pie
                            data={token.details.distribution}
                            cx="50%"
                            cy="50%"
                            innerRadius={40}
                            outerRadius={70}
                            paddingAngle={5}
                            dataKey="value"
                          >
                            {token.details.distribution.map((entry, index) => (
                              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                          </Pie>
                          <Tooltip
                            contentStyle={{
                              backgroundColor: '#1f2937',
                              border: 'none',
                              borderRadius: '0.5rem',
                              color: '#fff'
                            }}
                          />
                        </PieChart>
                      </ResponsiveContainer>
                    </div>
                    <div className="grid grid-cols-2 gap-2 mt-2">
                      {token.details.distribution.map((item, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <div
                            className="w-3 h-3 rounded"
                            style={{ backgroundColor: COLORS[idx % COLORS.length] }}
                          />
                          <span className="text-xs text-gray-400">
                            {item.name} {item.value}%
                          </span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </motion.div>
            )
          })}
        </motion.div>
      </section>

      {/* Token Utility Comparison Chart */}
      <section className="container mx-auto px-4 mb-16">
        <h2 className="text-3xl font-bold text-center mb-12">
          <span className="gradient-text">代币效用对比</span>
        </h2>
        <div className="max-w-5xl mx-auto glass p-8 rounded-2xl">
          <div className="h-96">
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart data={utilityData}>
                <PolarGrid stroke="#374151" />
                <PolarAngleAxis dataKey="category" tick={{ fill: '#9ca3af' }} />
                <PolarRadiusAxis angle={90} domain={[0, 100]} tick={{ fill: '#9ca3af' }} />
                <Radar name="ONE" dataKey="ONE" stroke="#0ea5e9" fill="#0ea5e9" fillOpacity={0.3} />
                <Radar name="AIDA" dataKey="AIDA" stroke="#a855f7" fill="#a855f7" fillOpacity={0.3} />
                <Radar name="HUB" dataKey="HUB" stroke="#06b6d4" fill="#06b6d4" fillOpacity={0.3} />
                <Legend wrapperStyle={{ color: '#9ca3af' }} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#1f2937',
                    border: 'none',
                    borderRadius: '0.5rem',
                    color: '#fff'
                  }}
                />
              </RadarChart>
            </ResponsiveContainer>
          </div>
          <p className="text-center text-gray-400 text-sm mt-4">
            不同代币在支付、质押、治理、流通等方面的效用评分对比
          </p>
        </div>
      </section>

      {/* Token Flow */}
      <section className="container mx-auto px-4 mb-16">
        <h2 className="text-3xl font-bold text-center mb-12">
          <span className="gradient-text">代币流转</span>
        </h2>
        <div className="max-w-4xl mx-auto glass p-8 rounded-2xl">
          <div className="space-y-4">
            {tokenFlowData.map((flow, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-4"
              >
                <div className="flex-1 bg-gradient-to-r from-primary-500/20 to-transparent px-4 py-3 rounded-lg">
                  <span className="text-white font-bold">{flow.source}</span>
                </div>
                <div className="flex-shrink-0 text-primary-500 text-xl">→</div>
                <div className="flex-1 bg-gradient-to-l from-accent-purple/20 to-transparent px-4 py-3 rounded-lg">
                  <span className="text-white font-bold">{flow.target}</span>
                </div>
                <div className="flex-1 text-gray-400 text-sm">{flow.value}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Value Drivers */}
      <section className="container mx-auto px-4 mb-16">
        <h2 className="text-3xl font-bold text-center mb-12">
          <span className="gradient-text">价值驱动因素</span>
        </h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {valueDrivers.map((item, index) => {
            const token = tokens.find(t => t.symbol === item.token)
            return (
              <motion.div
                key={item.token}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="glass p-6 rounded-2xl"
              >
                <h3
                  className="text-xl font-bold mb-4"
                  style={{ color: token?.color }}
                >
                  {item.token}
                </h3>
                <ul className="space-y-2">
                  {item.drivers.map((driver, idx) => (
                    <li key={idx} className="flex items-center text-gray-300 text-sm">
                      <span className="mr-2" style={{ color: token?.color }}>●</span>
                      {driver}
                    </li>
                  ))}
                </ul>
              </motion.div>
            )
          })}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-2xl mx-auto glass p-12 rounded-3xl"
        >
          <h3 className="text-3xl font-bold mb-4 text-white">了解代币经济学详情</h3>
          <p className="text-gray-300 mb-8">
            查看白皮书获取完整的代币经济模型、通胀策略和价值捕获机制
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
