import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import 'antd/dist/antd.css'
import Home from './pages/Home'
import AuthComponent from './components/AuthComponents'
import { useStateContext } from './contexts/ContextProvider'
import React, { useEffect } from 'react'
import {FirstPage,Twopage,ThreePage,FourPage} from './pages'
import bgjpg from './imge/bg.jpg'
import bgjpg1 from './imge/one.png'

function App () {



  const { setCurrentColor, setCurrentMode, currentMode, activeMenu, currentColor, themeSettings, setThemeSettings } = useStateContext()

  useEffect(() => {
    const currentThemeColor = localStorage.getItem('colorMode')
 
    if (currentThemeColor) {
      setCurrentColor(currentThemeColor)
    }
  }, [])



  return (
    <div 
    style={{backgroundImage:"url("+bgjpg1+")"}}
    className={currentMode ? 'dark' : 'bg-scroll bg-repeat-y h-hull bg-cover'} >
      <BrowserRouter >
        <Routes>
          {/* {配置路由} */}
          <Route path="/*" element={  
          <AuthComponent>
                <Home />
              </AuthComponent>
            }>
               <Route path='' element={<FirstPage/>}/>
               <Route path='2' element={<Twopage/>}/>
               <Route path='3' element={<ThreePage/>}/>
               <Route path='4' element={<FourPage/>}/>
            </Route>
          <Route path="/login" element={<Login />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App //最后observer包裹App
