import { makeAutoObservable } from "mobx"
import { http, getToken, setToken, setUserInfo } from '../utils'


class LoginStore {
  token = getToken() || ''

  constructor() {//写个构造器(固定写法)
    makeAutoObservable(this)
  }
  //3.定义一个修改数据的方法
  getToken = async ({ username, password }) => {
    // 写方法
    const res = await http.post('http://localhost:8080/user/login', {
      username, password
    })
    // console.log(res.data.token,res.data.userinfo)
    this.token = res.data.token
    setToken(this.token)
    // this.userinfo = res.data.userinfo


    localStorage.setItem('userInfo', JSON.stringify(res.data.userInfo))
    
    // setUserInfo(res.data.userinfo)

  }
}
//导出类给index实例
export { LoginStore }