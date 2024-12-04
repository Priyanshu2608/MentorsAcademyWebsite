import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div>
      <nav>
        <h2 className='Head'>Mentors' Academy</h2>
        <ul>
        <Link to="/"><li>Home</li></Link>
        <Link to="/subjects"><li>Subjects</li></Link>
        <Link to="/about"><li>About</li></Link>
        <Link to="/contact"><li>Contact</li></Link>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
