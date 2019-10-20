import React from 'react'
import './index.scss'

export const Gift = () => {
  const [anmiClass,  setAnmiClass] = React.useState(false)
  const [delGift,  setDelGift] = React.useState(true)

  let openGift = (e) =>{
    setAnmiClass(true)
    setTimeout(() => {
      setDelGift(false)
    }, 1000);
  }
  return (
    <div id='lot' className='gift'>
      {delGift && <div className={`gift__box ${anmiClass ? 'gift__playanima' : ''}`} onClick = {()=>{openGift()}}></div>}
      {!delGift && <div>finshi</div>}
    </div>
  )
}