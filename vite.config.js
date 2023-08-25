import { fileURLToPath, URL } from 'node:url'
import { meta } from 'vite-plugin-meta-tags';
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: true,
    port: 80,
  },
  plugins: [
    vue(),
		meta({
			// `title`, `og:title`, `twitter:title`
			title: 'Nicoli Nails - Especialista em Unhas de Fibra de Vidro - Nails Designer',
      description: "Levando amor e autocuidado ao seu lar 🏡 ✨ 📍Especializada em Alongamento Fibra de Vidro 📍Banho de Gel 📍Gelinho 📍SPA dos pés 📍Manicure 📍Pedicure",
      url: "http://www.nicolinails.pt/",
      img: 'src/assets/profile-about-removebg-no-bg.png',
      color: "#d74497",
		}),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
