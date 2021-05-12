import React, { FC } from 'react'

const Message:FC<{msg?:string}> = ({ msg }) => (
  <div>Message is {msg}</div>
)

export default Message
