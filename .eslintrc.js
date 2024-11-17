module.exports = {
    env: {
      node: true,
      es2021: true,
      jest: true,
      commonjs: true
    },
    extends: ['eslint:recommended'],
    parserOptions: {
      ecmaVersion: 2021
    },
    globals: {
      process: true
    },
    rules: {
      'indent': ['error', 2],
      'linebreak-style': ['error', 'unix'],
      'quotes': ['error', 'single'],
      'semi': ['error', 'always'],
      'no-unused-vars': 'warn',
      'no-console': 'warn'
    }
  };