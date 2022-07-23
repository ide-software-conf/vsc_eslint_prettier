module.exports = {
  extends: ['plugin:vue/strongly-recommended'],
  parserOptions: {},
  // plugins: ["vue", "prettier"],
  rules: {
    'vue/max-attributes-per-line': 'off',
    'vue/html-self-closing': [
      'error',
      {
        html: {
          void: 'any', //https://eslint.vuejs.org/rules/html-self-closing.html
          normal: 'always',
          component: 'always'
        }
      }
    ]
  }
};
