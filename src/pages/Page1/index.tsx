import React, { FunctionComponent, useState, useEffect } from 'react'

export interface Props {
  name: string
}

const Page1:FunctionComponent = () => {
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
        <button type="button" onClick={() => { setCount(count + 1) }}>+</button>
      </div>
    </div>
  )
}

export default Page1
