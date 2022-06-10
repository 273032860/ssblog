import React, { useState, useRef } from 'react'
import { InboxOutlined, UploadOutlined } from '@ant-design/icons'
import { Button, Form, Radio, Row, Select, Input, Checkbox } from 'antd'
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons'
import { message, Upload } from 'antd'
import { http } from '../utils'
import { TipMessage } from './TipMessage'
import { useNavigate } from 'react-router-dom'

// const getBase64 = (img, callback) => {
//   const reader = new FileReader()
//   reader.addEventListener('load', () => callback(reader.result))
//   reader.readAsDataURL(img)
// }

const beforeUpload = (file) => {
  const isJpgOrPng = file.type === 'image/png'

  if (!isJpgOrPng) {
    message.error('只能上传PNG文件!')
  }

  return isJpgOrPng
}

const { Option } = Select
const formItemLayout = {
  labelCol: {
    span: 6,
  },
  wrapperCol: {
    span: 14,
  },
}

const an = {

}

function FormC() {

  const fabuid = JSON.parse(localStorage.getItem('userInfo')).id
  const fabumail = JSON.parse(localStorage.getItem('userInfo')).email
  const fabuavatar = JSON.parse(localStorage.getItem('userInfo')).avatar
  const fabunickname = JSON.parse(localStorage.getItem('userInfo')).nickname
 
  const onFinish = async (values) => {
    const params = {
      category_id: values.category_id,
      content: values.content,
      is_top: values.is_top,
      status: values.status,
      title: values.title,
      thumbnail: imageUrl,
      create_by:fabuid,
      email:fabumail,
      avatar:fabuavatar,
      nickname:fabunickname,

    }
    const res = await http.post('/article/savearticle', params)
    if (res.code === 200) {
      //跳转
      navigate('/2')
      TipMessage('提交成功', 'success', {
        vertical: 'top',
        horizontal: 'center',
      })
      clear.current.resetFields()
      clear2.current.resetFields() //TODO
    }
  }

  const [loading, setLoading] = useState(false)
  const [imageUrl, setImageUrl] = useState()
  const navigate = useNavigate()
  const clear = useRef()
  const clear2 = useRef()

  const handleChange = (info) => {
    if (info.file.status === 'uploading') {
      setLoading(true)

      var myHeaders = new Headers()
      myHeaders.append('token', localStorage.getItem('pckey'))

      var formdata = new FormData()
      formdata.append('img', info.file.originFileObj)

      var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: formdata,
        redirect: 'follow',
      }

      fetch('http://localhost:8080/upload', requestOptions)
        .then((response) => response.text())
        .then((result) => {
          const data = JSON.parse(result)
          if (data.code === 200 && data.msg === '操作成功') {
            info.file.status = 'done'
            setImageUrl(data.data)
            return
          }
        })

        .catch((error) => console.log('error', error))
      return
    }

    // if (info.file.status === 'done') {
    //   // Get this url from response in real world.
    //   getBase64(info.file.originFileObj, (url) => {
    //     // setLoading(false)

    //     setImageUrl(url)
    //   })
    // }
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
    <div className='[&:nth-child(2)]:text-white'>
      <h1 className='text-center text-5xl'>122</h1>

      <Form
        ref={clear}
        className="flex flex-col "
        name="validate_other"
        {...formItemLayout}
        onFinish={onFinish}
        initialValues={{
          'input-number': 3,
          'checkbox-group': ['A', 'B'],
          rate: 3.5,
        }}>
        {/*表单名称*/}
        {/* <Form.Item label="1">
          <span className="ant-form-text">China</span>
        </Form.Item> */}
        {/* 标题 */}
        <Form.Item
        className=''
          label="标题"
          name="title"
          rules={[
            {
              required: true,
              message: '请输入标题!',
            },
          ]}>
          <Input placeholder="输入标题" id="title" />
        </Form.Item>
        {/* 下拉框 */}
        <Form.Item
          name="category_id"
          label="分类"
          // hasFeedback
          rules={[
            {
              required: true,
              message: '请选择分类!',
            },
          ]}>
          <Select placeholder="Please select a country">
            <Option value="1">Javascript</Option>
            <Option value="2">Java</Option>
            <Option value="3">Python</Option>
            <Option value="4">Web3.0</Option>
            <Option value="5">元宇宙</Option>
          </Select>
        </Form.Item>
        {/* 多选一圆圈 */}
        <Form.Item
          name="is_top"
          label="是否置顶"
          rules={[
            {
              required: true,
              message: '必选',
            },
          ]}>
          <Radio.Group>
            <Radio value="0">否</Radio>
            <Radio value="1">是</Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item
          name="status"
          label="Radio.Group"
          rules={[
            {
              required: true,
              message: '必选',
            },
          ]}>
          <Radio.Group>
            <Radio value="0">发布</Radio>
            <Radio value="1">暂存至草稿</Radio>
          </Radio.Group>
        </Form.Item>
        {/* 复选框 */}
        {/* <Form.Item name="radio-group" label="是否置顶">
          <Checkbox>Checkbox</Checkbox>
        </Form.Item>

        <Form.Item name="radio-group" label="Checkbox">
          <Checkbox>Checkbox</Checkbox>
        </Form.Item> */}
        {/* 图片上传 */}

        {/* <Form.Item
          name="thumbnail"
          label="上传图片"
          valuePropName="fileList"
          // getValueFromEvent={normFile}
          // extra="long"
        > */}

        {/* <Upload  maxCount={1} name="logo" listType="picture" onRemove={onRemove} >
            <Button icon={<UploadOutlined />}>Click to upload</Button>
          </Upload> */}
        <div 
        ref={clear2}
        key="ImgKey">
          <Upload
            
            name="avatar"
            listType="picture-card"
            className="avatar-uploader translate-x-80"
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
        {/* </Form.Item> */}

        {/* 文本框 */}
        <Form.Item
      
        
          rules={[
            {
              required: true,
              message: '请输入内容!',
            },
          ]}
          name="content"
          label="内容"
          // validateStatus="error"
          // hasFeedback
          // help="请输入内容"
        >
          <Input.TextArea allowClear showCount rows={10}/>
        </Form.Item>
        <Form.Item
          wrapperCol={{
            span: 12,
            offset: 6,
          }}>
          <Button type="primary" htmlType="submit">
            提 交
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}

export default FormC
