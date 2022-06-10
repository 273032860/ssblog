import React, { useEffect, useState } from 'react'
import { RecipeReviewCard, CarouselCard } from '../components'
import FixedPage from './FixedPage'
import { http } from '../utils'

function FirstPage() {
  const [listdata, setlistdata] = useState([])

  useEffect(() => {
    async function fetchData() {
        const res = await http.get('/article/articleList?pageNum=1&pageSize=10')
        setlistdata(res.data.rows)
    }
    fetchData()
  }, [])

  console.log('eeeeeeeeeeeeeeee', listdata)
  return (
    <div className="   lg:pl-6   items-center  dark:bg-secondary-dark-bg h-full  pt-8 ">
      <h1 className="text-center text-2xl tracking-widest font-black select-none bg-clip-text text-transparent bg-gradient-to-b from-pink-600 via-yellow-600 to-orange-600">
        热门文章
      </h1>

      <div>
        <CarouselCard listdata={listdata} />
      </div>
      <div className=" relative  pt-4   pl-14 w-80  xl:flex xl:items-start xl:gap-16 ">
        <div>
          {listdata.map((item,index)=>{return <RecipeReviewCard key={index} listdata={item}/>})}
          
        </div>
        <div className="pt-4 w-80 xl:pt-0 xl:w-96 xl:sticky xl:top-2">
          <FixedPage />
        </div>
      </div>
    </div>
  )
}

export default FirstPage
