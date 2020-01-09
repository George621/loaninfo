import React, { useState, useEffect, useRef } from 'react';
import './index.scss'

export const Lott = (props) => {
  return (
    <div className="contain">
      <div className='lott'></div>
      <div className='rainbow'>
       <div className='r1' />
       <div className='r2' />
       <div className='r3' />
       <div className='r4' />
       <div className='r5' />
       <div className='r6' />
      </div>
    </div>
  )
}