import React from 'react'
import Button from '@mui/material/Button'
import { SnackbarProvider, useSnackbar } from 'notistack'

function MyApp() {
  const { enqueueSnackbar } = useSnackbar()


  const handleClickVariant = (variant) => () => {
    // variant could be success, error, warning, info, or default
    enqueueSnackbar('This is a success message!', { variant }) //通知的内容
  }

  return (
    <React.Fragment>
      <Button onClick={handleClickVariant('success')}>
        Show success snackbar
      </Button>
    </React.Fragment>
  )
}

export default function Myalart() {
  return (
    <SnackbarProvider
      maxSnack={3} //连续最大条数
      autoHideDuration={2000} //调节1秒时间，自动关闭
      anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}> //调节位置
      <MyApp />
    </SnackbarProvider>
  )
}