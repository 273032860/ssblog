import React, { useEffect, useState } from 'react'
import { http } from '../utils'

function Categories() {
  const [liste, setliste] = useState()

  useEffect(() => {
    async function fetchData() {
      const res = await http.get('/category/categoryList') //       axios.get可替换fetch  fetch原生的api
      if (res.code === 200) {
        setliste(res.data)
      }
    }
    fetchData()
  }, [])

  return (
    <div>
      {/* <ul>
        {liste.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul> */}
      <ul>
        <li>Javascript</li>
        <li>Java</li>
        <li>Python</li>
        <li>Web3.0</li>
        <li>元宇宙</li>
      </ul>
    </div>
  )
}

export default Categories
