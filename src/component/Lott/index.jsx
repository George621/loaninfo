import React, { useState, useEffect, useRef } from 'react';
import './index.scss'

export const Lott = (props) => {
  // const {list, height} = props;
  const list = [
    '00001','000002','000003','00004',
    '00005','000006','000007','00008',
    '00009','000010','000011','00012'

  ]
  const height = '66px';
  const THRESHOLD = 15;

  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(THRESHOLD);
  const [observer, setObserver] = useState(null);
  const $bottomElement = useRef();
  const $topElement = useRef();
  // 渲染时，头尾ref处理
  const getReference = (index, isLastIndex) => {
    if (index === 0)
      return $topElement;
    if (isLastIndex)
      return $bottomElement;
    return null;
  }
  const intiateScrollObserver = () => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    }
    const Observer = new IntersectionObserver(callback, options)
    // 交叉观察的具体回调，观察每个节点，并对实时头尾元素索引处理
    const callback = (entries, observer) => {
      entries.forEach((entry, index) => {
        const listLength = list.length;
        // 向下滚动，刷新数据
        if (entry.isIntersecting && entry.target.id === 'bottom') {
          const maxStartIndex = listLength - 1 - THRESHOLD; // 当前头部的索引
          const maxEndIndex = listLength - 1; // 当前尾部的索引
          const newEnd = (end + 10) <= maxEndIndex ? end + 10 : maxEndIndex; // 下一轮增加尾部
          const newStart = (end - 5) <= maxStartIndex ? end - 5 : maxStartIndex; // 在上一轮的基础上计算头部
          setStart(newStart)
          setEnd(newEnd)
        }
        if (entry.isIntersecting && entry.target.id === 'top') {
          const newEnd = end === THRESHOLD ? THRESHOLD : (end - 10 > THRESHOLD ? end - 10 : THRESHOLD); // 向上滚动尾部元素索引不得小于15
          let newStart = start === 0 ? 0 : (start - 10 > 0 ? start - 10 : 0); // 头部元素索引最小值为0
          setStart(newStart)
          setEnd(newEnd)
        }
      })
    }
  }
  useEffect(() => {
    intiateScrollObserver();
    return () => {
      // resetObservation()
    }
  }, [start, end])
  const lastIndex = list.length - 1;

  let renderList = (arr, index) => {
    const top = (height * (index + start)) + 'px';
    const refVal = getReference(index, index === lastIndex); // map循环中赋予头尾ref
    const id = index === 0 ? 'top' : (index === lastIndex ? 'bottom' : ''); // 绑ID
    return arr.map((item, index) => {
      return <li className='' key={item + index}>{item}</li>
    })
  }

  return (
    <div className='lott'>
      <ul ref={scrollbox} style={{ position: 'relative' }} className='scrollbox'>
        {renderList(list)}
      </ul>
    </div>
  )

}