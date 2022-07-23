// 如下是基于根目录配置的增量配置
module.exports = {
  parser: 'babel-eslint',
  // extends第一项与工程强相关，比如vue、react都有专门的规则模块
  extends: [
    'eslint-config-egg' // eggjs
  ],
  parserOptions: {},
  rules: {}
};
