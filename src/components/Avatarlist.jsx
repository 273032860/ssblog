import React, { useState } from 'react'
import UploadAvatar2 from './UploadAvatar2'
import UploadAvatar from './UploadAvatar'
import { http } from '../utils'
import { TipMessage } from '../components/TipMessage'

function Avatarlist() {
  const [newuserInfo, setnewuserInfo] = useState(
    JSON.parse(localStorage.getItem('userInfo'))
  )
  const { id } = JSON.parse(localStorage.getItem('userInfo'))

  const hanlClick = async () => {
    const params = {
      avatar: localStorage.getItem('imgurl'),
      id: id,
    }
    const res = await http.put('/user/upuserinfo', params)
    if (res.code === 200) {
      //更新userInfo


      const newitem = Object.assign(newuserInfo,params)
     
      localStorage.setItem('userInfo',JSON.stringify(newitem))
       

      TipMessage('头像更换成功', 'success', {
        vertical: 'top',
        horizontal: 'center',
      })
      localStorage.removeItem('imgurl')
      window.location.reload()
    }
  }

  return (
    <div>
      {/* <div class="">
        <button
          type="button"
          class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
          data-bs-toggle="modal"
          data-bs-target="#exampleModalCenter">
          Vertically centered modal
        </button>
        
      </div> */}

      <div
        class="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto"
        id="exampleModalCenter"
        tabindex="-1"
        aria-labelledby="exampleModalCenterTitle"
        aria-modal="true"
        role="dialog">
        <div class="modal-dialog modal-dialog-centered relative w-auto pointer-events-none">
          <div class="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
            <div class="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
              <h5
                class="text-xl font-medium leading-normal text-gray-800"
                id="exampleModalScrollableLabel">
                上传头像
              </h5>
              <button
                type="button"
                class="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
                data-bs-dismiss="modal"
                aria-label="Close"></button>
            </div>
            <div class="modal-body relative p-4">
           
              <UploadAvatar2 />
            </div>
            <div class="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4 border-t border-gray-200 rounded-b-md">
              <button
                type="button"
                class="inline-block px-6 py-2.5 bg-purple-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out"
                data-bs-dismiss="modal">
                关闭
              </button>
              <button
                onClick={hanlClick}
                type="button"
                class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out ml-1">
                保存更改
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Avatarlist
