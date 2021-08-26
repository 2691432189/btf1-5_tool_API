const { getUserVehicles } = require('../../api/index')
module.exports = async (req, res) => {
  getUserVehicles(req.query.type , req.query.userId)
  .then(async data => {
    res.send({
      statusText: true,
      data:data.data.vehicles
    })
    console.log('******获取用户载具信息成功*****')
  })
  .catch(err =>{
    console.log('******获取用户载具信息失败*****')
    res.send({
      statusText: false
    })
  })
}