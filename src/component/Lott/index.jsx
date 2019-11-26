import React from 'react'
import { useEffect, useState, useRef } from 'react'
import './index.scss'

export const Lott = () => {
  const [winnerList, setWinnerList] = useState([])
  let scrollbox = useRef(null)
  useEffect(() => {
    let mockList = ['001', '002', '003', '004', '005', '006', '007']
    if (mockList.length > 3) {
      let lastThree = mockList.slice(0,3); // 截取数组后三项
      setWinnerList([...winnerList, ...mockList, ...lastThree])
    } else {
      setWinnerList([...winnerList, ...mockList])
    }
    // let itemHeight = scrollbox.current.firstChild.offsetHeight
    return () => {

    };
  }, [])
  let count = 0
  const scrolling = () => {
    scrollbox.current.style.transform = 'translateY('+ count * -45+'px)';
    scrollbox.current.style.transition = 'transform linear 0.3s';
  }
  winnerList.length> 0 && setInterval(() => {
    count++
    console.log(count, winnerList.length)
    if(count >=winnerList.length-2 ){
      scrollbox.current.style.transform = 'translateY(0)';
      scrollbox.current.style.transition = 'none';
      count = 0
    }else {
      scrolling()
    }
  }, 1000)

  let renderList = (arr) => {
    return arr.map((item, index) => {
      return <li className='' key={item + index}>{item}</li>
    })
  }

  return (
    <div className='lott'>
      <ul ref={scrollbox} className='scrollbox'>
        {console.log(winnerList)}
        {winnerList.length > 0 && renderList(winnerList)}
      </ul>
    </div>
  )

}