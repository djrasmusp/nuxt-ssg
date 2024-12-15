// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  runtimeConfig: {
    umbracoBaseUrl: process.env.NUXT_UMBRACO_BASE_URL,
    umbracoStartNode: process.env.NUXT_UMBRACO_START_NODE,
    umbracoApiKey: process.env.NUXT_UMBRACO_API_KEY
  },
  routeRules: {
    '/**' : {
      prerender: true
    },
    '/preview/**' : {
      prerender: false,
      ssr: true
    }
  },
  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ["/"],
    },
  },
  devtools: { enabled: true }
})
