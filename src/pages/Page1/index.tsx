import React, { FC, useState, useEffect } from 'react'
import { Button } from 'antd'

import './index.less'

export interface Props {
  name: string
}

const Page1:FC = () => {
  const [count, setCount] = useState(0)

  const a = (num:number) => {
    const b = 2
    return num + b
  }

  useEffect(() => {
    // eslint-disable-next-line
    console.log(a)
  }, [count])

  return (
    <div>
      <div>title11</div>
      <div>{count}</div>
      <div>
        <Button type="primary" onClick={() => { setCount(count + 1) }}>+</Button>
      </div>
    </div>
  )
}

export default Page1
