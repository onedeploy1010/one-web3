import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // 墨蓝偏绿色系 - ONE集团主色调
        primary: {
          50: '#e6f7f9',
          100: '#cceff3',
          200: '#99dfe7',
          300: '#66cfdb',
          400: '#33bfcf',
          500: '#0d8a9d',  // 主色：墨蓝偏绿
          600: '#0a6e7e',
          700: '#08535f',
          800: '#053740',
          900: '#031c20',
        },
        accent: {
          teal: '#14b8a6',      // 青绿色
          cyan: '#06b6d4',      // 青色
          emerald: '#10b981',   // 翠绿色
          gold: '#f59e0b',      // 金色点缀
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          'from': {
            boxShadow: '0 0 20px rgba(13, 138, 157, 0.5), 0 0 40px rgba(20, 184, 166, 0.3)',
          },
          'to': {
            boxShadow: '0 0 30px rgba(13, 138, 157, 0.8), 0 0 60px rgba(20, 184, 166, 0.6)',
          },
        },
      },
    },
  },
  plugins: [],
};

export default config;
