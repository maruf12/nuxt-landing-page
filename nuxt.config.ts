// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  image: {
    dir: 'static/'
  },
  modules: ['@nuxtjs/tailwindcss', '@nuxt/image-edge',]
})
