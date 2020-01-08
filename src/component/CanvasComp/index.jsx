import React, { useRef, useEffect } from 'react'
import './index.scss'

export const CanvasComp = () => {


  class CarFactory {
    constructor(props) { // 构造函数
      this.color = props.color
      this.wheel = props.num
      this.name = props.name
      this.contain = '铁 + 玻璃 + 塑料'
    }
    drive() {
      console.log('a' + this.color + ' ' + this.name + 'is runing on road')
    }
  }
  class BmwFactory extends CarFactory {
    constructor(props) { // 构造函数
      super(props)
      this.name = '宝马宝马' // 创建出来的肯定是宝马车 私有属性
    }
    drive() { // 跟父类方法一样 此处可以放置不同于父类的方法
      console.log('a' + this.color + ' ' + this.name + 'is runing on road')
    }
    showContain() {
      console.log(this.contain)
    }
  }

  let bmw = new BmwFactory({ color: 'white', num: 4 })
  bmw.drive()
  bmw.showContain()


  class Event {
    constructor() { 
      this.handlers = {} 
    }
      // 定义一个事件容器 用来装事件件数组
    addhandlerListener(type, handler) { // 注册事件方法
      if (!this.handlers[type]) {
        this.handlers[type] = []
      }
      this.handlers[type].push(handler)
    }
    //  触发事件函数
    dispatchhandler(type, ...params) {
      if (!this.handlers[type]) {
        return new Error('not found this handler')
      }
      this.handlers[type].forEach((item) => {
        item(...params)
      })
    }
    // 事件移除   事件名字 删除的事件 
    removehandlerListener(type, handler) {
      if (!this.handlers[type]) {
        return new Error('not found this handler')
      }
      if (!handler) {
        delete this.handlers[type]
      } else {
        const hasEve = this.handlers[type].includes(handler)
        if (!hasEve) {
          return new Error('not found this handler')
        }
        let index = this.handlers[type].indexOf(handler)
        this.handlers[type].splice(index, 1)
        if (this.handlers[type].length === 0) {
          delete this.handlers[type]
        }
      }
    }

  }
  let event = new Event()
  let load =(params)=> {
    console.log(params, 'load')
  }
  event.addhandlerListener('load', load)
  event.dispatchhandler('load', 'load事件触发')
  event.removehandlerListener('load')
  event.dispatchhandler('load', 'load事件触发')

  // useEffect(()=>{



  // },[])
  const p = new Promise((resolve, reject)=>{
    setTimeout(()=>{
      let time =  new Date().getTime()
      if(time % 2 === 0){
        resolve('time is double time ='+time)
      }else{
        reject('time is single time ='+time)
      }
    },1000)
  })
  p.then(
    value=>{
      console.log(value)
    },reason=>{
      console.log(reason)
    }
  )
  return (
    <div id='canv' className='contain'>
      CanvasComp
    </div>
  )
}