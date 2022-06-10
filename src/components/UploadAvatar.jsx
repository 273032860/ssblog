import React, { useState } from 'react'
import { Upload } from 'antd'
import ImgCrop from 'antd-img-crop'

function UploadAvatar() {
  const [fileList, setFileList] = useState([])

  const onChange = ({ fileList: newFileList }) => {
    
    setFileList(newFileList)
    
   
  }
 


  const onPreview = async (file) => {
    let src = file.url

    if (!src) {
      src = await new Promise((resolve) => {
        const reader = new FileReader()
        reader.readAsDataURL(file.originFileObj)

        reader.onload = () => resolve(reader.result)
      })
    }

    const image = new Image()
    image.src = src
    const imgWindow = window.open(src)
    imgWindow?.document.write(image.outerHTML)



    

  }

  const myupload = () => {

    var myHeaders = new Headers()
    myHeaders.append('token', localStorage.getItem('pckey'))

    var formdata = new FormData()
    formdata.append('img', fileList[0])

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: formdata,
      redirect: 'follow',
    }

    fetch('http://localhost:8080/upload', requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log('error', error))
  }



  return (
    <div>
      <ImgCrop rotate>
        <Upload
          action="http://localhost:8080/upload"
          customRequest={onPreview}
          listType="picture-card"
          fileList={fileList}
          headers={{ token: localStorage.getItem('pckey'),'Content-Type':'multipart/form-data' }}
          onChange={onChange}
          onPreview={onPreview}>
          {fileList.length < 1 && '+ Upload'}
        </Upload>
      </ImgCrop>
    </div>
  )
}

export default UploadAvatar
