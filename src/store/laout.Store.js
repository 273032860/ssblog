import { makeAutoObservable } from "mobx"
import { http, getToken, removeToken } from '../utils'


class LogoutStore {
  token = getToken()
   
  constructor() {//写个构造器(固定写法)
    makeAutoObservable(this)
  }
  //3.定义一个修改数据的方法
  outToken = async () => {
    // 写方法
    const res = await http.get('http://localhost:8080/user/loginout')
    this.token = ''
    window.localStorage.removeItem('userInfo')
    removeToken(this.token)
    
  }

  
}
//导出类给index实例
export { LogoutStore }