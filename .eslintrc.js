/* eslint-disable @typescript-eslint/no-var-requires */
const jestConf = require('./jest.config')

module.exports = {
  env: {
    es2020: true,
    node: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  extends: ['prettier', 'eslint:recommended', 'plugin:node/recommended', 'plugin:@typescript-eslint/recommended'],
  plugins: ['@typescript-eslint'],
  rules: {
    'no-console': 0,
    'node/no-unsupported-features/es-builtins': 0,
    'node/no-unsupported-features/es-syntax': 0,
    'node/no-extraneous-import': 0,
    'node/no-missing-import': 0,
    'node/no-unpublished-import': 0,
    '@typescript-eslint/no-explicit-any': 0,
    '@typescript-eslint/explicit-module-boundary-types': 0,
    '@typescript-eslint/no-non-null-assertion': 0,
  },
  overrides: [
    {
      files: jestConf.testMatch,
      env: {
        jest: true,
      },
      plugins: ['@typescript-eslint', 'jest'],
    },
  ],
}
