// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  devtools: { enabled: true },

  // @ts-ignore
  runtimeConfig: {
    public: {
      api: 'https://jsonplaceholder.typicode.com'
    }
  }
})
