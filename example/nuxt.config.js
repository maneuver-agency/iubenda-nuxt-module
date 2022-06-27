const { resolve } = require('path')

module.exports = {
  rootDir: resolve(__dirname, '..'),
  buildDir: resolve(__dirname, '.nuxt'),
  srcDir: __dirname,
  modules: [
    { handler: require('../') }
    // '@nuxtjs/i18n'
  ],
  iubenda: {
    config: {
      siteId: 1,
      cookiePolicyId: 1
    }
    // i18n: {
    //   nl: {
    //     cookiePolicyId: 1
    //   },
    //   fr: {
    //     cookiePolicyId: 2
    //   }
    // }
  }
  // i18n: {
  //   locales: ['nl', 'fr'],
  //   defaultLocale: 'nl'
  // }
}
