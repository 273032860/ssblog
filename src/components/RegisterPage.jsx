import React from 'react'
import { Form, Input, Button, message } from 'antd'
import { Link, useNavigate } from 'react-router-dom'
import { http } from '../utils'
import { TipMessage } from './TipMessage'

function RegisterPage() {
  const navigate = useNavigate()
  const [form] = Form.useForm()

  const onFinish = async (values) => {
    const { username, password, confirm, email, phone, nickname } = values

    const params = { username, password, nickname, email, phone }
    // console.log('Received values of form: ', values)

    const res = await http.post('/user/userregister', params)
    if (res.code === 200) {
      //跳转
      navigate('/', { replace: true })
      TipMessage('注册成功', 'success', {
        vertical: 'top',
        horizontal: 'center',
      })
    }
  }

  // const prefixSelector = <Form.Item name="prefix" noStyle></Form.Item>

  return (
    <div className="w-2/3 mt-40 ml-24 flex flex-col items-center">
      <h1 className="mb-12 ml-8 font-extrabold text-3xl   bg-clip-text text-transparent bg-gradient-to-t from-purple-700 via-yellow-500 to-teal-400">
        创建一个账号！
      </h1>
      <Form
        className="grid  grid-cols-2 gap-4 "
        form={form}
        name="register"
        onFinish={onFinish}
        scrollToFirstError>
        <Form.Item
          name="username"
          label="账 号"
          getValueFromEvent={(event) => {
            return event.target.value.replace(/[\u4E00-\u9FA5]/g, '')
          }}
          rules={[
            {
              required: true,
              message: '请输入账号名',
            },
            {
              validator: (_, value) => {
                if (value !== undefined) {
                  if (value.length > 5) {
                    return Promise.resolve()
                  } else {
                    return Promise.reject('账号长度不得小于6位!')
                  }
                } else {
                  return Promise.reject('账号不得为空!')
                }
              },
            },
          ]}>
          <Input min={6} placeholder="Username" className="rounded-xl" />
        </Form.Item>

        <Form.Item
          name="nickname"
          label="昵 称"
          rules={[
            {
              required: true,
              message: '请输入昵称',
              whitespace: true,
            },
          ]}>
          <Input placeholder="nickname" className="rounded-xl" />
        </Form.Item>

        <Form.Item
          className="col-span-2"
          name="password"
          tooltip="大于6位数"
          label={`密 \u00A0 码`}
          rules={[
            {
              required: true,
              message: '请输入密码',
            },
            {
              min: 6,
              message: '长度必须大于6位数',
            },
          ]}
          hasFeedback>
          <Input.Password placeholder="Password" className="rounded-xl" />
        </Form.Item>

        <Form.Item
          className="col-span-2"
          name="confirm"
          label="确认密码"
          dependencies={['password']}
          hasFeedback
          rules={[
            {
              required: true,
              message: '请输入密码',
            },
            {
              min: 6,
              message: '长度必须大于6位数',
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue('password') === value) {
                  return Promise.resolve()
                }

                return Promise.reject(new Error('2次密码结果不相同！'))
              },
            }),
          ]}>
          <Input.Password
            placeholder="confirm password"
            className="rounded-xl"
          />
        </Form.Item>

        <Form.Item
          name="phone"
          label="手 机"
          rules={[
            {
              required: true,
              message: '请输入手机号',
            },
            {
              len: 11,
              message: '请正确输入手机号',
            },
          ]}>
          <Input
            className="rounded-xl"
            style={{
              width: '100%',
            }}
            placeholder="phone"
          />
        </Form.Item>

        <Form.Item
          name="email"
          label="E-mail"
          rules={[
            {
              type: 'email',
              message: 'The input is not valid E-mail!',
            },
            {
              required: true,
              message: 'Please input your E-mail!',
            },
          ]}>
          <Input placeholder="Email" className="rounded-xl" />
        </Form.Item>

        <Form.Item className="justify-self-center">
          <Button
            type="primary"
            htmlType="submit"
            className="rounded-xl bg-gradient-to-r from-green-600 via-sky-500 to-purple-500">
            注册提交
          </Button>
        </Form.Item>
        <div className="justify-self-center">
          <a
            class="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
            href="#">
            忘记密码?
          </a>
        </div>
      </Form>
      <div class="text-center">
        <Link
          data-bs-dismiss="offcanvas"
          aria-label="Close"
          class="inline-block text-base text-blue-500 align-baseline hover:text-blue-800 mt-3"
          to="./">
          已有一个账号? 登录!
        </Link>
      </div>
    </div>
  )
}

export default RegisterPage
