module.exports = {
  root: true,
  env: {
    commonjs: true,
    es6: true,
    node: true
  },
  parser: 'babel-eslint',
  // extends第一项与工程强相关，比如vue、react都有专门的规则模块
  extends: ['plugin:prettier/recommended'],
  parserOptions: {
    // parser: 'babel-eslint',
    ecmaVersion: 2015
  },
  rules: {
    // prettier.config.js中的配置多是给vsc格式化使用的，当配置在eslint不生效时，单独再配置一下
    'prettier/prettier': ['error', { semi: true }]

    // eslint配置要与prettier一致，不配置则默认遵从prettier配置
    // semi: ['error', 'always'] // 强制使用分号结尾
  }
};
