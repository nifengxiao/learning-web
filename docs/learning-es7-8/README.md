## es7

#### 数组新增函数

- includes 查找一个值在不在数组里,若是存在则返回true,不存在返回false

- for..of 

  以下几个函数都是配合for..of使用的

- keys 遍历出keys

- values 遍历出values

- entries  遍历出entries 

#### 求幂运算符 **

- 用法

  ```
  3 ** 2  //9
  效果同
  Math.pow(3, 2) //9
  ```

- 可以和 `+=`一样的用法

  ```
  var b = 3;
  b **= 2;
  console.log(b); //9
  ```

## es8

### async await

- 作用
  - 避免有更多的请求操作，出现多重嵌套，也就是俗称的“回调地狱”
  - 封装 generator  yield，让写法更加简洁

- 声明方式
  - 函数声明： `async function foo() {}
  - 函数表达式： `const foo = async function() {}`
  - 对象的方式： `let obj = { async foo() {} }`
  - 箭头函数： `const foo = async () => {}`

- 返回值
  -  promise