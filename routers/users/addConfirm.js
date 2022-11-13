const { User } = require('../../mongodb/index')
const Interceptor = require('./../../utils/Interceptor')
const errorSend = require('../../utils/errorSend')
const ConfirmInterceptor = new Interceptor()
module.exports = async (req, res) => {
  if (!ConfirmInterceptor.hasInterceptor(req.ip,req.query.userId)) {
    let user = await User.findOne({userId: req.query.userId})
    // 判断数据库中是否存在该用户
    if (user !== null) {
      // 更新该用户被标记确认的次数
      await  User.updateOne({_id:user._id}, {confirm: user.confirm + 1})
      res.send({
        statusText:true,
        confirm: user.confirm + 1
      })
      ConfirmInterceptor.setInterceptor(req.ip,req.query.userId)
      console.log(`******标记${req.query.userId}为确认成功*****`)
    } else {
      errorSend(res, req , '确认')
    }
  }else {
    errorSend(res, req , '确认')
  }
  
}