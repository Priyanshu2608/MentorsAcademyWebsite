import React from 'react'
import Navbar from './Components/Navbar'
import Header from './Components/Header'
import Main from './Components/Mainpage'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element:<><Navbar/><Main/></>
    },
    {
      path: "/subjects",
      element:<><Navbar/><subject/></>
    },
    {
      path: "/about",
      element: <><Navbar/><about/></>
    },
    {
      path: "/contact",
      element: <><Navbar/><contact/></>
    }

  ])
  return (
    <div>
      <Header/>
      
      <RouterProvider router={router}/>
      

    </div>
  )
}

export default App
