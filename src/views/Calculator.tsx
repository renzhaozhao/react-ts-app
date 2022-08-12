import { Input } from 'antd'
import '@/styles/calculator.less'
import Bignumber from 'bignumber.js'
import { useState } from 'react'
const Calculator = () => {
  console.log(Bignumber(2).plus(Bignumber(2.4)).toString())

  const [number, setNumber] = useState('')

  const pressNumber = (num: number) => {
    const value = `${number}${num}`
    setNumber(value)
  }

  return (
    <div className="container">
      <Input value={number} readOnly />
      <div className="keys">
        <div className="left">
          <div className="opts">
            <div className="btn">AC</div>
            <div className="btn">+/-</div>
            <div className="btn">%</div>
          </div>
          <div className="nums">
            <div className="btn" onClick={() => pressNumber(7)}>
              7
            </div>
            <div className="btn" onClick={() => pressNumber(8)}>
              8
            </div>
            <div className="btn" onClick={() => pressNumber(9)}>
              9
            </div>
            <div className="btn" onClick={() => pressNumber(4)}>
              4
            </div>
            <div className="btn" onClick={() => pressNumber(5)}>
              5
            </div>
            <div className="btn" onClick={() => pressNumber(6)}>
              6
            </div>
            <div className="btn" onClick={() => pressNumber(1)}>
              1
            </div>
            <div className="btn" onClick={() => pressNumber(2)}>
              2
            </div>
            <div className="btn" onClick={() => pressNumber(3)}>
              3
            </div>
            <div
              className="btn"
              onClick={() => pressNumber(0)}
              style={{ width: 200 }}>
              0
            </div>
            <div className="btn" onClick={() => pressNumber(0)}>
              .
            </div>
          </div>
        </div>
        <div className="right">
          <div className="btn">*</div>
          <div className="btn">/</div>
          <div className="btn">-</div>
          <div className="btn">+</div>
          <div className="btn">=</div>
        </div>
      </div>
    </div>
  )
}

export default Calculator
