import { ContactPageSharp } from '@mui/icons-material'
import { wait } from '@testing-library/user-event/dist/utils'
import React, { createContext, useContext, useState } from 'react';

const StateContext = createContext();




export const ContextProvider = ({ children }) => {
  const [screenSize, setScreenSize] = useState(undefined);//
  const [currentColor, setCurrentColor] = useState('#03C9D7');//初始颜色
  const [currentMode, setCurrentMode] = useState(false);//初始主题
  const [themeSettings, setThemeSettings] = useState(true);//设置开关
  const [activeMenu, setActiveMenu] = useState(true);//菜单展开
  

  const setMode = (mode) => {//设置主题模式的函数，调用就放入localStorage

    setCurrentMode(!mode);
    // localStorage.setItem('themeMode', mode);
  };

  const setColor = (color) => {//设置颜色的函数，调用就放入localStorage
    setCurrentColor(color);
    localStorage.setItem('colorMode', color);
  };

  // const handleClick = (clicked) => setIsClicked({ ...initialState, [clicked]: true });//头部按钮的click事件，传按钮名就true

  return (
    //把所有变量装入StateContext.Provider 标签{chlidren}
    <StateContext.Provider value={{ currentColor, currentMode, activeMenu, screenSize, setScreenSize, setActiveMenu, setCurrentColor, setCurrentMode, setMode, setColor, themeSettings, setThemeSettings }}>
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
