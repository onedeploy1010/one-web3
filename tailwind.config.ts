import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-sans)', 'Inter', 'system-ui', 'sans-serif'],
        display: ['var(--font-display)', 'Space Grotesk', 'Inter', 'sans-serif'],
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1.5', letterSpacing: '0.025em' }],
        'sm': ['0.875rem', { lineHeight: '1.5', letterSpacing: '0.025em' }],
        'base': ['1rem', { lineHeight: '1.625', letterSpacing: '0' }],
        'lg': ['1.125rem', { lineHeight: '1.625', letterSpacing: '0' }],
        'xl': ['1.25rem', { lineHeight: '1.5', letterSpacing: '-0.025em' }],
        '2xl': ['1.5rem', { lineHeight: '1.375', letterSpacing: '-0.025em' }],
        '3xl': ['1.875rem', { lineHeight: '1.25', letterSpacing: '-0.025em' }],
        '4xl': ['2.25rem', { lineHeight: '1.25', letterSpacing: '-0.025em' }],
        '5xl': ['3rem', { lineHeight: '1', letterSpacing: '-0.05em' }],
        '6xl': ['3.75rem', { lineHeight: '1', letterSpacing: '-0.05em' }],
        '7xl': ['4.5rem', { lineHeight: '1', letterSpacing: '-0.05em' }],
        '8xl': ['6rem', { lineHeight: '1', letterSpacing: '-0.05em' }],
        '9xl': ['8rem', { lineHeight: '1', letterSpacing: '-0.05em' }],
      },
      colors: {
        // 现代化深蓝紫渐变主色系 - Premium Web3 设计
        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',  // 主色：明亮天蓝
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
          950: '#082f49',
        },
        secondary: {
          50: '#faf5ff',
          100: '#f3e8ff',
          200: '#e9d5ff',
          300: '#d8b4fe',
          400: '#c084fc',
          500: '#a855f7',  // 辅色：鲜艳紫色
          600: '#9333ea',
          700: '#7e22ce',
          800: '#6b21a8',
          900: '#581c87',
          950: '#3b0764',
        },
        accent: {
          cyan: '#06b6d4',       // 青色强调
          teal: '#14b8a6',       // 青绿色
          emerald: '#10b981',    // 翠绿色
          violet: '#8b5cf6',     // 紫罗兰
          fuchsia: '#d946ef',    // 品红色
          rose: '#f43f5e',       // 玫瑰红
          amber: '#f59e0b',      // 琥珀金
          lime: '#84cc16',       // 柠檬绿
        },
        // 语义化颜色
        success: {
          light: '#10b981',
          DEFAULT: '#059669',
          dark: '#047857',
        },
        warning: {
          light: '#fbbf24',
          DEFAULT: '#f59e0b',
          dark: '#d97706',
        },
        error: {
          light: '#f87171',
          DEFAULT: '#ef4444',
          dark: '#dc2626',
        },
        info: {
          light: '#38bdf8',
          DEFAULT: '#0ea5e9',
          dark: '#0284c7',
        },
        // 中性色系
        dark: {
          50: '#18181b',
          100: '#27272a',
          200: '#3f3f46',
          300: '#52525b',
          400: '#71717a',
          500: '#a1a1aa',
          600: '#d4d4d8',
          700: '#e4e4e7',
          800: '#f4f4f5',
          900: '#fafafa',
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-primary': 'linear-gradient(135deg, #0ea5e9 0%, #a855f7 100%)',
        'gradient-secondary': 'linear-gradient(135deg, #06b6d4 0%, #8b5cf6 100%)',
        'gradient-accent': 'linear-gradient(135deg, #14b8a6 0%, #d946ef 100%)',
        'gradient-mesh': 'radial-gradient(at 0% 0%, #0ea5e9 0%, transparent 50%), radial-gradient(at 100% 0%, #a855f7 0%, transparent 50%), radial-gradient(at 100% 100%, #06b6d4 0%, transparent 50%), radial-gradient(at 0% 100%, #8b5cf6 0%, transparent 50%)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 8s ease-in-out infinite',
        'float-fast': 'float 4s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'glow-pulse': 'glowPulse 3s ease-in-out infinite',
        'shimmer': 'shimmer 3s ease-in-out infinite',
        'gradient-x': 'gradient-x 15s ease infinite',
        'gradient-y': 'gradient-y 15s ease infinite',
        'gradient-xy': 'gradient-xy 15s ease infinite',
        'scale-in': 'scaleIn 0.3s ease-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-down': 'slideDown 0.5s ease-out',
        'fade-in': 'fadeIn 0.6s ease-out',
        'bounce-slow': 'bounce 3s infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          'from': {
            boxShadow: '0 0 20px rgba(14, 165, 233, 0.5), 0 0 40px rgba(168, 85, 247, 0.3)',
          },
          'to': {
            boxShadow: '0 0 30px rgba(14, 165, 233, 0.8), 0 0 60px rgba(168, 85, 247, 0.6)',
          },
        },
        glowPulse: {
          '0%, 100%': {
            boxShadow: '0 0 20px rgba(14, 165, 233, 0.4), 0 0 40px rgba(168, 85, 247, 0.2)',
          },
          '50%': {
            boxShadow: '0 0 40px rgba(14, 165, 233, 0.8), 0 0 80px rgba(168, 85, 247, 0.6)',
          },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        'gradient-x': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        'gradient-y': {
          '0%, 100%': { backgroundPosition: '50% 0%' },
          '50%': { backgroundPosition: '50% 100%' },
        },
        'gradient-xy': {
          '0%, 100%': { backgroundPosition: '0% 0%' },
          '25%': { backgroundPosition: '100% 0%' },
          '50%': { backgroundPosition: '100% 100%' },
          '75%': { backgroundPosition: '0% 100%' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.9)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      boxShadow: {
        'glow-sm': '0 0 10px rgba(14, 165, 233, 0.5)',
        'glow-md': '0 0 20px rgba(14, 165, 233, 0.5), 0 0 40px rgba(168, 85, 247, 0.3)',
        'glow-lg': '0 0 30px rgba(14, 165, 233, 0.6), 0 0 60px rgba(168, 85, 247, 0.4)',
        'glow-xl': '0 0 40px rgba(14, 165, 233, 0.7), 0 0 80px rgba(168, 85, 247, 0.5)',
        'inner-glow': 'inset 0 0 20px rgba(14, 165, 233, 0.3)',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '112': '28rem',
        '128': '32rem',
      },
    },
  },
  plugins: [],
};

export default config;
