import { lazy } from 'react'
import { RouteObject } from 'react-router-dom'

const routes: RouteObject[] = [
  {
    path: '/',
    element: lazy(() => import('@/views/Home')),
  },
  {
    path: '/about',
    element: lazy(() => import('@/views/About')),
  },
  {
    path: '/calculator',
    element: lazy(() => import('@/views/Calculator')),
  },
]

export default routes
