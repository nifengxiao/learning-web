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

    下面两个命令是块级作用域

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
    - 语法：`${str}`
    - 把字符串直接塞到字符串里面 
    - 可以折行

- es6面向对象

  - 和es5
    - 新增class关键字
    - 构造器和类分开了
    - class里面可以直接加方法了
  - 继承
    - 新增extends关键字和 super()

- json

  - JSON.stringify  将对象转化为json字符串

  - JSON.parse 将json字符串转化为对象

    - 注意：此处传参必须写标准json

    - 什么是标准json？

      1. 键一定要用双引号，值如果是字符串也要用双引号包括

      2. 数据只包括，数字，布尔，数组，null，对象，字符串

  - json字面量简写
    - 1、key和value相同可以省略
    - 2、方法中 ：function可以省略
  
- 知识补充

  - js异步同步
    - 同步
      - 如果在函数返回的时候，调用者就能够得到预期结果(即拿到了预期的返回值或者看到了预期的效果)，那么这个函数就是同步的。
    - 异步
      - 如果在函数A返回的时候，调用者还不能够得到预期结果，而是需要在将来通过一定的手段得到，那么这个函数就是异步的。
  - 深究：<https://segmentfault.com/a/1190000004322358>

- promise 

  - 是什么：

    - 是异步编程的一种解决方案

  - 特点

    - 对象的状态不受外界影响:

      `Promise`对象代表一个异步操作，有三种状态：`pending`（进行中）、`fulfilled`（已成功）和`rejected`（已失败）。只有异步操作的结果，可以决定当前是哪一种状态，任何其他操作都无法改变这个状态

    - 一旦状态改变，就不会再变，任何时候都可以得到这个结果:

      `Promise`对象的状态改变，只有两种可能：从`pending`变为`fulfilled`和从`pending`变为`rejected`。只要这两种情况发生，状态就凝固了，不会再变了，会一直保持这个结果，这时就称为 resolved（已定型）。如果改变已经发生了，你再对`Promise`对象添加回调函数，也会立即得到这个结果。这与事件（Event）完全不同，事件的特点是，如果你错过了它，再去监听，是得不到结果的。

  - 优点

    - 将异步操作以同步操作的流程表达出来，避免了层层嵌套的回调函数
    - `Promise`对象提供统一的接口，使得控制异步操作更加容易

  - 缺点

    - 无法取消`Promise`，一旦新建它就会立即执行，无法中途取消
    - 如果不设置回调函数，`Promise`内部抛出的错误，不会反应到外部
    - 当处于`pending`状态时，无法得知目前进展到哪一个阶段（刚刚开始还是即将完成）

  - 基本用法

    分为两步：

    1. 创建一个`Promise`实例

       ```javascript
       //resolve函数：成功
       //reject函数：失败
       const promise = new Promise(function(resolve, reject) {
         // ... 异步代码
         if (/* 异步操作成功 */){
           resolve(value);
         } else {
           reject(error);
         }
       });
       ```

    2. 用then方法分别指定`resolved`状态和`rejected`状态的回调函数，第二个函数是可选的

       ```javascript
       promise.then(function(value) {
         // success
       }, function(error) {
         // failure
       });
       ```

  - `Promise.all`方法用于将多个 Promise 实例，包装成一个新的 Promise 实例

    特点：

        1. 只有所有请求都成功，才会回调resolve

     	2. 有一个rejected,就会回调reject
    使用方法：

    ```javascript
    Promise.all([$ajax(),$ajax()]).then(results=>{
    	//成功
        results 作为一个数组接收返回结果
    }.err=>{
    	//失败
    })
    ```

  - `Promise.race`方法也用于将多个 Promise 实例，包装成一个新的 Promise 实

    特点：

    1. 谁先请求成功，谁先更改状态

    2. 后面的请求不再回调

    使用方法

    ```javascript
    Promise.race([$ajax(),$ajax()]).then(result=>{
    	//成功
    }.err=>{
    	//失败
    })
    ```

- generator
  
  - 是什么：
    
    - 是 ES6 提供的一种异步编程解决方案
    - 是一个状态机，封装了多个内部状态
    - 执行 Generator 函数会返回一个遍历器对象，返回的遍历器对象，可以依次遍历 Generator 函数内部的每一个状态。
    - 通俗一点就是可分步执行的函数
    
  - 特征：
  
  - `function`关键字与函数名之间有一个星号
    
  - 函数体内部使用`yield`表达式，定义不同的内部状态（`yield`在英语里的意思就是“产出”）
    
  - 基本用法：
  
    分为两步：
  
    1. 创建一个Generator对象
  
       ```javascript
       function *func(){
          //code1
          yield；
          //code2
       }
       
       ```
  
    2. 使用next函数
  
       ```javascript
       let generator = func()
       generator.next();
    //第一次会执行 code1
       generator.next();
       //第二次会执行 code2
       ```
       
       说明：
       
       `yield`表达式是暂停执行的标志
       
       `next`方法可以恢复执行
  
  - 注意：不能写成箭头函数
  
  - yield
    - yield可以传参和返回参数
      - 传参
        
        - 使用
          
          ![1558000642108](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\1558000642108.png)
          
        - 第一部分的函数传参靠直接往方法里面传
        
      - 返回
        
        - 使用
          
          ![1558000656948](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\1558000656948.png)
          
        - 最后一部分的返回参数靠return
  
- 普通请求回调、Promise、generator 区别
  - 普通请求回调在请求多个接口的时候会嵌套多层回调
  - Promise适用一次读一堆
  - generator 适用中间添加逻辑（也是对Promise的一种封装）