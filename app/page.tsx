export default function Home() {
  return (
    <main className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black">
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500 rounded-full mix-blend-multiply filter blur-3xl animate-float"></div>
            <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-accent-purple rounded-full mix-blend-multiply filter blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
            <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-accent-cyan rounded-full mix-blend-multiply filter blur-3xl animate-float" style={{animationDelay: '4s'}}></div>
          </div>
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="animate-fade-in">
            <h1 className="text-6xl md:text-8xl font-bold mb-6">
              <span className="gradient-text">ONE</span>
            </h1>
            <h2 className="text-3xl md:text-5xl font-bold mb-8 text-white">
              构建人类与智能共生的经济文明
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto">
              AIDA · x402 · RWA · DAO 驱动的全球智能体生态体系
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <a href="#ecosystem" className="glass px-8 py-4 rounded-full text-lg font-semibold hover:scale-105 transition-transform">
                探索生态
              </a>
              <a href="#whitepaper" className="bg-gradient-to-r from-primary-500 to-accent-purple px-8 py-4 rounded-full text-lg font-semibold hover:scale-105 transition-transform">
                查看白皮书
              </a>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Core Concepts */}
      <section id="concepts" className="py-24 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            <span className="gradient-text">核心概念</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: 'AIDA',
                subtitle: 'AI 智能驱动',
                description: 'AI 平台币，驱动模型与质押生成子币，实现智能体经济'
              },
              {
                title: 'x402',
                subtitle: '结算中心',
                description: '支付与分红中枢，多链分片验证与隐私执行'
              },
              {
                title: 'RWA',
                subtitle: '现实资产',
                description: '现实经济映射，经营成本代币化与裂变系统'
              },
              {
                title: 'DAO',
                subtitle: '智能治理',
                description: '人类与AI共治，HUB代币驱动的参数调节'
              }
            ].map((item, index) => (
              <div key={index} className="glass p-8 rounded-2xl hover:scale-105 transition-transform animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                <h3 className="text-3xl font-bold gradient-text mb-2">{item.title}</h3>
                <p className="text-primary-400 font-semibold mb-4">{item.subtitle}</p>
                <p className="text-gray-300">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ecosystem Architecture */}
      <section id="ecosystem" className="py-24 bg-black">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            <span className="gradient-text">生态架构</span>
          </h2>
          <div className="max-w-4xl mx-auto space-y-6">
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
              <div key={index} className="glass p-6 rounded-xl hover:border-primary-500 transition-all animate-fade-in" style={{animationDelay: `${index * 0.05}s`}}>
                <div className="flex items-start gap-4">
                  <span className="text-2xl font-bold gradient-text">{layer.level}</span>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">{layer.name}</h3>
                    <p className="text-gray-400">{layer.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tokenomics */}
      <section id="tokenomics" className="py-24 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            <span className="gradient-text">代币体系</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              { name: 'ONE', type: '稳定层', desc: '生态稳定币，所有结算与报价的能量计价单位' },
              { name: 'AIDA', type: '智能层', desc: 'AI 平台代币，驱动模型与算力执行' },
              { name: 'PFW', type: '劳动层', desc: '零工经济结算，人类与AI协作凭证' },
              { name: 'RWT', type: '经营层', desc: '经营成本投资，代币化裂变系统' },
              { name: 'CRT', type: '确权层', desc: '贡献确权，记录创意与分配收益' },
              { name: 'HUB', type: '治理层', desc: 'DAO 治理代币，参数调节与投票' }
            ].map((token, index) => (
              <div key={index} className="glass p-8 rounded-2xl hover:scale-105 transition-transform animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold gradient-text">{token.name}</h3>
                  <span className="text-sm text-primary-400 font-semibold">{token.type}</span>
                </div>
                <p className="text-gray-300">{token.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-primary-900 via-accent-purple to-accent-cyan">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white">
            加入 ONE 生态
          </h2>
          <p className="text-xl text-gray-100 mb-12 max-w-2xl mx-auto">
            让智能与人类共享经济的未来
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a href="#whitepaper" className="bg-white text-gray-900 px-8 py-4 rounded-full text-lg font-semibold hover:scale-105 transition-transform">
              阅读白皮书
            </a>
            <a href="#contact" className="glass border-2 border-white px-8 py-4 rounded-full text-lg font-semibold hover:scale-105 transition-transform text-white">
              联系我们
            </a>
          </div>
        </div>
      </section>

    </main>
  )
}
