'use strict';

module.exports = {
  printWidth: 100, // 一行的字符数，如果超过会进行换行，默认为80
  tabWidth: 2, // 一个tab代表几个空格数，默认为2
  useTabs: false, // 是否使用tab进行缩进，默认为false，表示用空格进行缩减
  singleQuote: true, // 字符串是否使用单引号，默认为false，使用双引号
  semi: true, // 行尾是否使用分号，默认为true
  trailingComma: 'none', // 是否使用尾逗号，有三个可选值"<none|es5|all>"（默认none）
  bracketSpacing: true, // 对象字面量的大括号间是否有空格，默认为true，效果：{ foo: bar }
  // "parser": "babylon", //代码的解析引擎，默认为babylon，与babel相同。
  jsxBracketSameLine: false, // 多行JSX中的>放置在最后一行的结尾，而不是另起一行（默认false）
  arrowParens: 'avoid' // 只有一个参数的箭头函数的参数是否带圆括号（默认avoid）
};
