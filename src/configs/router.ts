import { lazy } from 'react'

// Route configuration: path (route path) element (rendered component)
export const config = [
  {
    path: '/',
    element: lazy(() => import('@/views'))
  }
]
