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
]

export default routes
