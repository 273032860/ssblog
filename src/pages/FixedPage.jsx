import React from 'react'
import { PostWidget, Categories } from '../components'

function FixedPage() {
  return (
    <div className='flex flex-col gap-4 '>
      <div className="bg-white shadow-lg rounded-lg p-8 pb-12    bg-clip-padding backdrop-filter backdrop-blur-none bg-opacity-20 text-white">
        <h3 className="text-xl mb-8 font-semibold border-b pb-4">热门排名</h3>
        <PostWidget />
      </div>

      <div className="bg-white shadow-lg rounded-lg p-8 pb-12 mb-8    bg-clip-padding backdrop-filter backdrop-blur-none bg-opacity-20 text-white">
        <h3 className="text-xl mb-8 font-semibold border-b pb-4">分类排名</h3>
        <Categories />
      </div>
    </div>
  )
}

export default FixedPage
