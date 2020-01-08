import React from 'react'
// import { Index } from '../component/Index/index.jsx'

import { Lott } from '../component/Lott/index.jsx'

// import { Gift } from '../component/Gift/index.jsx'
// import {CanvasComp} from '../component/CanvasComp/index.jsx'
import {Questions} from '../component/Questions/index.jsx'

// import {WaterFall} from '../component/WaterFall/index.jsx'
// import {CommonMethod} from '../component/CommonMethod/index.jsx'


export const App = () => {

  return (
    <div className="app">
      {/* <CommonMethod /> */}
      {/* <WaterFall /> */}
      <Lott />
      {/* <Gift></Gift> */}
      {/* <CanvasComp /> */}
      {/* <Questions /> */}
    </div>
  )
}