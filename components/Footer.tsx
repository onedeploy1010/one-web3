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
    <footer className="bg-black border-t border-gray-800">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-4">
              <span className="text-3xl font-bold gradient-text">ONE Web3</span>
            </Link>
            <p className="text-gray-400 mb-6 max-w-sm">
              构建人类与智能共生的经济文明。通过 AIDA、x402、RWA 和 DAO 驱动的全球智能体生态体系。
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className="text-gray-400 hover:text-primary-500 transition-colors text-xl"
                  aria-label={social.label}
                >
                  <social.icon />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          {footerLinks.map((column, index) => (
            <div key={column.title}>
              <h3 className="text-white font-semibold mb-4">{column.title}</h3>
              <ul className="space-y-2">
                {column.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-primary-500 transition-colors text-sm"
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
        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              &copy; 2021-{currentYear} ONE Web3 Ecosystem. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link
                href="#"
                className="text-gray-400 hover:text-primary-500 transition-colors text-sm"
              >
                隐私政策
              </Link>
              <Link
                href="#"
                className="text-gray-400 hover:text-primary-500 transition-colors text-sm"
              >
                使用条款
              </Link>
              <Link
                href="#"
                className="text-gray-400 hover:text-primary-500 transition-colors text-sm"
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
