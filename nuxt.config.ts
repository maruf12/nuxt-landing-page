// https://nuxt.com/docs/api/configuration/nuxt-config
import { createIPX, createIPXMiddleware } from "ipx";
const ipx = createIPX({
  dir: "static/", // absolute path to images dir
});
export createIPXMiddleware(ipx);
export default defineNuxtConfig({
  ssr: true,
  image: {
    dir: 'static/'
  },
  modules: ['@nuxtjs/tailwindcss', '@nuxt/image-edge',]
})
