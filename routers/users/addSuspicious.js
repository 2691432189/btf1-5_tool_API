const { User } = require('../../mongodb/index')
module.exports = async (req, res) => {
  let user = await User.findOne({userId: req.query.userId})
  // 判断数据库中是否存在该用户
  if (user !== null) {
    // 更新该用户被标记可疑的次数
    await  User.updateOne({_id:user._id}, {suspicious: user.suspicious + 1})
    res.send({
      statusText: true,
      suspicious: user.suspicious + 1
    })
    console.log(`******标记${req.query.userId}为可疑成功*****`)
  } else {
    res.send({
      statusText:false
    })
    console.log(`******标记${req.query.userId}为可疑失败*****`)
  }
}