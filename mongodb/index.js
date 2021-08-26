// 数据库操作
const mongoose = require('mongoose')
// 模型规则类
const { Schema } = mongoose
// 用户集合规则
const UsersSchema = new Schema({
	// 昵称
	userId: {
		type: String,
		required: true,
        unique: true
	},
    // 浏览次数
    views: {
		type: Number,
        default: 1
	},
    // 确认
    confirm: {
		type: Number,
        default: 0
	},
    // 可疑
    suspicious: {
		type: Number,
        default: 0
	}
}, { versionKey: false })

// 用户集合类
const User = mongoose.model('User', UsersSchema)

// 导出对象
module.exports = {
	User
}