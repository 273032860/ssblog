import { TimerSharp } from "@mui/icons-material"
import { makeAutoObservable } from "mobx"

class ColorStore {

  sscolor = window.localStorage.getItem('colorMode')

  constructor() {//写个构造器(固定写法)
    makeAutoObservable(this)
  }
  //3.定义一个修改数据的方法
  setColor1 = (color) => {//设置颜色的函数，调用就放入localStorage
    localStorage.setItem('colorMode', color)
    this.sscolor = color
    // 写方法


  }


}
//导出类给index实例
export { ColorStore }