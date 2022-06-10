import * as React from 'react'
import Box from '@mui/material/Box'
import SpeedDial from '@mui/material/SpeedDial'
import SpeedDialAction from '@mui/material/SpeedDialAction'
import EditIcon from '@mui/icons-material/Edit'
import Brightness1 from '@mui/icons-material/Brightness1'
import Settings from '@mui/icons-material/Settings'
import { useStateContext } from '../contexts/ContextProvider'
import { styled } from "@mui/material/styles";
import SpeedDialIcon from '@mui/material/SpeedDialIcon';




// const MuiSpeedDial = styled(SpeedDial)(({ theme }) => ({
//   '& .MuiSwitch-root': {
//     backgroundColor: '#03C9D7',}
//   }))



const actions = [
  {
    icon: <Brightness1 className="  text-[#1A97F5] text-4xl" />,
    name: '蓝色',
    color: '#1A97F5',
  },
  {
    icon: <Brightness1 className="text-[#03C9D7] text-4xl" />,
    name: '青绿色',
    color: '#03C9D7',
  },
  {
    icon: <Brightness1 className="text-[#7352FF] text-4xl" />,
    name: '紫色',
    color: '#7352FF',
  },
  {
    icon: <Brightness1 className="text-[#FF5C8E] text-4xl" />,
    name: '粉色',
    color: '#FF5C8E',
  },
  {
    icon: <Brightness1 className="text-[#1E4DB7] text-4xl" />,
    name: '靛蓝',
    color: '#1E4DB7',
  },
  {
    icon: <Brightness1 className="text-[#FB9678] text-4xl" />,
    name: '橘色',
    color: '#FB9678',
  },
]

export default function OpenIconSpeedDial() {
  const setcolor = (a) => {
    setColor(a)
  }

  const { setColor, setMode, currentMode, currentColor, setThemeSettings } =
    useStateContext()
  return (
<div className='absolute right-0 bottom-0'>
    <Box sx={{ height: 320, transform: 'translateZ(0px)', flexGrow: 1 }} >
      <SpeedDial
        ariaLabel="SpeedDial openIcon example"
        sx={{ position: 'absolute', bottom: 16, right: 10 ,color: '#03C9D7','& .MuiSpeedDial-fab':{backgroundColor:currentColor,width:45,height:45}}}
        icon={<SpeedDialIcon  openIcon={<EditIcon />}  />}>
        {actions.map((action) => (
          <SpeedDialAction
            // sx={{backgroundColor: '#03C9D7' }}
            onClick={() => setcolor(action.color)}
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
          />
        ))}
      </SpeedDial>
    </Box>
    </div>
  )
}
