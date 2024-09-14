module.exports = {
  root: true,
  extends: [
    "eslint:recommended",
    "plugin:prettier/recommended",
  ],
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
  },
  rules: {
    "no-console": "warn",
    "no-unused-vars": ["warn", { "argsIgnorePattern": "^_" }],
    "indent": ["error", 2],
    "quotes": ["error", "single"],
    "semi": ["error", "always"],
    "camelcase": ["error", { "properties": "always" }],
    "eqeqeq": ["error", "always"],
    "no-debugger": "warn",
    "no-undef": "error",
  },
  globals: {
    IS_DEVELOPMENT: "readonly",
  },
};
