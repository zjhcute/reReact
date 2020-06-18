const { strictEslint } = require('@umijs/fabric')
const tangramCfg = require('./tangram.config')
const OFF = 0
const WARN = 1
const ERROR = 2

const noUnresolvedIgnoreList = Object.keys(tangramCfg.resolverAlias).map(
  m => `^${m}`
)
module.exports = {
  ...strictEslint,
  parserOptions: {
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      legacyDecorators: true,
      experimentalDecorators: true,
    },
  },
  extends: [...strictEslint.extends, 'plugin:prettier/recommended'],
  plugins: [...strictEslint.plugins, 'prettier'],
  rules: {
    ...strictEslint.rules,
    'prettier/prettier': ERROR,
    'import/no-unresolved': [
      2,
      {
        ignore: noUnresolvedIgnoreList,
      },
    ],
    'react-hooks/rules-of-hooks': OFF,
    'react/no-array-index-key': OFF,
    'react/prefer-stateless-function': OFF,
    'import/named': OFF,
    // Too restrictive
    'no-param-reassign': OFF,
    'react/sort-comp': OFF,
    'no-underscore-dangle': OFF,
    'eslint-comments/disable-enable-pair': OFF,
    '@typescript-eslint/camelcase': OFF,
  },
}