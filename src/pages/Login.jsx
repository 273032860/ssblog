import React from 'react'
import { Form, Input, Button, Checkbox } from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons'
import useStore from '.././store'
import { useNavigate } from 'react-router-dom'
// import { message } from 'antd'
import { RegisterPage } from '../components'
import wwwMp4 from '../imge/www.mp4'
import { TipMessage } from '../components/TipMessage'

function Login() {
  const { loginStore } = useStore()
  const navigator = useNavigate()

  const onFinish = async (values) => {
     
    try {
      await loginStore.getToken({
        username: values.username,
        password: values.password,
        remember: values.remember,
      })
      TipMessage('登录成功!','success',{
        vertical: 'top',
        horizontal: 'center',
      })
      
      navigator('/', { replace: true })
    } catch (e) {}
  }

  return (
    <div>
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute w-1/2 h-full object-cover ">
        <source src={wwwMp4} type="video/mp4" codecs="hvc1" />
      </video>
      <div className="  h-screen  flex">
        {/*bg-gradient-to-tr from-blue-800 to-purple-700 */}
        <div className="  flex w-1/2   i justify-around items-center ">
          <div>
            <div className="text-white font-bold text-4xl font-sans relative">
              SYHBLOG
              <div className="absolute right-14 -top-5 animate-spin hover:animate-bounce">
                <svg
                  t="1654492865978"
                  class="icon "
                  viewBox="0 0 1024 1024"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  p-id="4435"
                  width="50"
                  height="50">
                  <path
                    d="M512 431.36c43.946667 0 79.786667 35.84 79.786667 80.64 0 42.666667-35.84 78.933333-79.786667 78.933333S432.213333 554.666667 432.213333 512c0-44.8 35.84-80.64 79.786667-80.64M314.453333 853.333333c26.88 16.213333 85.76-8.533333 153.6-72.533333-22.186667-25.173333-43.946667-52.48-64.426666-81.066667a968.533333 968.533333 0 0 1-102.4-15.36c-21.76 91.306667-13.653333 154.026667 13.226666 168.96m30.293334-244.906666l-12.373334-21.76c-4.693333 12.373333-9.386667 24.746667-12.373333 36.693333 11.52 2.56 24.32 4.693333 37.546667 6.826667l-12.8-21.76m279.04-32.426667l34.56-64-34.56-64c-12.8-22.613333-26.453333-42.666667-38.826667-62.72C561.92 384 537.6 384 512 384s-49.92 0-72.96 1.28c-12.373333 20.053333-26.026667 40.106667-38.826667 62.72L365.653333 512l34.56 64c12.8 22.613333 26.453333 42.666667 38.826667 62.72 23.04 1.28 47.36 1.28 72.96 1.28s49.92 0 72.96-1.28c12.373333-20.053333 26.026667-40.106667 38.826667-62.72M512 289.28c-8.106667 9.386667-16.64 19.2-25.173333 30.72h50.346666c-8.533333-11.52-17.066667-21.333333-25.173333-30.72m0 445.44c8.106667-9.386667 16.64-19.2 25.173333-30.72h-50.346666c8.533333 11.52 17.066667 21.333333 25.173333 30.72M709.12 170.666667c-26.453333-16.213333-85.333333 8.533333-153.173333 72.533333 22.186667 25.173333 43.946667 52.48 64.426666 81.066667 34.986667 3.413333 69.546667 8.533333 102.4 15.36 21.76-91.306667 13.653333-154.026667-13.653333-168.96m-29.866667 244.906666l12.373334 21.76c4.693333-12.373333 9.386667-24.746667 12.373333-36.693333-11.52-2.56-24.32-4.693333-37.546667-6.826667l12.8 21.76m61.866667-300.8c62.72 35.84 69.546667 130.133333 43.093333 240.213334 108.373333 32 186.453333 84.906667 186.453334 157.013333s-78.08 125.013333-186.453334 157.013333c26.453333 110.08 19.626667 204.373333-43.093333 240.213334-62.293333 35.84-147.2-5.12-229.12-83.2-81.92 78.08-166.826667 119.04-229.546667 83.2-62.293333-35.84-69.12-130.133333-42.666666-240.213334-108.373333-32-186.453333-84.906667-186.453334-157.013333s78.08-125.013333 186.453334-157.013333c-26.453333-110.08-19.626667-204.373333 42.666666-240.213334 62.72-35.84 147.626667 5.12 229.546667 83.2 81.92-78.08 166.826667-119.04 229.12-83.2M728.746667 512c14.506667 32 27.306667 64 37.973333 96.426667 89.6-26.88 139.946667-65.28 139.946667-96.426667s-50.346667-69.546667-139.946667-96.426667c-10.666667 32.426667-23.466667 64.426667-37.973333 96.426667M295.253333 512c-14.506667-32-27.306667-64-37.973333-96.426667-89.6 26.88-139.946667 65.28-139.946667 96.426667s50.346667 69.546667 139.946667 96.426667c10.666667-32.426667 23.466667-64.426667 37.973333-96.426667m384 96.426667l-12.8 21.76c13.226667-2.133333 26.026667-4.266667 37.546667-6.826667-2.986667-11.946667-7.68-24.32-12.373333-36.693333l-12.373334 21.76m-123.306666 172.373333c67.84 64 126.72 88.746667 153.173333 72.533333 27.306667-14.933333 35.413333-77.653333 13.653333-168.96-32.853333 6.826667-67.413333 11.946667-102.4 15.36-20.48 28.586667-42.24 55.893333-64.426666 81.066667M344.746667 415.573333l12.8-21.76c-13.226667 2.133333-26.026667 4.266667-37.546667 6.826667 2.986667 11.946667 7.68 24.32 12.373333 36.693333l12.373334-21.76m123.306666-172.373333C400.213333 179.2 341.333333 154.453333 314.453333 170.666667c-26.88 14.933333-34.986667 77.653333-13.226666 168.96a968.533333 968.533333 0 0 1 102.4-15.36c20.48-28.586667 42.24-55.893333 64.426666-81.066667z"
                    fill="#00BCD4"
                    p-id="4436"></path>
                </svg>
              </div>
            </div>

            <p className="text-white mt-1">
              The most popular peer to peer lending at SEA
            </p>
            <div></div>
          </div>
        </div>
        <div className="flex  flex-col w-1/2 justify-around-Start  justify-center items-center bg-white">
          <div className="bg-white  space-y-6  mb-8 flex flex-col  items-center ">
            <h1 className=" font-bold text-4xl mb-1 bg-clip-text text-transparent bg-gradient-to-br from-fuchsia-500 via-cyan-300 to-orange-400 hover:animate-pulse tracking-wider selection:bg-fuchsia-500 selection:text-emerald-500">
              Hello Again!
            </h1>
            <p className="text-base font-normal   pl-1 bg-clip-text text-transparent bg-gradient-to-br from-red-600 via-teal-600 to-indigo-600 hover:animate-pulse selection:bg-pink-600 selection:text-amber-300 ">
              Welcome Back
            </p>
          </div>
          <div className='relative'>
            <Form
              name="normal_login"
              className="login-form"
              initialValues={{
                remember: true,
              }}
              onFinish={onFinish}>
              <Form.Item
                name="username"
                rules={[
                  {
                    required: true,
                    message: '请输入正确的用户名！',
                  },
                ]}>
                <Input
                  className="rounded-2xl w-80 h-10"
                  prefix={<UserOutlined className="site-form-item-icon " />}
                  placeholder="Username"
                />
              </Form.Item>
              <Form.Item
                name="password"
                rules={[
                  {
                    required: true,
                    message: '请输入正确的密码!',
                  },
                ]}>
                <Input
                  className="rounded-2xl h-10"
                  prefix={<LockOutlined className="site-form-item-icon" />}
                  type="password"
                  placeholder="Password"
                />
              </Form.Item>
              <Form.Item>
                <Form.Item name="remember" valuePropName="checked" noStyle>
                  <Checkbox>记住我</Checkbox>
                </Form.Item>
              </Form.Item>

              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  className="inline-block px-6  py-2.5 rounded-lg mr-2 h-12 transition ease-in-out delay-150   hover:-translate-y-1 hover:scale-110 hover:bg-gradient-to-br  hover:ring hover:ring-cyan-300  duration-300   text-white   bg-gradient-to-bl from-yellow-500 via-sky-500 to-purple-500 ">
                  登录
                </Button>
              </Form.Item>
            </Form>
            <div className=' '>
              <span>
                <span class="absolute bottom-10 right-36 first-letter:  first-letter: animate-ping    w-4 h-4  rounded-full bg-gradient-to-b from-orange-500 to-violet-600 opacity-75"></span>
                <span class="absolute bottom-10 right-36 inline-flex rounded-full h-4 w-4 bg-gradient-to-r from-sky-500 to-rose-600"></span>
              </span>
              <button
                class="inline-block absolute right-0 bottom-6 px-6 py-3 rounded-lg   transition ease-in-out delay-150   hover:-translate-y-1 hover:scale-110 hover:bg-gradient-to-br  hover:ring hover:ring-teal-300  duration-300   text-white   bg-gradient-to-bl from-indigo-500 via-purple-500 to-pink-500 "
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasRight"
                aria-controls="offcanvasRight">
                注 册
              </button>
              <div
                class="offcanvas offcanvas-end fixed bottom-0 flex flex-col max-w-full bg-white invisible bg-clip-padding shadow-sm outline-none transition duration-300 ease-in-out text-gray-700 top-0 right-0 border-none w-[47rem]"
                tabindex="-1"
                id="offcanvasRight"
                aria-labelledby="offcanvasRightLabel">
                <div class="offcanvas-header">
                  <RegisterPage />

                  <button
                    type="button"
                    class="btn-close box-content w-4 h-4 p-2 -my-5 -mr-2 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline
                      absolute top-8 right-6 "
                    data-bs-dismiss="offcanvas"
                    aria-label="Close"></button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
