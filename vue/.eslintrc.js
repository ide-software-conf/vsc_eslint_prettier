module.exports = {
  root: true, //告诉eslint不要往父级查找配置文件
  env: {
    //指定环境的全局变量
    browser: true,
    commonjs: true,
    es6: true,
    node: true
  },
  extends: [
    //'standard',
    'eslint:recommended', //官方推荐的基础规则
    'plugin:vue/strongly-recommended',
    'plugin:prettier/recommended'
  ],
  parserOptions: {
    //指定eslint解析器的，解析器必须符合规则，babel-eslint解析器是对babel解析器的包装使其与ESLint解析
    parser: 'babel-eslint',
    ecmaVersion: 2015
    //用来指定javaScript语言类型和风格，sourceType用来指定js导入的方式，默认是script，此处设置为module，指某块导入方式
    //sourceType: 'module',
  },
  // plugins: ["vue", "prettier"],
  rules: {
    'prettier/prettier': 'error',
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
    ],
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    // "no-undef": "error", //[已包含]不允许未声明的变量
    'no-unused-vars': ['error', { vars: 'all', args: 'after-used' }], //不允许有声明后未使用的变量或者参数
    'no-tabs': 'error', //不允许tabs
    indent: ['error', 2, { SwitchCase: 1 }], //缩进风格
    quotes: ['error', 'single'], //强制使用单引号
    semi: ['error', 'never'], //强制不使用分号结尾
    'no-multi-spaces': 'error',
    'no-trailing-spaces': 1, //行尾不能有空格
    'space-in-parens': [1, 'never'], //小括号中不能有空格
    'linebreak-style': ['error', 'unix'], //换行风格,unix:LF,windows:CRLF
    // 'arrow-parens': 2, //[与prettier冲突]箭头函数的参数要用小括号括起来
    'space-before-function-paren': ['error', { anonymous: 'always', named: 'never' }], //函数定义时括号前的空格，方法名和括号间要有空格，过多的会走no-multi-spaces
    'no-mixed-spaces-and-tabs': [0, 'smart-tabs'], //不允许混用tab和空格
    camelcase: ['error', { properties: 'never' }] //强制驼峰命名规则
    // "generator-star-spacing": "off" //生成器函数*的前后空格
  }
}
