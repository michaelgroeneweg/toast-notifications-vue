module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:vue/vue3-recommended',
    '@vue/typescript/recommended',
    '@vue/prettier',
  ],
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 2020,
  },
  rules: {
    '@typescript-eslint/no-unused-vars': 'error',
    '@typescript-eslint/consistent-type-definitions': ['error', 'type'],
    'no-undef': 'off',
    'vue/no-unused-vars': 'error',
    'vue/script-setup-uses-vars': 'error',
    'vue/no-undef-properties': 'error',
    'vue/no-undef-components': 'off',
    'vue/multi-word-component-names': 'off',
    'vue/no-undef': 'off',
    'vue/no-unused-refs': 'off',
    'no-unused-vars': 'off',
    'vue/require-prop-types': 'off',
  },
}
