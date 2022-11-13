const { getUserBattlePlatoon } = require('../../api/index')
module.exports = async (req, res) => {
  getUserBattlePlatoon(req.query.type , req.query.userId)
  .then(async data => {
    res.send({
      statusText: true,
      data:{
        activePlatoon:data.data.activePlatoon,
        platoons:data.data.platoons
      }
    })
    console.log('******获取用户战排信息成功*****')
  })
  .catch(err =>{
    console.log('******获取用户战排信息失败*****')
    res.send({
      statusText: false
    })
  })
}