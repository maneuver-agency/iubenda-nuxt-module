# @nuxtjs/iubenda

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![Github Actions CI][github-actions-ci-src]][github-actions-ci-href]
[![Codecov][codecov-src]][codecov-href]
[![License][license-src]][license-href]

> Easily integrate Iubenda with Nuxt.js

[📖 **Release Notes**](./CHANGELOG.md)

## Setup

1. Add `@nuxtjs/iubenda` dependency to your project

```bash
yarn add @nuxtjs/iubenda # or npm install @nuxtjs/iubenda
```

2. Add `@nuxtjs/iubenda` to the `modules` section of `nuxt.config.js`

```js
{
  modules: [
    // Simple usage
    '@nuxtjs/iubenda',

    // With options
    ['@nuxtjs/iubenda', { /* module options */ }]
  ]
}
```

## Development

1. Clone this repository
2. Install dependencies using `yarn install` or `npm install`
3. Start development server using `npm run dev`

## License

[MIT License](./LICENSE)

Copyright (c) David De Coninck <david@maneuver.be>

<!-- Badges -->
[npm-version-src]: https://img.shields.io/npm/v/@nuxtjs/iubenda/latest.svg
[npm-version-href]: https://npmjs.com/package/@nuxtjs/iubenda

[npm-downloads-src]: https://img.shields.io/npm/dt/@nuxtjs/iubenda.svg
[npm-downloads-href]: https://npmjs.com/package/@nuxtjs/iubenda

[github-actions-ci-src]: https://github.com//workflows/ci/badge.svg
[github-actions-ci-href]: https://github.com//actions?query=workflow%3Aci

[codecov-src]: https://img.shields.io/codecov/c/github/.svg
[codecov-href]: https://codecov.io/gh/

[license-src]: https://img.shields.io/npm/l/@nuxtjs/iubenda.svg
[license-href]: https://npmjs.com/package/@nuxtjs/iubenda
