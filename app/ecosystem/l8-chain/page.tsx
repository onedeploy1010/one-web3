'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { FaNetworkWired, FaArrowLeft } from 'react-icons/fa'
import { Breadcrumb } from '@/components/ui/breadcrumb'
import { Badge } from '@/components/ui/badge'

export default function ChainPage() {
  return (
    <main className="min-h-screen pt-24 md:pt-28 lg:pt-32 pb-16 md:pb-20 bg-black">
      <div className="fixed inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-accent-fuchsia/30 to-primary-500/30 rounded-full mix-blend-screen filter blur-[120px] animate-float-slow"></div>
      </div>

      <div className="relative z-10 container-responsive mb-6 md:mb-8">
        <Breadcrumb items={[{ label: '生态架构', href: '/ecosystem' }, { label: 'L8 公链', icon: <FaNetworkWired /> }]} />
      </div>

      <section className="relative z-10 container-responsive">
        <Link href="/ecosystem" className="inline-flex items-center gap-2 text-primary-400 hover:text-primary-300 transition-colors mb-6 group">
          <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" />
          <span>返回生态架构</span>
        </Link>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-4xl">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-gradient-to-br from-accent-fuchsia to-primary-500 flex items-center justify-center shadow-glow-lg">
              <FaNetworkWired className="text-white text-3xl md:text-4xl" />
            </div>
            <div>
              <Badge className="mb-2">L8 - 数据与隐私执行层</Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black font-display">
                <span className="gradient-text-glow">分片结算公链</span>
              </h1>
            </div>
          </div>
          <p className="text-xl md:text-2xl text-gray-300/90 leading-relaxed mb-8">
            zk 验证，高性能、隐私保护的底层公链
          </p>
          <div className="flex flex-wrap gap-3">
            <Badge variant="outline" className="px-4 py-2">Sharding</Badge>
            <Badge variant="outline" className="px-4 py-2">ZK-Rollup</Badge>
            <Badge variant="outline" className="px-4 py-2">Consensus算法</Badge>
            <Badge variant="outline" className="px-4 py-2">P2P网络</Badge>
          </div>
        </motion.div>
      </section>
    </main>
  )
}
