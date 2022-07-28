module.exports = {
  root: true, // 代表顶层配置，不要再往上级查找配置文件
  // 运行环境，不同的运行环境，全局变量不一样，同时也会开启对应环境的语法支持，例如：es6
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    node: true
  },
  parser: 'babel-eslint',
  // 插件是单独的npm包，命名一般以eslint-plugin开头，用字符串数组的形式可以省略eslint-plugin前缀
  plugins: [],
  // 在extends中引入plugins包含的一个或多个规则配置；通常第一项与工程强相关，比如vue、react都有专门的规则模块
  extends: [
    // ... // 前边加定制规则
    'eslint:recommended', // 官方推荐的基础规则
    'plugin:prettier/recommended' // 为eslint-plugin-prettier的推荐规则，会覆盖前边的规则，应该放在最后边
  ],
  parserOptions: {
    //指定eslint解析器的，解析器必须符合规则，babel-eslint解析器是对babel解析器的包装使其与ESLint解析
    parser: 'babel-eslint',
    ecmaVersion: 2015
    //用来指定javaScript语言类型和风格，sourceType用来指定js导入的方式，默认是script，此处设置为module，指某块导入方式
    //sourceType: 'module',
  },
  rules: {
    // prettier.config.js中的配置多是给vsc格式化使用的，当配置在eslint不生效时，单独再配置一下
    'prettier/prettier': ['error', { semi: true }],
    // eslint配置要与prettier一致，不配置则默认遵从prettier配置
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    // "no-undef": "error", //[已包含]不允许未声明的变量
    'no-unused-vars': ['error', { vars: 'all', args: 'after-used' }], //不允许有声明后未使用的变量或者参数
    'no-tabs': 'error', //不允许tabs
    indent: ['error', 2, { SwitchCase: 1 }], //缩进风格，参数一代表错误等级，有0/1/2三个值，分别代表off/warning/error，参数二是具体配置的值
    quotes: ['error', 'single'], //强制使用单引号
    semi: ['error', 'always'], // 强制使用分号结尾
    'no-multi-spaces': 'error',
    'no-trailing-spaces': 1, //行尾不能有空格
    'space-in-parens': [1, 'never'], //小括号中不能有空格
    'linebreak-style': ['error', 'unix'], //换行风格,unix:LF,windows:CRLF
    // 'arrow-parens': 2, //[与prettier冲突]箭头函数的参数要用小括号括起来
    'space-before-function-paren': ['error', { anonymous: 'always', named: 'never' }], //函数定义时括号前的空格，方法名和括号间要有空格，过多的会走no-multi-spaces
    'no-mixed-spaces-and-tabs': [0, 'smart-tabs'], //不允许混用tab和空格
    camelcase: ['error', { properties: 'never' }] //强制驼峰命名规则
    // "generator-star-spacing": "off" //生成器函数*的前后空格
    // ... // 后边加定制规则
  }
};
