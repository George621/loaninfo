import React, { useState } from 'react'
import './index.scss'
import { isArray } from 'util'
const CommonMethod = () => {
  const [count, setCount] = useState(0)
  let fun = () => {
    console.log(11 )
    setCount(count + 1)
  }
 
  const debounce = (fn, delay, immediate) => { //防抖函数
    let timeOut
    return () => {
      if (immediate && !timeOut) {
        fn.apply();
        return
      }
      if (timeOut) {
        clearTimeout(timeOut)
        return
      }
      timeOut = setTimeout(() => {
        fn.apply()
      }, delay)
    }
  }
  const throttle = (fn, w, immed) => { // 节流函数
    let time = (new Date()).getTime()
    let firstTime = true
    // let that = this
    // let args = arguments
    return () => {
      if (immed && firstTime) {
        fn.apply()
        firstTime = false
        console.log('frist')
      }
      let cur = (new Date()).getTime()
      if (cur - time > w) {
        fn.apply()
        time = cur
      }
    }
  }
 /*
 1.自己实现一个flat数组扁平
 2.两个有序数组实现复杂度最低的排序
 3.一个数组，拆分成2个数组，保证两个数组查的绝对值最小
 */
let arr = [1,2,['ge','eor',[34,33,22,88]],0]
Array.prototype._flat = function(lev){
  let newArr =[]
  // 执行几次 lev
  if (lev ==='infinity'){
    this.forEach((item)=>{
      if(Array.isArray(item)){
        newArr = newArr.concat(item._flat())
      }else{
        newArr.push(item)
      }
    })
    return newArr
  }else {
   if( typeof lev === 'number') {
    for (let i = 0; i < lev; i++) {
      this.forEach((item)=>{
        newArr = newArr.concat(item._flat(i))
      })
      newArr.push(item)
    }
   } else{
     return
   }
   return newArr
  }  
}
//  let a = [1,3,5,7,9,11]
//  let b = [2,4,6,8,10]


// function getNewArr(arr1,arr2){
//   let newArr=[]
//   let i =arr1.length-1
//   let j = arr2.length-1
//   while(i>=0 && j>=0){
//     if(a[i]>b[j]){
//       newArr.unshift(a[i])
//       i=i-1
//     }else{
//       newArr.unshift(b[j])
//       j=j-1
//     }
//    }
//    if(i<0 && j>=0){
//    return arr2.slice(0,j+1).concat(newArr)
//    }
//    if(j<0&& i>=0){
//     return arr1.slice(0,i+1).concat(newArr)
//     }
//    return newArr
// }

// let arr = [1,2,3,4,5,6,7,8,9,111]

// function getTwo(arr){
//   let arr1= []
//   let arr2 = []
//   let obj = {
//     arr1,arr2
//   }
//   let i = arr.length - 1
//   while (i>=0) {
//     let sum1 = arr1.reduce((pre, cur)=>{return pre + cur},0)
//     let sum2 = arr2.reduce((pre, cur)=>{return pre + cur},0)
//     if (sum1 - sum2 <= 0){
//       arr1.push(arr[i])
//     }else{
//       arr2.push(arr[i])
//     }
//     i--
//   }
//   return obj
// }

 
  return (
    <div className='container'>
      <div className='container__deb' onMouseMove={debounce(fun, 2000)}>
        <input
          type="text"
          onInput={ throttle(fun, 2000) }
        />
        <span>{count}</span>
      </div>
      <button onClick={throttle(fun, 2000)}>
        throttle
      </button>

    </div>
  )
}
export { CommonMethod }