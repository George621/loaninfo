import React from 'react'
import './index.scss'
import lottie from 'lottie-web'
import animData from './data.json'
export const Lott = () => {

  React.useEffect(() => {
    let seq = document.getElementById('lot')
    lottie.loadAnimation({
      container: seq,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      // path: './data.json',//如果没有图片做动效,全是设计师用画的矢量图形
      animationData: animData   //如果有图片做动效,二者填其一即可
  })


    return () => {
      
    };
  }, [])
  return (
    <div id='lot' className='lott'>
    </div>
  )
}