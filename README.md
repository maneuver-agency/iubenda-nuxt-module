# Iubenda Nuxt Module

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![Github Actions CI][github-actions-ci-src]][github-actions-ci-href]
[![Codecov][codecov-src]][codecov-href]
[![License][license-src]][license-href]

> Easily integrate Iubenda with Nuxt.js

[📖 **Release Notes**](./CHANGELOG.md)

## Setup

1. Add `iubenda-module` dependency to your project

```bash
yarn add iubenda-module # or npm install iubenda-module
```

2. Add `iubenda-module` to the `modules` section of `nuxt.config.js`

```js
{
  modules: [
    // Simple usage
    'iubenda-module',

    // With options
    ['iubenda-module', { /* module options */ }]
  ]
}
```

## Module Options

```js
{
  iubenda: {
    // Defaults:
    dev: true, // Activate module in dev environment.
    consentMode: true, // Use Google's consent mode.
    links: {
      enable: true, // Add script to include links to policy pages.
      style: 'nostyle', // Add styling to links. (nostyle, white or black)
      whiteLabel: true, // White label links.
      embed: true // Open links in embedded popup.
    },

    // Entire iubenda configuration
    config: {
      siteId: 12345, // Required
      cookiePolicyId: 12345, // Required
      lang: 'nl' // Default: 'en'
      // ...all other config options. (See Iubenda cookie banner script)
    }
  }
}
```

## Use in Vue templates

The included plugin provides the following properties to use in your Vue components:

```js
$iubenda.privacyPolicyUrl // Link to privacy policy
$iubenda.cookiePolicyUrl // Link to cookie policy
$iubenda.privacyPolicyApiUrl // Url to use in an API call for the privacy policy
$iubenda.cookiePolicyApiUrl // Url to use in an API call for the cookie policy
$iubenda.getPrivacyPolicyLinkHtml('Label') // Link tag to the privacy policy page / popup
$iubenda.getCookiePolicyLinkHtml('Label') // Link tag to the cookie policy page / popup
```

Example:
```html
  <template>
    <div v-html="$iubenda.getPrivacyPolicyLinkHtml('Privacybeleid')"></div>
    <div v-html="$iubenda.getCookiePolicyLinkHtml('Cookiebeleid')"></div>
  </template>
```

Will render (depending on your 'links' options):
```html
  <div>
    <a 
      href="https://www.iubenda.com/privacy-policy/12345" 
      class="iubenda-nostyle no-brand iubenda-noiframe iubenda-embed"
      title="Privacybeleid">
      Privacybeleid
    </a>
    <a 
      href="https://www.iubenda.com/privacy-policy/12345/cookie-policy" 
      class="iubenda-nostyle no-brand iubenda-noiframe iubenda-embed" 
      title="Cookiebeleid">
      Cookiebeleid
    </a>
  </div>
```

## Development

1. Clone this repository
2. Install dependencies using `yarn install` or `npm install`
3. Start development server using `npm run dev`

## License

[MIT License](./LICENSE)

Copyright (c) David De Coninck <david@maneuver.be>

<!-- Badges -->
[npm-version-src]: https://img.shields.io/npm/v/iubenda-module/latest.svg
[npm-version-href]: https://npmjs.com/package/iubenda-module

[npm-downloads-src]: https://img.shields.io/npm/dt/iubenda-module.svg
[npm-downloads-href]: https://npmjs.com/package/iubenda-module

[github-actions-ci-src]: https://github.com/maneuver-agency/iubenda-nuxt-module/workflows/ci/badge.svg
[github-actions-ci-href]: https://github.com/maneuver-agency/iubenda-nuxt-module/actions?query=workflow%3Aci

[codecov-src]: https://img.shields.io/codecov/c/github/maneuver-agency/iubenda-nuxt-module.svg
[codecov-href]: https://codecov.io/gh/maneuver-agency/iubenda-nuxt-module

[license-src]: https://img.shields.io/npm/l/iubenda-module.svg
[license-href]: https://npmjs.com/package/iubenda-module
