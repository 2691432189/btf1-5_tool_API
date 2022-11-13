const axios = require('axios')
axios.defaults.baseURL = 'https://api.gametools.network'
module.exports = {
  // 获取用户详细信息
  getUserInfo (type,id) {
   return axios.get(`/${ type === '1' ? 'bf1' : 'bfv' }/stats/?name=${id}&lang=zh-tw`)
  },
  // 获取用户武器信息
  getUserWeapons(type,id) {
   return axios.get(`${ type === '1' ? 'bf1' : 'bfv' }/weapons/?name=${id}&lang=zh-tw`)
  },
  // 获取用户载具信息
  getUserVehicles(type,id) {
   return axios.get(`${ type === '1' ? 'bf1' : 'bfv' }/vehicles/?name=${id}&lang=zh-tw`)
  },
  //获取用户兵种统计信息
  getUserArms(type,id){
    return axios.get(`${ type === '1' ? 'bf1' : 'bfv' }/classes/?name=${id}&lang=zh-tw`)
  },
  //获取用户战排信息
  getUserBattlePlatoon(type,id){
    return axios.get(`${ type === '1' ? 'bf1' : 'bfv' }/all/?name=${id}&lang=zh-tw`)
  }
}