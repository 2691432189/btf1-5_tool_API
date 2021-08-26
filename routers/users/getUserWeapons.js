const { getUserWeapons } = require('../../api/index')
module.exports = async (req, res) => {
  getUserWeapons(req.query.type , req.query.userId)
  .then(async data => {
    res.send({
      statusText: true,
      data:data.data.weapons
    })
    console.log('******获取用户武器信息成功*****')
  })
  .catch(err =>{
    console.log('******获取用户武器信息失败*****')
    res.send({
      statusText: false
    })
  })
}