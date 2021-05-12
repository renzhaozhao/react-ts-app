import React, { FC } from 'react'
import { Breadcrumb } from 'antd'
import { Link } from 'react-router-dom'

const Navbar:FC = () => (
  <Breadcrumb>
    <Breadcrumb.Item>
      <Link to="/">Home</Link>
    </Breadcrumb.Item>
    <Breadcrumb.Item>
      <Link to="/page1">Page1</Link>
    </Breadcrumb.Item>
    <Breadcrumb.Item>
      <Link to="/page2">Page2</Link>
    </Breadcrumb.Item>
  </Breadcrumb>
)

export default Navbar
