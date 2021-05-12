import React, { FunctionComponent } from 'react'

const Message:FunctionComponent<{msg?:string}> = ({ msg }) => (
  <div>Message is {msg}</div>
)

export default Message
