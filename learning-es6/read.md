## es6

- 兼容性

  - 兼容性表: <https://kangax.github.io/compat-table/es6/>
  - ie10+ 、Chrome、FireFox、移动端、NodeJs
  - 解决办法
    - 在线转换 
      - babel
    - 提前编译（推荐）

- es6要学些啥呢？

  1. 变量
  2. 函数
  3. 数组
  4. 字符串
  5. 面向对象
  6. promise
  7. generator
  8. 模块化

- 变量

  - 存在的问题

    - 可以重复声明
    - 无法限制修改
    - 没有块级作用域

    下面两个玩意是块级作用域

  - let 不能重复声明 变量:可以修改

  - const 不能重复声明 常量：不可修改

  - 为啥要用块级作用域

    - 原生的var  只有函数才是它的作用域

      ![1557898665580](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\1557898665580.png)

    - 现在

      ![1557898698618](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\1557898698618.png)

    - 避免重复声明导致项目混乱

- 箭头函数

  - 如果只有一个参数（）可以省略
  - 如果方法中语句只有一个return {}可以省 

- 函数-参数

  - 参数扩展
    - 收集剩余的参数  ...参数名    
      - function 函数名（a,b,...args）{}
      - 注意：Rest参数必须是最后一个形式参数
    - 展开数组
      - 展开等同于把数组转为由逗号分隔开的字符串
  - 默认参数
    - 传入参数优先,不传则使用默认参数

- 解构赋值

  - 说明

    1. 左右两边的结构必须一样
    2. 右边必须是个合法对象
    3. 声明和赋值不能分开

  - 如：

    ![1557906394996](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\1557906394996.png)

- 数组（以下函数，都需要传一个方法）

  - map 映射
  - reduce 汇总
  - filter 过滤
  - forEach 迭代

- 字符串
  - startsWith 判断开头
  - endWith 判断结尾
  - 字符串模板 
    - `${xxx}`
    - 把字符串直接塞到字符串里面 
    - 可以折行

- es6面向对象

  - 和es5
    - 新增class关键字
    - 构造器和类分开了
    - class里面可以直接加方法了
  - 继承
    - 新整extends关键字和 super()

- json

  - JSON.stringify  将对象转化为json字符串

  - JSON.parse 将json字符串转化为对象

    - 注意：此处传参必须写标准json

    - 什么是标准json？

      1. key必须用双引号包起来

      2. 只能用双引号

  - 简写
    - 1、键一定要用双引号，值如果是字符串也要用双引号包括
    - 2、数据只包括，数字，布尔，数组，null，对象，字符串