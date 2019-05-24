//这个main.js 是我们项目的js入口文件

//导入jquery
//import *** from *** 是es6中导入模块的形式
import $ from 'jquery'


import './css/index.css'
import './css/index.less'
import './css/index.scss'
//注意：webpack，默认只能打包处理js类型的文件，无法处理其他的非js类型的文件
//如果要处理非js类型的文件，我们需要手动安装一些第三方的loader加载器
//1.如果要处理.css文件，需要安装npm i style-loader css-loader -D
//2.在webpack.config.js 这个配置文件，新增一个配置节点，叫做module，它是一个对象，
//在这个module对象上，有个rules属性，这个rules属性是个数组，这个数组中存放了所有第三方文件的匹配和处理规则

//注意:webpack处理第三方文件类型的过程
//1. 发现这个要处理的文件不是js文件，然后就去配置文件中，查找有没有对应的第三方loader规则
//2.如果能找到对应的规则，就会调用对应的loader处理这种文件类型
//3.当调用loader的时候，是从后往前调用的
//4.当最后一个loader调用完毕，会把处理的结构，直接交给webpack进行打包合并，最终输出到bundle.js中去

//注意：如果要通过路径的形式，去引入node_modules中相关的文件，可以直接省略路径前面node_modules这一层目录，直接写包的名称后面跟上具体的文件路径
//不写node_modules 默认就会去node_modules中查找
import 'bootstrap/dist/css/bootstrap.css'

// $(function () {
//     $('li:odd').css('backgroundColor', 'yellow')
//     $('li:even').css('backgroundColor', 'green')
// })

//命令格式: webpack 要打包的文件路径  输入的文件路径(然后会自动输出dist 和 打包后的main.js)


class Person{
    static info = {name:"小明",age:"12"}
}

console.log(Person.info)