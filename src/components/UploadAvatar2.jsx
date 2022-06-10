import React, { useState } from 'react'
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons'
import { message, Upload } from 'antd'

const getBase64 = (img, callback) => {
  const reader = new FileReader()
  reader.addEventListener('load', () => callback(reader.result))
  reader.readAsDataURL(img)
}

const beforeUpload = (file) => {
  const isJpgOrPng = file.type === 'image/png'

  if (!isJpgOrPng) {
    message.error('只能上传PNG文件!')
  }

  const isLt2M = file.size / 1024 / 1024 < 2

  if (!isLt2M) {
    message.error('图片不能大于2MB!')
  }

  return isJpgOrPng && isLt2M
}

function UploadAvatar2() {
  const [loading, setLoading] = useState(false)
  const [imageUrl, setImageUrl] = useState()

  const handleChange = (info) => {
    if (info.file.status === 'uploading') {
      setLoading(true)


      var myHeaders = new Headers();
      myHeaders.append("token", localStorage.getItem('pckey'));
      
      var formdata = new FormData();
      formdata.append("img", info.file.originFileObj);
      
      var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: formdata,
        redirect: 'follow'
      };
      
      fetch("http://localhost:8080/upload", requestOptions)
      .then(response => response.text())
      .then(result => {
        const data = JSON.parse(result) 
        if(data.code===200 && data.msg==="操作成功"){
          //把地址放入userinfo
          localStorage.setItem('imgurl',data.data)
          
        }
      
      } )
         
        .catch(error => console.log('error', error));



      return
    }

    if (info.file.status === 'done') {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj, (url) => {
        setLoading(false)
        setImageUrl(url)
      })
    }
  }

  const uploadButton = (
    <div>
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div
        style={{
          marginTop: 8,
        }}>
        Upload
      </div>
    </div>
  )

  return (
    <div>
      <Upload
        name="avatar"
        listType="picture-card"
        className="avatar-uploader"
        showUploadList={false}
        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
        beforeUpload={beforeUpload}
        onChange={handleChange}>
        {imageUrl ? (
          <img
            src={imageUrl}
            alt="avatar"
            style={{
              width: '100%',
            }}
          />
        ) : (
          uploadButton
        )}
      </Upload>
    </div>
  )
}
export default UploadAvatar2
