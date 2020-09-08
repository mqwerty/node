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
    'node/no-unsupported-features/es-builtins': 0,
    'node/no-unsupported-features/es-syntax': 0,
    'node/no-missing-import': 0,
    'no-console': 'error',
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
