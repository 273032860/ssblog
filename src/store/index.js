import React, { createContext } from 'react'
import { LoginStore } from './login.Store'
import { LogoutStore } from './laout.Store'
import { ColorStore } from './color.Store'

class RootStore {
  constructor() {
    //导出位

    this.loginStore = new LoginStore()
    this.logoutStore = new LogoutStore()
    this.colorStore = new ColorStore()
    
  }
}
//实例化根store
const rootStore = new RootStore()
const context = React.createContext(rootStore)
const useStore = () => React.useContext(context)
export default useStore 