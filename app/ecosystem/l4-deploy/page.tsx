'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { FaIndustry, FaArrowLeft } from 'react-icons/fa'
import { Breadcrumb } from '@/components/ui/breadcrumb'
import { Badge } from '@/components/ui/badge'

export default function DeployPage() {
  return (
    <main className="min-h-screen pt-24 md:pt-28 lg:pt-32 pb-16 md:pb-20 bg-black">
      <div className="fixed inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-accent-emerald/30 to-secondary-400/30 rounded-full mix-blend-screen filter blur-[120px] animate-float-slow"></div>
      </div>

      <div className="relative z-10 container-responsive mb-6 md:mb-8">
        <Breadcrumb items={[{ label: '生态架构', href: '/ecosystem' }, { label: 'L4 Deploy Factory', icon: <FaIndustry /> }]} />
      </div>

      <section className="relative z-10 container-responsive">
        <Link href="/ecosystem" className="inline-flex items-center gap-2 text-primary-400 hover:text-primary-300 transition-colors mb-6 group">
          <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" />
          <span>返回生态架构</span>
        </Link>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-4xl">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-gradient-to-br from-accent-emerald to-secondary-400 flex items-center justify-center shadow-glow-lg">
              <FaIndustry className="text-white text-3xl md:text-4xl" />
            </div>
            <div>
              <Badge className="mb-2">L4 - 部署与执行层</Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black font-display">
                <span className="gradient-text-glow">Deploy Factory</span>
              </h1>
            </div>
          </div>
          <p className="text-xl md:text-2xl text-gray-300/90 leading-relaxed mb-8">
            无代码 DApp 工厂，快速部署去中心化应用，无需编程知识
          </p>
          <div className="flex flex-wrap gap-3">
            <Badge variant="outline" className="px-4 py-2">低代码平台</Badge>
            <Badge variant="outline" className="px-4 py-2">Multi-chain SDK</Badge>
            <Badge variant="outline" className="px-4 py-2">Hardhat</Badge>
            <Badge variant="outline" className="px-4 py-2">Slither</Badge>
          </div>
        </motion.div>
      </section>
    </main>
  )
}
