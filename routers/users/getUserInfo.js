const { User } = require('../../mongodb/index')
const { getUserInfo } = require('../../api/index')
module.exports = async (req, res) => { 
  // 获取用户的官方信息
  getUserInfo(req.query.type , req.query.userId)
    .then(async data => {
      let user = await User.findOne({userId: req.query.userId})
      // 判断数据库中是否存在该用户
      if (user === null) {
        // 创建用户信息
        User.create({
          userId: req.query.userId
        })
      } else {
        // 更新该用户被浏览的次数
        await  User.updateOne({_id:user._id}, {views: user.views + 1})
      }
      
      const userDetails = {
        localData: {...user._doc,avatar:data.data.avatar},
        OfficialData: data.data,
        statusText: true
      }
      res.send(userDetails)
      console.log('******获取用户信息成功*****')
    })
    .catch(err =>{
      res.send({
        statusText: false
      })
      console.log('******获取用户信息失败*****')
    })
}