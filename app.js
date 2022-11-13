// 引入express框架
const express = require('express')
// 引入路径处理模块
const path = require('path')
// 引入数据库处理模块
const mongoose = require('mongoose')
const app = express()
// 处理跨域
const cors = require('cors')
app.use(cors())
// 开放静态资源
app.use(express.static(path.join(__dirname, 'public')))
// 数据库连接
mongoose.connect('mongodb://btf:btf@localhost:27017/battlefield1-5_recordquerytool', { useUnifiedTopology: true ,useNewUrlParser: true })
	.then(() => console.log('数据库连接成功'))
	.catch(() => console.log('数据库连接失败'))
mongoose.set('useCreateIndex', true)
// 挂载用户相关二级路由
app.use('/user',require('./routers/user.js'))


// 配置端口
app.listen(8081, function () {
  console.log("应用实例，访问地址为", 'localhost:8081')
})