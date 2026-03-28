export default defineNuxtConfig({
  compatibilityDate: '2026-03-28',
  devtools: { enabled: true },
  css: ['~/assets/css/tailwind.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {}
    }
  },
  typescript: {
    strict: true,
    typeCheck: false
  },
  runtimeConfig: {
    public: {
      supabaseUrl: '',
      supabaseAnonKey: ''
    }
  }
})
