// 用户路由
const user = require('express').Router()
// 获取用户详情
user.get('/getUserInfo', require('./users/getUserInfo'))
// 标记为可疑
user.get('/addSuspicious', require('./users/addSuspicious'))
// 标记为确认
user.get('/addConfirm', require('./users/addConfirm'))
// 获取用户武器信息
user.get('/getUserWeapons', require('./users/getUserWeapons'))
// 获取用户载具信息
user.get('/getUserVehicles', require('./users/getUserVehicles'))
//获取用户兵种统计信息
user.get('/getUserArms', require('./users/getUserArms'))
module.exports = user
