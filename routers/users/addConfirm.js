const { User } = require('../../mongodb/index')
module.exports = async (req, res) => {
  let user = await User.findOne({userId: req.query.userId})
  // 判断数据库中是否存在该用户
  if (user !== null) {
    // 更新该用户被标记确认的次数
    await  User.updateOne({_id:user._id}, {confirm: user.confirm + 1})
    res.send({
      statusText:true,
      confirm: user.confirm + 1
    })
    console.log(`******标记${req.query.userId}为确认成功*****`)
  } else {
    res.send({
      statusText:false
    })
    console.log(`******标记${req.query.userId}为确认失败*****`)
  }
}