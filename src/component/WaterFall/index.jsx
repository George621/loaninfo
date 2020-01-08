import React from 'react'
import { imgList } from './data.js'
import './index.scss'
const WaterFall = () => {
  console.log(imgList)
  let dataOne = [],
    dataTwo = [],
    dataThree = [],
    i = 0
  while (i < imgList.length) {
    dataOne.push(imgList[i++])
    if (i < imgList.length) {
      dataTwo.push(imgList[i++])
    }
    if (i < imgList.length) {
      dataThree.push(imgList[i++])
    }
  }
  console.log(dataOne,dataTwo,dataThree )
  const renderWaterFall = (arr) => {
    if(arr.length===0) return
    return arr.map((item, index) => {
      return (<li className='water--fall__cloumn--item' key={item.id}>
        <img src={item.img} alt="" />
      </li>)
    })
  }
  return (
    <div className='water--fall'>
      <div className='water--fall__title'>瀑布流</div>
      <div className='water--fall__main'>
        <ul className="water--fall__cloumn">
          {renderWaterFall(dataOne)}
        </ul>
        <ul className="water--fall__cloumn">
        {renderWaterFall(dataTwo)}
        </ul>
        <ul className="water--fall__cloumn">
        {renderWaterFall(dataThree)}
        </ul>

      </div>
    </div>
  )
}

export { WaterFall }