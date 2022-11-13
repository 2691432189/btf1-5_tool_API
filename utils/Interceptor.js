 module.exports = class Interceptor {
  constructor() {
    this.InterceptorArr = new Map()
  }
  setInterceptor(ip,userId) {
    if (this.InterceptorArr.has(ip)) {
      this.InterceptorArr.get(ip).push(userId)
    } else {
      this.InterceptorArr.set(ip,[userId])
    }
    setTimeout(() => {
      this.InterceptorArr.get(ip).splice(this.InterceptorArr.get(ip).findIndex(item => item === userId), 1)
      console.log(ip,userId)
    }, 50000 )
  }
  hasInterceptor(ip,userId) {
    if (this.InterceptorArr.has(ip) && this.InterceptorArr.get(ip).some((item) => {return userId === item})) {
      return true
    } else {
      console.log(2222)
      return false
    }
  }
}
