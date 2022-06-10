import Snackbar from '@mui/material/Snackbar'
import Alert from '@mui/material/Alert'
import { createRoot } from 'react-dom/client'
import React, { useState } from 'react'
// import ReactDOM from 'react-dom/client'

export function TipMessage(message, type, anchorOrigin) {
  const container = document.createElement('div')
  const root = createRoot(container)
  root.render(
    <TipAlert
      message={message}
      duration={2000}
      type={type}
      anchorOrigin={anchorOrigin}
    />
  )
  document.body.appendChild(container)

  // const  container=ReactDOM.createRoot(document.)
  //  //创建一个dom
  //  const container = document.createElement('div')
  //  //包装组件
  //   const Jdom = (<TipAlert
  //         message={message}
  //         duration={duration}
  //         type={type}
  //         anchorOrigin={anchorOrigin}
  //       />)
  //       //渲染dom
  //       ReactDOM.render(Jdom,container)
  //       //放入boby下
  //       document.body.appendChild(container)
}

function TipAlert(props) {
  const [open, setOpen] = useState(true)

  return (
    <>
      <Snackbar
        sx={{ width: '100%' }}
        open={open}
        onClose={() => setOpen(false)}
        anchorOrigin={props.anchorOrigin}
        autoHideDuration={props.duration}>
        <Alert severity={props.type}>{props.message} </Alert>
      </Snackbar>
    </>
  )
}
