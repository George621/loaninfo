import React from 'react'
import './index.scss'

export const Questions = () => {
 
  return (
    <div id='question' className='question'>
       <p>
         1. 块元素独占一个行，可以设置宽高
        2. <div className='sanjiao' />
        3.rgba 设置的颜色设置的是元素自身， opacity设置自身和自元素都会有透明度
        4.single page aplication  也就是单页面应用
        <br/>
        优点： 可以前端自己控制路由，不依赖后端<br/>
        缺点： 所有的内容都在这个页面，加载资源多，压力大，seo不好<br/>
        5. 更新state.<br/>
        6.react ：都是基于状态渲染，数据驱动，状态改变，页面重新渲染<br/>
         jquery：操作dom比较方便，性能不如react,每次更新dom会伴随着回流
         <br/>
         7.v-for v-modal <br/>
         8.computed 一般是伴随大量的计算才使用的watch是监听变化时候做的操作，根据具体情况使用<br/>
       
       </p>
       <p>
          9. 
          one: git clone ***.abc.git<br/>
          two: npm install <br/>
          three: npm run dev<br/>
          git checkout master<br/>
          git pull <br/>
          git merge abc_branch<br/>

       </p>
       <p>
         10.<br/> 
         1). 可以写成 a = a.sort() return a || 或者直接return a.sort（）。sort 排序不一定准确，
         <br/>
          2). ()=> b ? c(): '' 可以不用 '{}' <br/>
          3.) 没有return 直接用forEach
       </p>
    </div>
  )
}