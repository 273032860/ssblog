import React, { useState, useEffect } from 'react'
import Carousel from 'react-multi-carousel'
// import WithStyles from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import { useStateContext } from '../contexts/ContextProvider'
import { http } from '../utils'

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 1536 },
    items: 4,
  },
  desktop: {
    breakpoint: { max: 1536, min: 1024 },
    items: 3,
    slidesToSlide: 3, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 664 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 664, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
}

// const customLeftArrow = CustomLeft

function CarouselCard({ listdata }) {
  const { setColor, setMode, currentMode, currentColor, setThemeSettings } =
    useStateContext()

  const customRightArrow = (
    <div
      className="  absolute arrow-btn right-0 text-center py-3 cursor-pointer  rounded-full"
      style={{ backgroundColor: currentColor }}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-3 w-6 text-white "
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M14 5l7 7m0 0l-7 7m7-7H3"
        />
      </svg>
    </div>
  )

  // const [hotlist, sethotlist] = useState()

  // useEffect(() => {
  //   async function fetchData() {
  //     const res = await http.get('/article/hotArticleList') //       axios.get可替换fetch  fetch原生的api
  //     setData(Json.res)
  //   }
  //   fetchData()
  // }, [])

  const customLeftArrow = (
    <div
      className="absolute arrow-btn left-0 text-center py-3 cursor-pointer   rounded-full"
      style={{ backgroundColor: currentColor }}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-3 w-6 text-white "
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M10 19l-7-7m0 0l7-7m-7 7h18"
        />
      </svg>
    </div>
  )

  return (
    <div className=" pl-10">
      <Carousel
        infinite
        customLeftArrow={customLeftArrow}
        customRightArrow={customRightArrow}
        responsive={responsive}
        itemClass="px-4">
        {listdata.map((item, index) => {
          return (
            <div
              key={item.id}
              style={{ borderColor: currentColor }}
              class=" bg-white   bg-clip-padding backdrop-filter backdrop-blur-none bg-opacity-20 text-gray-200    lg:w-96 rounded-lg shadow-lg   mt-8  w-80 relative ">
              <div className="h-16"></div>
              <div class="w-28 -mt-12 overflow-hidden border  border-white rounded-full mx-auto bg-white">
                <img src={item.avatar} />
              </div>
              <span
                className={`absolute left-0 top-0 py-4 px-4 italic text-xl font-bold  text-[${currentColor}]`}>
                {index+1}
              </span>
              <div class="p-6">
                <h4 class="text-xl font-semibold mb-4 text-gray-200 ">
                  {item.nickname}
                </h4>
                <hr />
                <p class="mt-4">
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="quote-left"
                    class="w-6 pr-2 inline-block"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512">
                    <path
                      fill="currentColor"
                      d="M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z"></path>
                  </svg>
                 <p className='truncate '>{item.title}</p>
                </p>
              </div>
            </div>
          )
        })}

        {/* <div class="lg:w-96 rounded-lg shadow-lg bg-white mt-8 w-80 relative h-72">
          <div
            class="overflow-hidden rounded-t-lg h-16"
            style={{ backgroundColor: '#9d789b' }}></div>
          <div class="w-28 -mt-12 overflow-hidden border  border-white rounded-full mx-auto bg-white">
            <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(2).webp" />
          </div>
          <div class="p-6">
            <h4 class="text-xl font-semibold mb-4">Maria Smantha</h4>
            <hr />
            <p class="mt-4">
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="quote-left"
                class="w-6 pr-2 inline-block"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512">
                <path
                  fill="currentColor"
                  d="M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z"></path>
              </svg>
              Lorem ipsum dolor sit amet eos adipisci, consectetur adipisicing
              elit.
            </p>
          </div>
        </div>

        <div class="lg:w-96 rounded-lg shadow-lg bg-white mt-8 w-80 relative h-72">
          <div
            class="overflow-hidden rounded-t-lg h-16"
            style={{ backgroundColor: '#9d789b' }}></div>
          <div class="w-28 -mt-12 overflow-hidden border  border-white rounded-full mx-auto bg-white">
            <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(3).webp" />
          </div>
          <div class="p-6">
            <h4 class="text-xl font-semibold mb-4">Maria Smantha</h4>
            <hr />
            <p class="mt-4">
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="quote-left"
                class="w-6 pr-2 inline-block"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512">
                <path
                  fill="currentColor"
                  d="M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z"></path>
              </svg>
              Lorem ipsum dolor sit amet eos adipisci, consectetur adipisicing
              elit.
            </p>
          </div>
        </div>

        <div class="lg:w-96 rounded-lg shadow-lg bg-white mt-8 w-80 relative h-72">
          <div
            class="overflow-hidden rounded-t-lg h-16"
            style={{ backgroundColor: '#9d789b' }}></div>
          <div class="w-28 -mt-12 overflow-hidden border  border-white rounded-full mx-auto bg-white">
            <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(2).webp" />
          </div>
          <div class="p-6">
            <h4 class="text-xl font-semibold mb-4">Maria Smantha</h4>
            <hr />
            <p class="mt-4">
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="quote-left"
                class="w-6 pr-2 inline-block"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512">
                <path
                  fill="currentColor"
                  d="M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z"></path>
              </svg>
              Lorem ipsum dolor sit amet eos adipisci, consectetur adipisicing
              elit.
            </p>
          </div>
        </div> */}
      </Carousel>
    </div>
  )
}

export default CarouselCard
