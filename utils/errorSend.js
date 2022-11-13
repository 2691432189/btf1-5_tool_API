module.exports = function (res , req , mark) {
  res.send({
    statusText:false
  })
  console.log(`******标记${req.query.userId}为${mark}失败*****`)
}