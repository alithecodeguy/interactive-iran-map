module.exports = {
  env: {
    "browser": true,
    "es6": true,
    "node": true
  },
  extends: [
    "plugin:react/recommended",
    "eslint:recommended",
    "plugin:prettier/recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended"
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  plugins: [
    "react"
  ],
  rules: {
    "@typescript-eslint/explicit-function-return-type": "off",
    "arrow-body-style": 2,
    "semi": ["error", "always"],
    "quotes": ["error", "double"],
    "prefer-const": 1
  }
}