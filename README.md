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
