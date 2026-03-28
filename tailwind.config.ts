import type { Config } from 'tailwindcss'

export default {
  content: [
    './app.vue',
    './components/**/*.{vue,js,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}'
  ],
  theme: {
    extend: {
      colors: {
        notion: {
          bg: '#f7f7f5',
          panel: '#ffffff',
          border: '#e5e5e2',
          text: '#2f3437',
          muted: '#6b7280',
          accent: '#0f766e'
        }
      },
      borderRadius: {
        notion: '12px'
      },
      boxShadow: {
        notion: '0 1px 2px rgba(0, 0, 0, 0.04), 0 8px 24px rgba(0, 0, 0, 0.04)'
      }
    }
  },
  plugins: []
} satisfies Config
