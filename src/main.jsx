import React from 'react'
import ReactDOM from 'react-dom/client'
import { createHashRouter, RouterProvider } from 'react-router-dom'
import Landing from './routes/Landing.jsx'
import SignIn from './routes/SignIn.jsx'
import './styles/index.css'

// HashRouter keeps routing entirely client-side so it works on GitHub Pages
// (no server rewrites needed) — deep links, refresh, and Back all behave.
const router = createHashRouter([
  { path: '/', element: <Landing /> },
  { path: '/signin', element: <SignIn /> },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
