import React from 'react'
import { useEffect, useState, useRef } from 'react'
import './index.scss'

export const Lott = () => {
  const [winnerList, setWinnerList] = useState([])
  let scrollbox = useRef(null)
  useEffect(() => {
    let mockList = ['001', '002', '003', '004', '005', '006', '007']
    setWinnerList(mockList)
    return () => {

    };
  }, [])

  let renderList = (arr) => {
    return arr.map((item, index) => {
      return <li className='' key={item + index}>{item}</li>
    })
  }
  let count = 0
  let itemHeight = scrollbox.current
const scrolling = ()=>{
  scrollbox.current.style.transform = 'translateY(-100px)';
  setWinnerList([...winnerList,'2323'])
  console.log(`11`)
}
winnerList.length > 0 && setTimeout(()=>{
  // scrolling()
},1000)

console.log(itemHeight, 'scrollbox')
  return (
    <div className='lott'>
      <ul ref={scrollbox} className='scrollbox'>
        {winnerList.length > 0 && renderList(winnerList)}
      </ul>
    </div>
  )

}