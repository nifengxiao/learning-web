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

#### Vue-Resource（这个作者目前已经不维护了，推荐更好的框架axios）

- [github地址](https://github.com/pagekit/vue-resource)

- 作用

  Vue 要实现异步加载需要使用到 vue-resource 库。

- cdn

  ```javascript
  <script src="https://cdn.jsdelivr.net/npm/vue-resource@1.5.1"></script>
  ```

- get请求:

  - 不带参数： 

    ```javascript
    ///someUrl
    {
      this.$http.get('/someUrl').then(result => {
        //成功回调
      }, err => {
        //失败回调
     });
    }
    ```

  - 带参数：

    ```javascript
    /someUrl?foo=bar
    {
      this.$http.get('/someUrl'，{params：{foo:'bar'}}).then(result => {
        //成功回调
      }, err => {
        //失败回调
      });
    }
    ```

  - 带参数+请求头：

    ```javascript
    {
      this.$http.get('/someUrl', {params: {foo: 'bar'}, headers: {'X-Custom': '...'}}).then(response => {
        //成功回调
      }, response => {
        //失败回调
      });
    }
    ```

- post请求：

  - 带参数

    ```javascript
    // /someUrl
    {
      this.$http.post('/someUrl', {foo: 'bar'}).then(result => {
    	//成功回调
      }, err => {
       //失败回调
      });
    }
    ```

  - 启用emulateJSON 

    - post 发送数据到后端，需要第三个参数 **{emulateJSON:true}**。

    - emulateJSON 的作用： 如果Web服务器无法处理编码为 application/json 的请求，你可以启用 emulateJSON 选项。

    - 使用

      ```javascript
      // /someUrl
      {
        this.$http.post('/someUrl', {foo: 'bar'},{emulateJSON:true}).then(result => {
      	//成功回调
        }, err => {
         //失败回调
        });
      }
      ```

- 获取图像并使用blob（）方法从响应中提取图像主体内容。

  ```javascript
  {
  	// GET /image.jpg
    this.$http.get('/image.jpg', {responseType: 'blob'}).then(response => {
      // resolve to Blob
      return response.blob();
    }).then(blob => {
      // use image Blob
    });
  }
  ```

- 全局配置

  ```
  //全局配置根地址
  Vue.http.options.root = '/root';
  //全局配置emulateJSON(如果Web服务器无法处理编码为 application/json 的请求)
  Vue.http.options.emulateJSON = true;
  //全局配置emulateHTTP(如果Web服务器无法处理PUT，PATCH、DELETE)
  Vue.http.options.emulateHTTP = true;
  //全局配置Authorization
  Vue.http.headers.common['Authorization'] = 'Basic YXBpOnBhc3N3b3Jk';
  ```

  注意:

  要让根地址生效，请求路径必须是一个相对路径。

  `Vue.http.get('someUrl')` 正确

  `Vue.http.get('/someUrl')` 错误

- 拦截器

  - 作用

    - 添加统一的request的参数 
      - 比如header中加入参数，
      - 比如客户端需要实现sign和token的验证机制，
      - 比如你可以写$http.get('/files', params)，拦截器帮你拼接成 `http://www.xxxx.com/1/files` 这样的请求地址
    - 处理统一的responseError 
      - 比如重连机制，拿到error.code错误码重连，
      - 比如token过期，重新拿到token再次send request 
      - 比如统一报错信息，给所有返回的404

  - 简单使用

    - 处理请求过程

      ```javascript
      Vue.http.interceptors.push(function(request) {
        // 修改请求方式
        request.method = 'POST';
      
        // 修改请求头
        request.headers.set('X-CSRF-TOKEN', 'TOKEN');
        request.headers.set('Authorization', 'Bearer TOKEN');
      });
      ```

    - 请求和响应处理

      ```javascript
      Vue.http.interceptors.push(function(request) {
      
        // 修改请求方式
        request.method = 'POST';
      
        // 返回请求响应回调
        return function(response) {
          //修改响应
          //这个地方就可以做token是否过期等处理
          response.body = '...';
        };
      });
      ```

    - 返回响应并停止处理

      ```javascript
      Vue.http.interceptors.push(function(request) {
      
        ...
      
        //停止和返回响应
        return request.respondWith(body, {
          status: 404,
          statusText: 'Not found'
        });
      });
      ```

#### 组件基础

- 什么是组件

  用来拆分Vue实例的代码量，能够让我们以不同的组件，来划分不同的功能模块。

- 组件化和模块化的区别？

  - 组件化：

    从ui界面的角度划分，前端的组件化，方便ui组件的重用。

  - 模块化

    从代码逻辑的角度进行划分的。方便代码分层开发，保证每个功能模块的职能单一。

- 注册

  ```javascript
  Vue.component('my-component-name', {
    // ... options ...
  })
  ```

- 基本实例

  创建：

  ```
  // 定义一个名为 button-counter 的新组件
  Vue.component('button-counter', {
    data: function () {
      return {
        count: 0
      }
    },
    template: '<button v-on:click="count++">You clicked me {{ count }} times.</button>'
  })
  ```

  使用：

  ```
  <button-counter></button-counter>
  ```

  说明：

  - data 必须是一个函数，因此每个实例可以维护一份被返回对象的独立的拷贝。

- 组件的注册

  - 全局注册

    ```
    Vue.component('my-component-name', {
      // ... options ...
    })
    ```

  - 局部注册

    ```
    var ComponentA = { /* ... */ }
    ```

- 通过Prop向子组件传递数据

  实例：

  ```
  Vue.component('blog-post', {
    props: ['title'],
    template: '<h3>{{ title }}</h3>'
  })
  ```

  使用

  ```html
  <blog-post title="My journey with Vue"></blog-post>
  ```

  

- 通过v-bind动态传递prop(可以在一开始不清楚要渲染的具体内容时使用,一般都会使用这个)

  如：

  ```javascript
  new Vue({
    el: '#blog-post-demo',
    data: {
      posts: [
        { id: 1, title: 'My journey with Vue' },
        { id: 2, title: 'Blogging with Vue' },
        { id: 3, title: 'Why Vue is so fun' }
      ]
    }
  })
  ```
  
  渲染
  
  ```html
  <blog-post
    v-for="post in posts"
    :key="post.id"
    :title="post.title"
  ></blog-post>
  ```
  
- template中只能有一个根元素

  - 如果多出来，就会报错**every component must have a single root element (每个组件必须只有一个根元素)**

    不能这样写：

    ```html
    <h3>{{ title }}</h3>
    <div v-html="content"></div>
    ```

    将模板的内容包裹在一个父元素内，来修复这个问题,需要这样写

    <div class="blog-post">
      <h3>{{ title }}</h3>
      <div v-html="content"></div>
    </div>

    使用

    ```
    <blog-post
      v-for="post in posts"
      v-bind:key="post.id"
      v-bind:title="post.title"
      v-bind:content="post.content"
    ></blog-post>
    ```

  - 但是这就看起来很复杂了，所以需要重构

    ```html
    <blog-post
      v-for="post in posts"
      v-bind:key="post.id"
      v-bind:post="post"
    ></blog-post>
    ```

    ```javascript
    Vue.component('blog-post', {
      props: ['post'],
      template: `
        <div class="blog-post">
          <h3>{{ post.title }}</h3>
          <div v-html="post.content"></div>
        </div>
      `
    })
    ```

- 监听子组件事件

  - 使用示例  让子组件的监听来控制父组件的大小

    - 可以在模板中用来控制字号

      ```javascript
  new Vue({
        ...
      data: {
         	....
          postFontSize: 1
        }
      })
      ```
    ```
      
    ```
  ```html
      :style="{ fontSize: postFontSize + 'em' }"
  ```
  
    - 父级组件可以像处理 native DOM 事件一样通过 `v-on` 监听子组件实例的任意事件
  
      如：
  
    ```html
      <blog-post
      ...
        v-on:enlarge-text="postFontSize += 0.1"
    ></blog-post>
    ```
  
    - 同时子组件可以通过调用内建的 [**$emit** 方法](https://cn.vuejs.org/v2/api/#vm-emit) 并传入事件名称来触发一个事件

      如:
  
      ```html
      <button v-on:click="$emit('enlarge-text')">
        Enlarge text
      </button>
      ```
  
  - 使用事件抛出一个值
  
  - 例如我们可能想让 `<blog-post>` 组件决定它的文本要放大多少。这时可以使用 `$emit` 的第二个参数来提供这个值：
  
    ```html
      <button v-on:click="$emit('enlarge-text', 0.1)">
        Enlarge text
      </button>
    ```

      然后当在父级组件监听这个事件的时候，我们可以通过 `$event` 访问到被抛出的这个值：
  
      ```html
      <blog-post
        ...
        v-on:enlarge-text="postFontSize += $event"
      ></blog-post>
      ```
  
  - 或者，如果这个事件处理函数是一个方法
  
    ```html
      <blog-post
      ...
        v-on:enlarge-text="onEnlargeText"
    ></blog-post>
    ```
  
      那么这个值将会作为第一个参数传入这个方法
    
      ```javascript
      methods: {
        onEnlargeText: function (enlargeAmount) {
          this.postFontSize += enlargeAmount
        }
      }
      ```
  
- 在组件上使用v-model
  
  - 记住一个原则:
  
      ```h&#39;t&#39;m&#39;l
      <input v-model="searchText">
    ```
  
    等价于：
  
      ```html
      <input
        v-bind:value="searchText"
        v-on:input="searchText = $event.target.value"
      >
      ```
  
  - 如何使用
  
      如：
  
      ```html
      <custom-input v-model="searchText"></custom-input>
      ```
  
      拆解开来就是：
  
      ```html
      <custom-input
      v-bind:value="searchText"
        v-on:input="searchText = $event"
    ></custom-input>
    ```

      然后将value绑定到这个组件的input中
  
      ```html
      Vue.component('custom-input', {
        props: ['value'],
        template: `
          <input
            v-bind:value="value" //将其 value 特性绑定到一个名叫 value 的 prop 上
            v-on:input="$emit('input', $event.target.value)" //在其 input 事件被触发时，将新的值通过自定义的 input 事件抛出
          >
      `
      })
      ```
  
- 插槽(这里先放着)
  
  使用: 
  
  ```javascript
    Vue.component('alert-box', {
    template: `
        <div class="demo-alert-box">
          <strong>Error!</strong>
          <slot></slot>
        </div>
      `
  })
  ```

  - 动态组件(这里先放着)

    - 用途：不同组件之间进行动态切换等
  
  - 解析DOM模板时的注意事项
  
    - 由于：`<li>`、`<tr>` 和 `<option>`，等只能出现在其它某些特定的元素内部。

      这会导致我们使用这些有约束条件的元素时遇到一些问题

      ```
      
      ```
    <table>
        <blog-post-row></blog-post-row>
</table>
      ```
  
      自定义组件 `<blog-post-row>` 会被作为无效的内容提升到外部，并导致最终渲染结果出错
  
      使用is特性可以解决这个问题
    
      ```
      <table>
        <tr is="blog-post-row"></tr>
    </table>
      ```
  
    - 如果使用以下来源使用模板的话，这条限制时不存在的 (没看懂，回来再看)
  
      例如：
  
      - 字符串 (例如：`template: '...'`)
  
      - [单文件组件 (`.vue`)](https://cn.vuejs.org/v2/guide/single-file-components.html)
    
      - <script type = "text/x-template">
      ```

#### 深入了解组件

- 组件注册

  - 组件名大小写

    使用kebab-case
  
    ```javascript
  Vue.component('my-component-name', { /* ... */ })
    ```

    使用PascalCase

    ```javascript
    Vue.component('MyComponentName', { /* ... */ })
    ```

    注意：直接在 DOM (即非字符串的模板) 中使用时只有 kebab-case 是有效的,最好的方式就是写成kebab-case

  - 全局注册
  
    ```javascript
  Vue.component('my-component-name', {
      // ... 选项 ...
  })
    ```

    注册之后可以用在任何新创建的 Vue 根实例 (`new Vue`) 的模板中
  
  - 局部注册
  
    有的情况，比如，如果你使用一个像 webpack 这样的构建系统，全局注册所有的组件意味着即便你已经不再使用一个组件了，它仍然会被包含在你最终的构建结果中。这造成了用户下载的 JavaScript 的无谓的增加。这个时候，就需要局部注册了

    注册:

    ```javascript
  var ComponentA = { /* ... */ }
    var ComponentB = { /* ... */ }
    ```
  ```
  
  初始化：
  
    ```javascript
    new Vue({
      el: '#app',
    components: {
        'component-a': ComponentA，
      'component-b': ComponentB
      }
    })
  ```
  
    注意：**局部注册的组件在其子组件中不可用**
  
    所以,如果你希望 `ComponentA` 在注册 `ComponentB`的时候可用，则你需要这样写：
  
    ```javascript
  var ComponentA = { /* ... */ }
    
  var ComponentB = {
      components: {
      'component-a': ComponentA
      },
      // ...
    }
    ```
  
  - 模块系统:(需要后续补充)
  
- Prop

  - HTML 中的特性名是大小写不敏感的，所以浏览器会把所有大写字符解释为小写字符

  - 这意味着当你使用 DOM 中的模板时，camelCase (驼峰命名法) 的 Prop名需要使用其等价的 kebab-case (短横线分隔命名) 命名：

    ```javascript
    Vue.component('blog-post', {
      // 在 JavaScript 中是 camelCase 的
      props: ['postTitle'],
      template: '<h3>{{ postTitle }}</h3>'
    })
    ```

    ```html
    <!-- 在 HTML 中是 kebab-case 的 -->
    <blog-post post-title="hello!"></blog-post>
    ```

    注意：如果使用字符串模板，那么这个限制就不存在了。

  - Prop类型:

    以对象的形式列出prop，可以指定prop的类型
  
    ```javascript
    props: {
      title: String,
      likes: Number,
      isPublished: Boolean,
      commentIds: Array,
      author: Object,
      callback: Function,
      contactsPromise: Promise // or any other constructor
  }
    ```

    用途：这不仅为组件提供了文档，还会在它们遇到错误的类型时从浏览器的 JavaScript 控制台提示用户

  - 传递静态或动态Prop

    - 可以静态传值，也可以通过v-bind动态赋值

    - 任何类型的值都可以传给一个prop

  - 单向数据流

    - 所有的 prop 都使得其父子 prop 之间形成了一个**单向下行绑定**：父级 prop 的更新会向下流动到子组件中，但是反过来则不行。这样会防止从子组件意外改变父级组件的状态，从而导致你的应用的数据流向难以理解。

    - 每次父级组件发生更新时，子组件中所有的 prop 都将会刷新为最新的值。这意味着你**不**应该在一个子组件内部改变 prop。如果你这样做了，Vue 会在浏览器的控制台中发出警告。

      ![1558445907419](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\1558445907419.png)

    - 注意：在 JavaScript 中对象和数组是通过引用传入的，所以对于一个数组或对象类型的 prop 来说，在子组件中改变这个对象或数组本身**将会**影响到父组件的状态。

  - Prop验证

    为了定制 prop 的验证方式，你可以为 `props` 中的值提供一个带有验证需求的对象，而不是一个字符串数组
  
    ```javascript
    Vue.component('my-component', {
      props: {
        // 基础的类型检查 (`null` 和 `undefined` 会通过任何类型验证)
        propA: Number,
        // 多个可能的类型
        propB: [String, Number],
        // 必填的字符串
        propC: {
          type: String,
          required: true
        },
        // 带有默认值的数字
        propD: {
          type: Number,
          default: 100
        },
        // 带有默认值的对象
        propE: {
          type: Object,
          // 对象或数组默认值必须从一个工厂函数获取
          default: function () {
            return { message: 'hello' }
          }
        },
        // 自定义验证函数
        propF: {
          validator: function (value) {
            // 这个值必须匹配下列字符串中的一个
            return ['success', 'warning', 'danger'].indexOf(value) !== -1
          }
        }
      }
    })
    ```

    注意：prop 会在一个组件实例创建**之前**进行验证，所以实例的属性 (如 `data`、`computed` 等) 在 `default` 或 `validator` 函数中是不可用的

    - 类型检查

      - `type` 可以是下列原生构造函数中的一个：
  
        - `String`
        - `Number`
        - `Boolean`
        - `Array`
        - `Object`
        - `Date`
      - `Function`
    
  - `Symbol`
    
  - 另外，`type` 还可以是一个自定义的构造函数，并且通过 `instanceof` 来进行检查确认
    
      如构造函数
      
        ```javascript
        function Person (firstName, lastName) {
          this.firstName = firstName
          this.lastName = lastName
      }
        ```
    
      可以使用：
    
        ```javascript
        Vue.component('blog-post', {
          props: {
            author: Person
          }
      })
        ```
    
      来验证 `author` prop 的值是否是通过 `new Person` 创建的。
    
    ```
    
    ```
  
- 非Prop特性
  
  - 一个非 prop 特性是指传向一个组件，但是该组件并没有相应 prop 定义的特性。
  
  - 对于绝大多数相同属性,从外部提供给组件的值会替换掉组件内部设置好的值，`class`和 `style` 特性会稍微智能一些，即两边的值会被合并起来
  
  - 禁用特性继承：如果你**不**希望组件的根元素继承特性，你可以在组件的选项中设置 `inheritAttrs: false`
  
      如：
  
      ```javascript
      Vue.component('my-component', {
        inheritAttrs: false,
        // ...
    })
    ```
  
      $attrs--继承所有的父组件属性（除了prop传递的属性、class 和 style ）
  
      用`inheritAttrs: false` 和 `$attrs`手动决定特性会被赋予哪个元素,在撰写[基础组件](https://cn.vuejs.org/v2/style-guide/#基础组件名-强烈推荐)的时候是常会用到的：
    
      ```javascript
      Vue.component('base-input', {
        inheritAttrs: false,
        props: ['label', 'value'],
        template: `
          <label>
            {{ label }}
            <input
              v-bind="$attrs"
              v-bind:value="value"
              v-on:input="$emit('input', $event.target.value)"
            >
        </label>
      `
  })
      ```
  
      注意: `inheritAttrs: false` 选项**不会**影响 `style` 和 `class` 的绑定
  
      这个模式允许你在使用基础组件的时候更像是使用原始的 HTML 元素，而不会担心哪个元素是真正的根元素：意思就是说属性都是从父组件传到子组件中的，不会在子组件中定义一次，这样写可以防止覆盖。
    
  
- 自定义事件

  - 事件名

    - 事件名不存在任何自动化的大小写转换

    - 触发的事件名需要完全匹配监听这个事件所用的名称

    - 并且 `v-on` 事件监听器在 DOM 模板中会被自动转换为全小写 (因为 HTML 是大小写不敏感的)，所以 `v-on:myEvent` 将会变成 `v-on:myevent`

    - 所以最佳命名：

      **始终使用 kebab-case 的事件名**。

  - 自定义组件的v-model注意事项

    - 一个组件上的 `v-model` 默认会利用名为 `value` 的 prop 和名为 `input` 的事件

    - 但是像单选框、复选框等类型的输入控件可能会将 `value` 特性用于[不同的目的](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/checkbox#Value)。

    - 所以需要model来避免冲突

      ```javascript
      Vue.component('base-checkbox', {
        model: { //加上model避免冲突
          prop: 'checked',
          event: 'change'
        },
        props: {
          checked: Boolean //这里还是需要声明的
        },
        template: `
          <input
            type="checkbox"
            v-bind:checked="checked"
            v-on:change="$emit('change', $event.target.checked)"
          >
        `
      })
      ```

  - 将原生事件绑定到组件中

    - $listeners：将所有的事件监听器指向这个组件的某个特定的子元素

      语法：

      ```
       v-on="$listeners"
      ```

    - 如何配合v-model？

      ```javascript
      Vue.component('base-input', {
        inheritAttrs: false,
        props: ['label', 'value'],
        computed: {
          inputListeners: function () {
            var vm = this
            // `Object.assign` 将所有的对象合并为一个新对象
            return Object.assign({},
              // 我们从父级添加所有的监听器
              this.$listeners,
              // 然后我们添加自定义监听器，
              // 或覆写一些监听器的行为
              {
                // 这里确保组件配合 `v-model` 的工作
                input: function (event) {
                  vm.$emit('input', event.target.value)
                }
              }
            )
          }
        },
        template: `
          <label>
            {{ label }}
            <input
              v-bind="$attrs"
              v-bind:value="value"
              v-on="inputListeners"
            >
          </label>
        `
      })
      ```

    - .sync

      当一个子组件改变了一个prop的值时，这个变化也会同步到父组件中所绑定。

      使用：

      在组件中表达对其赋新值的意图：

      ```
      this.$emit('update:value', newValue)
      ```

      然后父组件可以监听那个事件并根据需要更新一个本地的数据属性

      ```
       v-bind:value="value"
       v-on:update:value="value = $event"
      ```

      缩写

      ```
      :value.sync="v-bind"
      ```

- 插槽

- 动态组件、异步组件

- 处理边界情况

#### 路由

- 什么是路由？

  后端路由：对于普通的网站，所有的超链接都是URL地址，所有的URL地址都对应服务器上相应的资源

  前端路由：对于单页面应用程序来说，主要通过URL中的hash(#)来实现不同页面之间的跳转。同时hash有一个特点，http请求不会包含hash相关的内容。所以，单页面程序中的页面跳转主要由hash实现，而这种切换页面的方式就叫前端路由

- 基本使用

  1. 安装路由
  2. 创建一个VueRouter对象
  3. 书写匹配规则
  4. 将路由规则对象注册到Vue实例上，用来监听url地址的变化，然后展示对应的属性
  5. 添加router-view

- router-link标签

  - vue-router提供用来简化a标签

  - 通过tag更改渲染成其他的标签

- 重定向 redirect

- 动画 在router-view外套一层

- 传参 

  qurey

  通过$route.query获取参数

  params

  通过$route.params获取参数

- 嵌套

  - 使用children属性，实现子路由。
  - 子路由的path前面，不要带/,否则永远以根路径开始请求，这样不方便用户去理解url地址。
  - 注意：在子模块里面引用子路由 也需要router-view

- 命名视图布局

  - components 对应一个对象 name:component 
  - router-view 中使用name指定component

#### methods、computed、watch

- computed

  - 计算属性 computed 计算属性本质是一个方法，只不过我们在使用的时候，是把他们的名称直接当作属性来使用的

  - 注意：
    1. 使用的时候直接用名称
    2. 计算属性这个function内部用到的任何data中的数据发生了变化，就会重新计算属性的值
    3. 计算属性的结果是会被缓存的，方便下次使用

- watch

  - 可以监视data中指定数据的变化
  - 注意：
    1. 方法名为所监听的属性名
    2. 有两个形参，newVal和oldVal

- 对比
  - methods 主要书写具体的业务逻辑
  - computed 属性结果会被缓存，依赖的响应式属性变化时才会重新计算，主要当作属性来使用
  - watch 主要用来监听某些特定数据的变化，从而进行某些具体的业务操作

#### webpack

- 在网页中会引用到哪些常见的静态资源？

  - js

    .js .jsx .coffee .ts(TypeScript 类 c# 语言)

  - css

    .css .less. sass .scss

  - images

    .jpg .png .gif .bmp .svg

  - 字体文件

    .svg .ttf .eot .woff .woff2

  - 模板文件

    .ejs .jade .vue

- 网页中引入的静态资源过多会有什么问题？

  1. 网页加载速度慢，因为我们要发起很多二次请求
  2. 要处理错综复杂的依赖关系

- 如何处理？

  1. 合并、压缩、精灵图、图片的base64编码
  2. 可以使用webpack解决各个包之间的复杂依赖关系

- 什么是webpack？

  webpack是前端的一个项目构建工具，它是基于node.js开发出来的一个前端工具

- 如何完美解决上述2种解决方案？

  - 使用Gulp，是基于task任务的
  - 使用Webpack,是基于整个项目进行构建的
    - 可以完美实现资源的合并、打包、压缩、混淆等等

- webpack安装

  - 全局安装命令：npm i webpack -g
  - 在项目根目录中运行 npm i webpack -D安装到项目依赖

- webpack具体可以做什么？

  - webpack 能够处理js文件的相互依赖关系
  - webpack能够处理js兼容性问题，把高级的、浏览器不识别的语法转成浏览器能识别的语法

- 如何使用：

  1. 初始化项目：

     ```
     npm init -y
     ```

  2. 在项目中新建 src目录 src目录里面创建一个main.js作为入口，再创建一个index.html作为主页

     ![image](https://raw.githubusercontent.com/nifengxiao/learning-web/master/screenshot/image.mlorn2v0ql.png)

  3. - 打包方式1：通过webpack指定路径进行打包：

       ```
       webpack 要打包的文件路径  --output  输入的文件路径
       ```

     - 打包方式2：

       通过配置webpack.config.js指定路径

       ```javascript
       const path = require('path')
       
       module.exports = {
           entry: path.join(__dirname,'./src/main.js'),
           output: {
               path: path.join(__dirname,"./dist"),
               filename: 'bundle.js'
           }
       }
       ```

       用命令webpack打包

       ```
       webpack
       ```

     - 打包方式3：使用webpack-dev-server自动打包

       1. 安装

          ```
          npm i webpack-dev-server -D 
          ```

          如果提示需要安装webpack依赖项

          ```
          npm i webpack -D 
          ```

       2. 在package.json的scripts下，添加"dev":"webpack-dev-server"
       
          ```
          "dev":"webpack-dev-server"
          ```
       
       3. 把引入的路径改成根路径
       
          ```
          <script src="/bundle.js"></script>
          ```
       
       4. 使用
       
          ```
          npm run dev
          ```
       
       5. 可配置命令
       
          - open 自动打开浏览器
       
          - port 设置启动时候的运行端口
       
          - contentBase 指定托管的根目录
       
          - hot  启用热更新
       
            如何配置?
       
            - 第一种方式：直接在package.json配置的dev脚本后面追加（推荐方式）
       
              ```javascript
              "dev": " webpack-dev-server --open --port 3000 --contentBase src --hot"
              ```
       
            - 第二种方式：在webpack.config.js中配置
       
              在module.exports下
       
              ```
              devServer:{
                	open:true, //自动打开浏览器
                	port:3000, //设置启动时候的运行端口
              	contentBase:'src',  //指定托管的根目录
              }
              ```
       
              如果要启用热更新
       
              1. 导入webpack
       
                 ```javascript
                 const webpack = require('webpack')；
                 ```
       
              2. 在module.exports下添加插件
       
                 ```javascript
                 plugins:[ 
                   	        new webpack.HotModuleReplacementPlugin()
                 ]
                 ```
       
              3. 在module.exports下的devServer中启用
       
                 ```javascript
                 hot:true    //启用热更新
                 ```

  4. 引入html-webpack-plugin指定生成页面

     1. 安装:

        ```
        npm i html-webpack-plugin -D
        ```

     2. 在webpack.config.js中进行配置

        导入：

        ```
        const htmlWebpackPlugin = require("html-webpack-plugin")
        ```

        在module.exports中的plugins下new一个htmlWebpackPlugin对象，指定模板页面生成内存中的页面。

        ```javascript
        new htmlWebpackPlugin({
                    template: path.join(__dirname, "./src/index.html"), //指定模板页面
                    filename: 'index.html' //指定页面的生成
        })
        ```

        这个时候可以注释掉index.html中对于bundle.js的引入了

  5. 使用loader引入css 

     1. 安装

        - 安装 css

          ```
          npm i style-loader css-loader -D
          ```

        - 如果要使用less

          ```
          npm i style-loader css-loader less-loader less -D
          ```

        - 如果要使用sass

          ```
          npm i style-loader css-loader sass-loader node-sass -D
          ```

     2. 在webpack.config.js 这个配置文件，新增一个配置节点，叫做module，它是一个对象，在这个module对象上，有个rules属性，这个rules属性是个数组，这个数组中存放了所有第三方文件的匹配和处理规则。

        ```javascript
     module:{   
                rules:[
             	//css
                    {test:/\.css$/,use:['style-loader','css-loader']},
                    //less
                    {test:/\.less$/,use:['style-loader','css-loader','less-loader']},
                    //sass
                    {test:/\.scss$/,use:['style-loader','css-loader','sass-loader']}
                ]
            }
        ```
     
     3. 这个时候就可以在main.js中导入了
     
        ```javascript
        import './css/index.css'
        import './css/index.less'
        import './css/index.scss'
        ```
     
  6. 使用loader引入url

     1. 安装

        ```
        npm i url-loader file-loader -D
        ```

     2. 配置匹配规则

        ```
        {test:/\.(jpg|png|bmp|jpeg)$/,use:['url-loader]}
        ```

     3. 参数

        - limit 和 name

          ```
          {test:/\.(jpg|png|bmp|jpeg)$/,use:'url-loader?limit=8750&name=[hash:8]-[name].[ext]'}
          ```

        - 说明：

          - limit给定的值是图片的大小，单位是byte，如果我们引用的图片大于或等于给定limit值，则不会被转为base64格式的字符串，如果图片小于给定的limit值，则会被转为base64的字符串
          - name参数用来重命名   [hash:8] 代表只取8位hash值  [name]取原名称 [ext]取原扩展名 （注意：如果name存在一样，后面读取的会覆盖前面的）
        
     4. 字体
     
        ```javascript
         {test:/\.(ttf|eot|svg|woff|woff2)$/,use:'url-loader'}, //处理字体文件
        ```
     
     5. 使用babel引入es6以上语法
     
        安装提供转换功能的包
     
        ```
        npm i babel-core babel-loader babel-plugin-transform-runtime -D 
        ```
     
        安装提供语法对应关系的包
     
        ```
        npm i babel-preset-env babel-preset-stage-0 -D  
        ```
     
        安装完了之后还需要提供babel7的依赖库（这一步有待改善）
     
        ```
        npm i babel-loader@7  @babel/core -D 
        ```
     
        打开webpack的配置文件，在module节点下的rules数组中，添加一个新的匹配规则
     
        ```javascript
        {test:/\.js$/,use:'babel-loader',exclude:/node_modules/}
        ```
     
        在项目的根目录中，新建一个叫做.babelrc的babel配置文件，这个配置文件，属于json格式,在.babelrc 写如下配置
     
        ```
        {
              "presets":["env","stage-0"],
              "plugins":["transform-runtime"] 
        }
        ```
     
        说明：在配置babel的loader规则的时候，必须把node_modules目录，通过exclude排除的原因有两个
     
        - 如果不排除node_modules,则Babel会把node_modules中所有的第三方js都打包编译，这样会非常消耗cpu，同时，打包速度会非常慢
     
        - 哪怕，最终，Babel把所有node_modules中的js转换完了，项目也无法运行
     
        

- 注意事项：

  - 关于webpack

    当我们在控制台直接输入webpack命令执行的时候，webpack做了以下操作

    	1. 首先，webpack发现，我们没有给它指定入口和出口
     	2. webpack就会去项目的根目录中查找配置文件
     	3. 通过解析执行配置文件，得到配置对象
     	4. 当webpack拿到配置对象后，就拿到了配置对象中，指定的入口和出口，然后进行打包构建
    
  - 关于webpack-dev-server

    - webpack-dev-server这个工具，如果想要正常运行，要求在本地项目中必须安装webpack
    - 在npm run dev 中 会看到webpack output is served from / 意思是webpack的输出路径正托管于我们的根路径，所以要把这时输出路径会变成根路径
    - webpack-dev-server帮我们打包生成输出文件，并没有存放到实际的物理磁盘上，而是直接托管到了电脑的内存中，所以，我们在项目根目录中根本找不到输出的文件。
    - 为何不写到磁盘中？为了提升速度。

  - html-webpack-plugin

    用途：

      - 自动在内存中根据指定页面生成一个内存的页面
    - 自动把打包好的bundle.js追加到页面中去

  - loader加载器

     - webpack，默认只能打包处理js类型的文件，无法处理其他的非js类型的文件

       如果要处理非js类型的文件，我们需要手动安装一些第三方的loader加载器

     - webpack处理第三方文件类型的过程

       1. 发现这个要处理的文件不是js文件，然后就去配置文件中，查找有没有对应的第三方loader规则
       2. 如果能找到对应的规则，就会调用对应的loader处理这种文件类型

       3. 当调用loader的时候，是从后往前调用的

       4. 当最后一个loader调用完毕，会把处理的结构，直接交给webpack进行打包合并，最终输出到bundle.js中去
  
  