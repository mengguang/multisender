importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/3241b1cf8cd6f6dcbb76.js",
    "revision": "ad296ed4c2433cafa16527d7d0bdd17f"
  },
  {
    "url": "/_nuxt/3f0158024c7baa741485.js",
    "revision": "8ae2265a52b3f0f99e346318b0ee32dd"
  },
  {
    "url": "/_nuxt/49ed8349b67ce894c698.js",
    "revision": "d3b6f27518c67f0be2e967bf41a1b5eb"
  },
  {
    "url": "/_nuxt/4b24fd34099d3812bf47.js",
    "revision": "5f719e710ec2ff78c2de8c58ec3d83d2"
  },
  {
    "url": "/_nuxt/58a840fa30db22a8faaa.js",
    "revision": "0f789ae7fbfc5d4ff5c3466dada4b9db"
  },
  {
    "url": "/_nuxt/5c920a9045153749bd54.js",
    "revision": "396d89a53ea8f1e1efeebce5e88045f3"
  },
  {
    "url": "/_nuxt/63a1713dba06b650ab38.js",
    "revision": "b35220118346487a3e256c70091610f3"
  },
  {
    "url": "/_nuxt/69718ab808850fc98cca.js",
    "revision": "973ea22a67138e70be45214e78cacbec"
  },
  {
    "url": "/_nuxt/718d192d098c09c2de2a.js",
    "revision": "9260a1a02cd235eb0c0af6f674eefc66"
  },
  {
    "url": "/_nuxt/79892779b226dbf9b506.js",
    "revision": "18b23a5ff60de6382520a10084628223"
  },
  {
    "url": "/_nuxt/b7f26634e8a2327a7796.js",
    "revision": "92275ec1973c75a3e5f0ac17dbda79b1"
  },
  {
    "url": "/_nuxt/dcc9b0e08189c839bd85.js",
    "revision": "69e6ea81044b6b8b93384bac0fa53cf8"
  },
  {
    "url": "/_nuxt/e5e83b5930d9ec8015ff.js",
    "revision": "325a5473c3f745cb6ac5a044711f2edd"
  },
  {
    "url": "/_nuxt/f0e95fbe6404b945ef62.js",
    "revision": "dbe1dbe0b5bb853f78b9f50b68231ccb"
  },
  {
    "url": "/_nuxt/fb2ea1063a89d092e7c9.js",
    "revision": "badf28f3de9eda45eb25b8a07afe82fa"
  }
], {
  "cacheId": "multisender.app",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')
