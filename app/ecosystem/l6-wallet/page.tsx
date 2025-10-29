'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { FaWallet, FaArrowLeft } from 'react-icons/fa'
import { Breadcrumb } from '@/components/ui/breadcrumb'
import { Badge } from '@/components/ui/badge'

export default function WalletPage() {
  return (
    <main className="min-h-screen pt-24 md:pt-28 lg:pt-32 pb-16 md:pb-20 bg-black">
      <div className="fixed inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-secondary-500/30 to-accent-violet/30 rounded-full mix-blend-screen filter blur-[120px] animate-float-slow"></div>
      </div>

      <div className="relative z-10 container-responsive mb-6 md:mb-8">
        <Breadcrumb items={[{ label: '生态架构', href: '/ecosystem' }, { label: 'L6 Wallet', icon: <FaWallet /> }]} />
      </div>

      <section className="relative z-10 container-responsive">
        <Link href="/ecosystem" className="inline-flex items-center gap-2 text-primary-400 hover:text-primary-300 transition-colors mb-6 group">
          <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" />
          <span>返回生态架构</span>
        </Link>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-4xl">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-gradient-to-br from-secondary-500 to-accent-violet flex items-center justify-center shadow-glow-lg">
              <FaWallet className="text-white text-3xl md:text-4xl" />
            </div>
            <div>
              <Badge className="mb-2">L6 - 身份与账户层</Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black font-display">
                <span className="gradient-text-glow">ONE Wallet</span>
              </h1>
            </div>
          </div>
          <p className="text-xl md:text-2xl text-gray-300/90 leading-relaxed mb-8">
            统一钱包体系，一站式数字身份和资产管理
          </p>
          <div className="flex flex-wrap gap-3">
            <Badge variant="outline" className="px-4 py-2">EIP-4337</Badge>
            <Badge variant="outline" className="px-4 py-2">DID</Badge>
            <Badge variant="outline" className="px-4 py-2">Multi-sig</Badge>
            <Badge variant="outline" className="px-4 py-2">Account Abstraction</Badge>
          </div>
        </motion.div>
      </section>
    </main>
  )
}
