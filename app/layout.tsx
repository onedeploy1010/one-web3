import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'ONE Web3 - 人类与智能共生的经济文明',
  description: 'AIDA · x402 · RWA · DAO 驱动的全球智能体生态体系',
  keywords: 'ONE, Web3, AIDA, AI, 区块链, RWA, DAO, 智能体',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-CN">
      <body className="antialiased">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
