import React, { useEffect, useState, useRef } from 'react'
import { observer } from 'mobx-react-lite' //导入中间件
import { styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import MuiDrawer from '@mui/material/Drawer'
import List from '@mui/material/List'
import Divider from '@mui/material/Divider'
import IconButton from '@mui/material/IconButton'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import EditIcon from '@mui/icons-material/Edit'
import ListItemText from '@mui/material/ListItemText'
import InboxIcon from '@mui/icons-material/MoveToInbox'
import AutoAwesomeSharp from '@mui/icons-material/AutoAwesomeSharp'
import MailIcon from '@mui/icons-material/Mail'
import Tooltip from '@mui/material/Tooltip'
import { useStateContext } from '../contexts/ContextProvider'
import FirstPage from './FirstPage'
import { Outlet, Link } from 'react-router-dom'
import { Header } from '../components'
import { OpenIconSpeedDial } from '../components'
import Twopage from './Twopage'

const drawerWidth = 260

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
})

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(8)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
})

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  color: '#FAFBFB',
  ...theme.mixins.toolbar,
}))

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: 'nowrap',
  boxSizing: 'border-box',
  ...(open && {
    ...openedMixin(theme),
    '& .MuiDrawer-paper': openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    '& .MuiDrawer-paper': closedMixin(theme),
  }),
}))

function Home() {
  const { setColor, setMode, currentMode, currentColor, setThemeSettings } =
    useStateContext()

  // const theme = useTheme()
  const [open, setOpen] = React.useState(false)

  const handleDrawerClose = () => {
    setOpen(!open)
  }

  const [hstate,sethstate] = useState(true)
  const handlehidden=()=>{
    sethstate(!hstate)
  }

  const menu = [
    { tt: '热门文章', isActive: false, name: '热门', id: '' },
    { tt: '写博客', isActive: false, name: '写博客', id: '2' },
    { tt: '未发布', isActive: false, name: '草稿', id: '3' },
    { tt: '个人信息', isActive: false, name: '个人信息', id: '4' },
  ]

  const [menulist, setmenulist] = React.useState([
    { tt: '热门文章', isActive: false, name: '热门', id: '' },
    { tt: '写博客', isActive: false, name: '写博客', id: '2' },
    { tt: '未发布', isActive: false, name: '草稿', id: '3' },
    { tt: '个人信息', isActive: false, name: '个人信息', id: '4' },
  ])

  let domRef = useRef([
    React.createRef(),
    React.createRef(),
    React.createRef(),
    React.createRef(),
  ])
  const handClick = (index) => {
    const mid = domRef.current[index].current.getAttribute('id')
    const newmenulist = menu.map((item) => {
      if (item.tt === mid) {
        return Object.assign({}, item, {
          isActive: true, //需要更新的字段
        })
      }
      return item
    })
    setmenulist(newmenulist)
  }
console.log(hstate)
  return (
    <div>
      <Header open={open} handlehidden={handlehidden} />
      <OpenIconSpeedDial />
      <Box color="primary.main" className={hstate&&'hidden'}>
        <Drawer
          variant="permanent"
          open={open}
          className="shadow-xl "
          sx={{
            '& .MuiDrawer-paper': {
              backgroundColor: currentMode ? '#33373E' : '#4B2FB8',
              color: currentMode ? '#FFFFFF' : '',
            },
          }}>
          <DrawerHeader>
            <div className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 via-fuchsia-500 to-lime-400 pr-20 font-extrabold animate-pulse text-xl">
              S Y H
            </div>
            <IconButton
              onClick={handleDrawerClose}
              className="hover:animate-bounce">
              {open ? (
                <ChevronLeftIcon style={{ color: currentColor }} />
              ) : (
                <ChevronRightIcon style={{ color: currentColor }} />
              )}
            </IconButton>
          </DrawerHeader>
          <Divider className="-pt-2" />
          <List>
            {menulist.map((text, index) => (
              <div
                id={text.tt}
                onClick={() => handClick(index)}
                ref={domRef.current[index]}>
                <Link to={`/${text.id}`}>
                  <ListItem
                    key={text.tt}
                    disablePadding
                    sx={{ display: 'block' }}>
                    <ListItemButton
                      className="rounded-lg mx-3"
                      value={text.tt}
                      style={{
                        backgroundColor: text.isActive ? currentColor : '',
                      }}
                      sx={{
                        minHeight: 48,
                        justifyContent: open ? 'initial' : 'center',
                        px: 2.5,
                      }}>
                      <ListItemIcon
                        id={text.tt}
                        selected={true}
                        sx={{
                          minWidth: 0,
                          mr: open ? 3 : 'auto',
                          justifyContent: 'center',
                          color: currentMode ? '#20232A' : '',
                          color: currentMode || text.isActive ? '#FFFFFF' : '',
                        }}>
                        <Tooltip title={text.name} arrow placement="right">
                          {index === 0 ? (
                            <AutoAwesomeSharp />
                          ) : index === 1 ? (
                            <EditIcon />
                          ) : index === 2 ? (
                            <MailIcon />
                          ) : (
                            <InboxIcon />
                          )}
                        </Tooltip>
                      </ListItemIcon>
                      <ListItemText
                        value={text.tt}
                        primary={text.tt}
                        sx={{
                          opacity: open ? 1 : 0,
                          color: currentMode || text.isActive ? '#FFFFFF' : '',
                        }}
                      />
                    </ListItemButton>
                  </ListItem>
                </Link>
              </div>
            ))}
          </List>
        </Drawer>
      </Box>
      <Outlet />
    </div>
  )
}
export default observer(Home)
