const { getUserArms } = require('../../api/index')
module.exports = async (req, res) => {
  getUserArms(req.query.type , req.query.userId)
  .then(async data => {
    res.send({
      statusText: true,
      data:data.data.classes
    })
    console.log('******获取用户兵种统计成功*****')
  })
  .catch(err =>{
    console.log('******获取用户兵种统计失败*****')
    res.send({
      statusText: false
    })
  })
}