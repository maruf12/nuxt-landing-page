// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  image: {
    cloudinary: {
      baseURL: 'https://res.cloudinary.com/ddfviyche/image/upload/landing-page-nuxt3'
    }
  },
  modules: ['@nuxtjs/tailwindcss', '@nuxt/image-edge',]
})
