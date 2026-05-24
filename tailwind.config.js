/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Paleta Retro-Pop Fireworks
        'retro-yellow': '#FFE135',
        'retro-purple': '#6B3FA0',
        'retro-pink': '#FF1493',
        'retro-magenta': '#FF006E',
        'retro-lime': '#39FF14',
        'retro-cyan': '#00D9FF',
        'retro-gold': '#FFD700',
        'retro-black': '#1A1A1A',
        'cream': '#FAF8F3',
        'ivory': '#FFFEF9',
      },
      fontFamily: {
        'display': ['Fredoka One', 'Poppins', 'sans-serif'],
        'body': ['Poppins', 'sans-serif'],
      },
      animation: {
        'pulse-glow': 'pulse-glow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 3s ease-in-out infinite',
        'shimmer': 'shimmer 3s infinite',
      },
      keyframes: {
        'pulse-glow': {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.8 },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'shimmer': {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
      boxShadow: {
        'retro-sm': '0 4px 12px rgba(107, 63, 160, 0.15)',
        'retro-md': '0 8px 24px rgba(255, 20, 147, 0.2)',
        'retro-lg': '0 12px 36px rgba(107, 63, 160, 0.25)',
      },
    },
  },
  plugins: [],
}
