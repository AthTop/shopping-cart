import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createbrowserRouter, RouterProvider } from 'react-router-dom'


const router = createbrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/shop",
    element: <Shop />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router= {router} />
  </StrictMode>,
)
