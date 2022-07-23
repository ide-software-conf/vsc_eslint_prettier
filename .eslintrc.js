module.exports = {
  root: true, // 代表顶层配置，不要再往父级查找配置文件
  // 指定环境的全局变量
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    node: true
  },
  parser: 'babel-eslint',
  // extends第一项与工程强相关，比如vue、react都有专门的规则模块
  extends: [
    'eslint-config-egg', // eggjs
    'plugin:prettier/recommended'
  ],
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
