'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { FaGithub, FaTwitter, FaTelegram, FaDiscord } from 'react-icons/fa'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = [
    {
      title: '产品',
      links: [
        { name: '生态架构', href: '/ecosystem' },
        { name: '代币经济', href: '/tokenomics' },
        { name: 'AIDA 平台', href: '#' },
        { name: 'x402 结算', href: '#' },
      ],
    },
    {
      title: '资源',
      links: [
        { name: '白皮书', href: '/whitepaper' },
        { name: '技术文档', href: '#' },
        { name: '路线图', href: '#' },
        { name: 'API 文档', href: '#' },
      ],
    },
    {
      title: '社区',
      links: [
        { name: 'GitHub', href: '#' },
        { name: 'Discord', href: '#' },
        { name: 'Telegram', href: '#' },
        { name: '博客', href: '#' },
      ],
    },
  ]

  const socialLinks = [
    { icon: FaGithub, href: '#', label: 'GitHub' },
    { icon: FaTwitter, href: '#', label: 'Twitter' },
    { icon: FaTelegram, href: '#', label: 'Telegram' },
    { icon: FaDiscord, href: '#', label: 'Discord' },
  ]

  return (
    <footer className="relative bg-black border-t border-primary-500/20 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-gradient-to-r from-primary-500/30 to-secondary-500/30 rounded-full mix-blend-screen filter blur-[120px]"></div>
      </div>

      <div className="relative z-10 container-responsive py-12 md:py-16 lg:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 md:gap-10 lg:gap-12 mb-10 md:mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-2 sm:col-span-2">
            <Link href="/" className="inline-block mb-4 md:mb-6">
              <motion.span
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="text-3xl md:text-4xl font-black gradient-text-glow font-display"
              >
                ONE Web3
              </motion.span>
            </Link>
            <p className="text-gray-300/90 mb-6 md:mb-8 max-w-sm text-sm md:text-base leading-relaxed">
              构建人类与智能共生的经济文明。通过 AIDA、x402、RWA 和 DAO 驱动的全球智能体生态体系。
            </p>
            <div className="flex space-x-3 md:space-x-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ scale: 1.15, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-gradient-to-br from-primary-500/20 to-secondary-500/20 flex items-center justify-center text-gray-300 hover:text-white hover:from-primary-500 hover:to-secondary-500 transition-all border border-primary-500/20 hover:border-primary-500/50 shadow-glow-sm hover:shadow-glow-md"
                  aria-label={social.label}
                >
                  <social.icon className="text-lg md:text-xl" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          {footerLinks.map((column, index) => (
            <div key={column.title}>
              <h3 className="text-white font-bold mb-4 md:mb-5 text-base md:text-lg font-display">{column.title}</h3>
              <ul className="space-y-2 md:space-y-3">
                {column.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-300/80 hover:text-primary-400 transition-colors text-sm md:text-base inline-block hover:translate-x-1 transition-transform"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 md:pt-10 border-t border-primary-500/20">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 gap-4">
            <p className="text-gray-400/90 text-xs md:text-sm text-center md:text-left">
              &copy; 2021-{currentYear} ONE Web3 Ecosystem. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center md:justify-end gap-4 md:gap-6">
              <Link
                href="#"
                className="text-gray-400/90 hover:text-primary-400 transition-colors text-xs md:text-sm"
              >
                隐私政策
              </Link>
              <Link
                href="#"
                className="text-gray-400/90 hover:text-primary-400 transition-colors text-xs md:text-sm"
              >
                使用条款
              </Link>
              <Link
                href="#"
                className="text-gray-400/90 hover:text-primary-400 transition-colors text-xs md:text-sm"
              >
                Cookie 政策
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
