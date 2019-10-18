import React from 'react'
import './index.scss'
import  imageConversion from 'image-conversion'

export const Lott = () => {

  let changeHandler = (e) =>{
    const file = document.getElementById('demo').files[0];
    console.log(file.size/(1024*1024));
    imageConversion.compressAccurately(file, 10240).then(res=>{
      //The res in the promise is a compressed Blob type (which can be treated as a File type) file;
      console.log(res.size/(1024*1024));
    })
  }
  return (
    <div id='lot' className='lott'>
      <input id="demo" type="file" onChange={(e)=>changeHandler(e)}></input>
    </div>
  )
}