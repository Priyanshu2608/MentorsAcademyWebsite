import React from 'react'
import Navbar from './Components/Navbar'
import Header from './Components/Header'
import Main from './Components/Mainpage'
import Footer from './Components/Footer'
import About from './Components/About'
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
      element: <><Navbar/><About/></>
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
      <Footer/>
      

    </div>
  )
}

export default App
