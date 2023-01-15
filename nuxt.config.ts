// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  image: {
    dir: 'static/'
  },
  modules: ['@nuxtjs/tailwindcss', '@nuxt/image-edge',]
})
