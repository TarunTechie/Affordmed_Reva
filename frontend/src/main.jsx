import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Feed from './pages/feed.jsx'
import TopUsers from './pages/topUsers.jsx'
import Trending from './pages/trending.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: "/",
    element:<App/>
  },
  {
    path: "/feed",
    element:<Feed/>
  },
  {
    path: '/user',
    element:<TopUsers/>
  },
  {
    path: "/trending",
    element:<Trending/>
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
