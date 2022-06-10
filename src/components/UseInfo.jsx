import * as React from 'react'
import List from '@mui/material/List'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItem from '@mui/material/ListItem'
import Avatar from '@mui/material/Avatar'
import Divider from '@mui/material/Divider'
import { deepOrange } from '@mui/material/colors'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import Close from '@mui/icons-material/Close'
import Tooltip from '@mui/material/Tooltip'
import { useStateContext } from '../contexts/ContextProvider'
import { RiCloseCircleLine } from 'react-icons/ri'
import { UploadAvatar } from '../components'
import Avatarlist from './Avatarlist'

export default function UseInfo({ On_Off, outinfo, useinfo }) {

  const { setColor, setMode, currentMode, currentColor, setThemeSettings } =
    useStateContext()

  const [open, setOpen] = React.useState(true)

  const handleClick = () => {
    setOpen(!open)
  }

  const [first, setfirst] = React.useState(false)

  const ss = () => {
    setfirst(!first)
  }
  const [color, setcolor] = React.useState(currentColor)

  return (
    <List
      className="dark:bg-secondary-dark-bg shadow-xl rounded-lg "
      sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
      component="nav"
      aria-labelledby="nested-list-subheader">
      <div className="flex justify-between items-center mx-4 pt-8">
        <h1 className={`text-xl font-medium text-[${currentColor}]`}>
          个人信息
        </h1>
        <IconButton aria-label="delete" onClick={On_Off}>
          <RiCloseCircleLine
            className="text-3xl"
            style={{ color: currentColor }}
          />
        </IconButton>
      </div>

      <ListItem disablePadding>
        <ListItem className="flex gap-5 mb-3 my-3">
          <ListItemIcon onClick={ss}>
            {/* <Tooltip
              title="点击更换头像"
              placement="right"
              arrow
              open={true}
              followCursor> */}
            {/* {(useinfo.avatar !== undefined) ? (
              <Avatar alt="" src={useinfo.avatar} 
              className="group relative hover:cursor-pointer "
              data-bs-toggle="modal"
                data-bs-target="#exampleModalCenter"
              
              />
            ) : ( */}
             <Tooltip
          title="点击更换头像"
          placement="bottom"
          className="hover:cursor-pointer">
            <Avatar
              data-bs-toggle="modal"
              data-bs-target="#exampleModalCenter"
              className="group relative hover:cursor-pointer "
              sx={{ width: 80, height: 80 }}
              src={useinfo.avatar !== undefined && useinfo.avatar}>
              <span className="group-hover:hidden ">
                {useinfo.username[0].toUpperCase()}
              </span>
              <span className="group-hover:visible invisible   absolute ">
                更换头像
              </span>
            </Avatar>

            </Tooltip>
            {/* ) */}
            {/* } */}

            {/* <Avatar
              data-bs-toggle="modal"
              data-bs-target="#exampleModalCenter"
              className="group relative hover:cursor-pointer "
              sx={{ width: 80, height: 80 }}>
              <span className="group-hover:hidden ">
                {useinfo.username[0].toUpperCase()}
              </span>

              <span className="group-hover:visible invisible   absolute ">
                更换头像
              </span>
            </Avatar> */}
            <Avatarlist />
            {/* </Tooltip> */}
          </ListItemIcon>
          <div className="space-y-2">
            <div className="text-xl font-semibold">昵称:{useinfo.nickname}</div>
            {/* <div className="text-slate-400 font-light "> Administrator</div> */}
            <div className="text-slate-500">{useinfo.email}</div>
          </div>
        </ListItem>
      </ListItem>
      <Divider />
      <ListItemButton>
        <ListItemIcon className="my-2">
          <Avatar className="rounded-lg" sx={{ bgcolor: deepOrange[500] }}>
            $
          </Avatar>
        </ListItemIcon>

        <div>
          <h1 className="font-medium text-sm">My Profile</h1>
          <span className="text-slate-400">Account Settings</span>
        </div>
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon className="my-2">
          <Avatar className="rounded-lg" sx={{ bgcolor: deepOrange[500] }}>
            $
          </Avatar>
        </ListItemIcon>
        <div>
          <h1 className="font-medium text-sm">My Profile</h1>
          <span className="text-slate-400">Account Settings</span>
        </div>
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon className="my-4">
          <Avatar className="rounded-lg" sx={{ bgcolor: deepOrange[500] }}>
            $
          </Avatar>
        </ListItemIcon>
        <div>
          <h1 className="font-medium text-sm">My Profile</h1>
          <span className="text-slate-400">Account Settings</span>
        </div>
      </ListItemButton>
      <ListItem>
        <Button
          style={{ backgroundColor: currentColor }}
          onClick={outinfo}
          className={`bg-cyan-500 w-80 h-12 rounded-lg tracking-widest `}
          variant="contained">
          退 出
        </Button>
      </ListItem>
    </List>
  )
}
