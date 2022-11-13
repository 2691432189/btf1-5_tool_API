const { User } = require('../../mongodb/index')
const Interceptor = require('./../../utils/Interceptor')
const errorSend = require('../../utils/errorSend')
const SuspiciousInterceptor = new Interceptor()
module.exports = async (req, res) => {
  if (!SuspiciousInterceptor.hasInterceptor(req.ip,req.query.userId)) {
    let user = await User.findOne({userId: req.query.userId})
    // 判断数据库中是否存在该用户
    if (user !== null) {
      // 更新该用户被标记可疑的次数
      await  User.updateOne({_id:user._id}, {suspicious: user.suspicious + 1})
      res.send({
        statusText: true,
        suspicious: user.suspicious + 1
      })
      SuspiciousInterceptor.setInterceptor(req.ip,req.query.userId)
      console.log(`******标记${req.query.userId}为可疑成功*****`)
    } else {
      errorSend(res, req , '可疑')
    }
  }else {
    errorSend(res, req , '可疑')
  }
}