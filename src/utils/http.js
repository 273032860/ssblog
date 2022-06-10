// 封装axios
// 实例化  请求拦截器 响应拦截器
// import { message } from 'antd'
import { message } from 'antd'
// import message from '../components/Message'
import axios from 'axios'
import { getToken } from './token'
import { history } from './history'
import {TipMessage} from '../components/TipMessage'

const http = axios.create({
  baseURL: 'http://localhost:8080/',
  timeout: 5000
})
// 添加请求拦截器
http.interceptors.request.use((config) => {
  // if not login add token
  const token = getToken()
  // console.log(token)
  if (token) {
    config.headers.token = `${token}`
  }
  return config
}, (error) => {
  return Promise.reject(error)
})

// 添加响应拦截器
http.interceptors.response.use((response) => {
     


  //不等于200的处理
  if (response.data.code !== 200) {
    TipMessage(response.data.msg,'error',{
      vertical: 'top',
      horizontal: 'center',
    }) 
  }
 
  if(response.data.code ===401){
    TipMessage("token过期",'error',{
      vertical: 'top',
      horizontal: 'center',
    })
    localStorage.removeItem('pckey')
    localStorage.removeItem('userInfo')
     history.push('/Login')   //401没权限跳转到登录
  }

return response.data

}, (error) => {
  console.log("401了")
  TipMessage(error.response.msg,'error',{
    vertical: 'top',
    horizontal: 'center',
  })
  if (error.response.data.code === 401) {
    console.log("401了")
    localStorage.removeItem('pckey')
    localStorage.removeItem('userInfo')
    history.push('/login')   //401没权限跳转到登录
    
    return Promise.reject(error)
  }

  return Promise.reject(error)
})

export { http }