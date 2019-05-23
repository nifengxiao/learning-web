const path = require('path')
//这个配置文件，其实就是一个js文件，通过node中的模块操作，向外保留了一个配置对象
module.exports={
    entry:path.join(__dirname,'./src/main.js'),//入口，表示要使用webpack打包哪个文件
    output:{ //输出文件相关的配置
        path:path.join(__dirname,'./dist'), //指定打包号的文件输出到哪个目录中去
        filename:'budle.js' //这是指定输出的文件名称
    },
    devServer:{ //这是配置dev-server命令参数第二种形式，相对来说，这种方式麻烦一些
        open:true, //自动打开浏览器
        port:3000, //设置启动时候的运行端口
        contentBase:'src',  //指定托管的根目录
        hot:true    //启用热更新
    }
}

//当我们在控制台直接输入webpack命令执行的时候，webpack做了以下操作
//1.首先，webpack发现，我们没有给它指定入口和出口
//2.webpack就回去项目的根目录中查找配置文件
//3.通过解析执行配置文件，得到配置对象
//4.当webpack拿到配置对象后，就拿到了配置对象中，指定的入口和出口，然后进行打包构建