// 如下是基于根目录配置的增量配置
module.exports = {
  parser: 'babel-eslint',
  env: {
    commonjs: true,
    es6: true,
    'react-native/react-native': true
  },
  // extends第一项与工程强相关，比如vue、react都有专门的规则模块
  extends: [
    'plugin:react/recommended' // 写在eslint之后，prettier之前
  ],
  parserOptions: {
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      jsx: true
    },
    sourceType: 'module'
  },
  plugins: ['react', 'react-native'],
  rules: {
    'react/prop-types': 1,
    'react/display-name': 0
  }
};
