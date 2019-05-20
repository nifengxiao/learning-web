## Vue 

#### 相关链接

-  [官网](http://itmyhome.com/markdown/article/syntax/links.html)
-  [哔哩哔哩-学 Vue.js 看这个就够了教程集合](<https://www.bilibili.com/video/av27969216?from=search&seid=3704413797294464971>)

#### 什么是Vue？
- 定义：

  是一套构建用户界面的渐进式框架。

- 兼容性

  Vue **不支持** IE8 及以下版本，因为 Vue 使用了 IE8 无法模拟的 ECMAScript 5 特性,但它支持所有[兼容 ECMAScript 5 的浏览器](https://caniuse.com/#feat=es5)

- 前端的主要工作

  - 主要负责mvc中的v一层，和页面打交道，来制作页面。

- 优点
  - 能够帮助我们减少不必要的dom操作，提高渲染效率
  - 双向绑定的概念，通过框架提供的指令，我们只需要关心数据的业务逻辑，不用关系dom是如何渲染的了

#### 安装Vue

- 开发环境版本

  ```html
  <!-- 开发环境版本，包含了有帮助的命令行警告 -->
  <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
  ```

- 生产环境版本

  ```html
  <!-- 生产环境版本，优化了尺寸和速度 -->
  <script src="https://cdn.jsdelivr.net/npm/vue"></script>
  ```

- [更多](<https://cn.vuejs.org/v2/guide/installation.html>)

#### 对Vue定位、基本语法以及架构的讨论

- 基本使用
  1. 安装Vue
  2. 在script中创建Vue对象，通过el关键字指定将要控制的区域
  3. 在html中使用Vue

- 框架和库的区别

  - 框架： 是一套完整的解决方案，对项目的侵入性较大，项目如果需要更换框架，则需要重新架构整个项目
  - 库(插入)：提供某一个小功能，对项目侵入性较小，如果某个库不能完成某些需求，可以轻松切换到其他库实现需求

- mvc和mvvm的关系

  - mvc是后端的分层开发概念

  - ![1557838127843](..\screenshot\1557838127843.png)

  - mvvm是前端视图层分层开发思想

    ![1557838396773](..\screenshot\1557838396773.png)

    

- 基本语法与mvvm之间的关系
   ![1557838995181](..\screenshot\1557838995181.png)

#### 基本指令

- v-cloak 解决插值表达式闪烁问题

![1557839295714](..\screenshot\1557839295714.png)

​		说明：只要用了v-cloak属性的标签，默认隐藏，刷新完成后v-cloak属性会被移除

- v-text = "" 和插值表达式作用一样

  区别：

  - 默认v-text是没有闪烁问题的
  - v-text会覆盖元素中原本的内容，但是插值表达式只会替换自己的这个占位符，不会把整个元素清空

- v-html 加载html

- v-bind 提供用于绑定属性的指令，v-bind中可以写合法的js表达式 简写：

- v-on 提供事件绑定  简写@ 

  - 如点击事件 v-on:click
  - 如鼠标覆盖事件 v-on:mouseover

- 写一个简单的跑马灯

   	![1558064170583](..\screenshot\1558064170583.png)

- v-model双向数据绑定 （只能运用在表单元素中）

    - 运用 ： 写一个简单的计算器

        ![1558074503562](..\screenshot\1558074503562.png)

- v-for

  - v-for="item in array"   后面可用插值表达式得到

  - 可以循环对象数组

  - 还可以循环对象 v-for = "(val , key) in  obj"

  - 直接循环数字

    - 如 v-for="count in num" 
    - 注意 count会从1开始

  - 注意:

    在使用v-for的时候，如果需要取出索引，只需要在括号尾部添加一个参数用来接收就可以了

  - 使用key，保证数据的唯一性

    - 语法

      ```
      ：key="xx"
      ```

    - v-for循环的时候，key属性只能使用number或string

    - 在key使用的时候，必须使用v-bind属性绑定的形式，指定key的值

    - 在使用v-for循环的时候，如果v-for有问题，必须在使用v-for的同事，指定唯一的key值

- v-if 和v-show

  - v-if 
    - 每次都会重新删除或创建元素
    - 有较高的切换性能消耗
    - 应用场景 ：元素可能永远不会被显示出来
  - v-show 
    - 每次不会重新进行dom的删除和创建操作，只是切换了元素的display：none样式
    - 有较高的初始渲染消耗  
    - 应用场景 ：元素涉及到频繁的切换

#### 事件修饰符

- stop  阻止冒泡

- self  只有事件在该元素本身时候触发回调，不会阻止冒泡事件

- prevent 阻止默认行为

- capture 添加事件侦听器时使用事件捕获模式

- once 只执行一次

  语法 ：如： @click.stop  @click.self

#### 样式

- 使用class样式

  - 方式

  	1. 数组
  	2. 数组中使用三元表达式
  	3. 数组中嵌套对象
  	4. 直接使用对象
				   - 注意
  	     - 可以在data中定义这个对象，然后使用
  
- 使用内联表达式
  1. 直接在元素上通过:style的形式，书写样式对象
  2. 将样式对象定义到data中，并直接引用到:style中
  3. 在:style中通过数组，引用多个data上的样式对象

#### 做一个品牌列表案例

​	![1558089918078](..\screenshot\1558089918078.png)

#### vue-devtools

- 作用：

  一款基于chrome游览器的插件，用于调试vue应用，可以极大地提高我们的调试效率。

- 运行

  - 记得要打开这个

  ![1558090067889](..\screenshot\1558090067889.png)

  - 调试

    ![1558090165922](..\screenshot\1558090165922.png)

#### Vue全局过滤器

- 语法

  - 定义

    - 在一个组件的选项中定义私有的过滤器

      ```javascript
      filters: {
        my-filter: function (value) {
          // 返回处理后的值
        }
      }
      ```

    - 在创建 Vue 实例之前全局定义过滤器

      ```javascript
      // 注册
      Vue.filter('my-filter', function (value) {
        // 返回处理后的值
      })
      ```

    - 返回过滤器

      ```javascript
      // getter，返回已注册的过滤器
      var myFilter = Vue.filter('my-filter')
      ```

    - 注意：过滤器调用的时候采用的是就近原则，如果私有和全局的过滤器名称一样，就会调用私有的。

  - 使用

    -  过滤器被添加在 JavaScript 表达式的尾部，由“管道”符号指示

      ```html
      <!-- 在双花括号中 -->
      {{ str | filter }}
      
      <!-- 在 `v-bind` 中 -->
      <div v-bind:id="str | filter"></div>
      ```

    - 过滤器可以串联

      ```html
      {{ message | filterA | filterB }}
      ```

    - 过滤器是 JavaScript 函数,因此可以接收参数

      ```html
      {{ message | filterA('arg1', arg2) }}
      ```

#### 按键修饰符

- 作用 ：

  监听键盘事件

- 语法

  如： enter

  ```javascript
  <!-- 只有在 `key` 是 `Enter` 时调用 `vm.submit()` -->
  <input v-on:keyup.enter="submit">
  ```

- 按键码

  - 注意: `keyCode` 的事件用法[已经被废弃了](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/keyCode)并可能不会被最新的浏览器支持。

  - 用法：

    如:

    ```html
    <input v-on:keyup.13="submit">
    ```

  - 常用按键码别名

    - `.enter`
    - `.tab`
    - `.delete` (捕获“删除”和“退格”键)
    - `.esc`
    - `.space`
    - `.up`
    - `.down`
    - `.left`
    - `.right`

  - 注意:有一些按键 (`.esc` 以及所有的方向键) 在 IE9 中有不同的 `key` 值, 如果你想支持 IE9，这些内置的别名应该是首选。

  - 自定义按键修饰符别名

    ```js
    // 可以使用 `@:keyup.f2`进行调用
    Vue.config.keyCodes.f12 = 123
    ```

#### 自定义指令

- 应用场景

  需要对普通 DOM 元素进行底层操作，

- 如:聚焦输入框

  - 注册全局自定义指令

    ```javascript
    // 注册一个全局自定义指令 `v-focus`
    Vue.directive('focus', {
      // 当被绑定的元素插入到 DOM 中时……
      inserted: function (el) {
        // 聚焦元素
        el.focus()
      }
    })
    ```

  - 注册局部指令

    ```javascript
    directives: {
      focus: {
        // 指令的定义
        inserted: function (el) {
          el.focus()
        }
      }
    }
    ```

  - 使用

    ```html
    <input v-focus>
    ```

  - 注意：

    指令名必须小写。

- 钩子函数

  - bind:

     只调用一次，指令第一次绑定到元素时调用，在这里可以进行一次新的初始化设置。

  - inserted:

    只调用一次，被绑定元素插入父节点时调用 (仅保证父节点存在，但不一定已被插入文档中)

  - update:

    调用多次，所在组件的 VNode 更新时调用

    注意： 也可能发生在其子VNode更新之前。指令的值可能发生了改变，也可能没有。但是你可以通过比较更新前后的值来忽略不必要的模板更新。

  - componentUpdated

    指令所在组件的 VNode 及其子 VNode 全部更新后调用

  - unbind

    只调用一次，指令与元素解绑时调用

- 钩子函数的参数

  - `el`：指令所绑定的元素，可以用来直接操作 DOM 。

  - `binding`：一个对象

  - `vnode`：Vue 编译生成的虚拟节点

  - `oldVnode`：上一个虚拟节点，仅在 `update` 和 `componentUpdated` 钩子中可用

  - 注意：

    除了 `el` 之外，其它参数都应该是只读的，切勿进行修改。如果需要在钩子之间共享数据，需要通过元素的 [`dataset`](https://developer.mozilla.org/zh-CN/docs/Web/API/HTMLElement/dataset) 来进行。

- 函数简写

  如果想在 `bind` 和 `update` 时触发相同行为，而不关心其它的钩子，这是可以简写，如下：

  ```JavaScript
  Vue.directive('color-swatch', function (el, binding) {
    el.style.backgroundColor = binding.value
  })
  ```

#### Vue实例的生命周期

- 定义

  从Vue实例创建、运行、到销毁期间，总是伴随着各种各样的事件，这些事件，统称为生命周期。

- 四个准备阶段，四个完成阶段
  - beforeCreate() 
  - created()
  - beforeMount()
  - mounted()
  - beforeUpdate()
  - updated()
  - beforeDestory()
  - destoryed()

- 生命周期钩子 = 生命周期函数 = 生命周期事件

- 生命周期图解

  ![](C:\Users\Administrator\Desktop\learning-web\screenshot\lifecycle.png)