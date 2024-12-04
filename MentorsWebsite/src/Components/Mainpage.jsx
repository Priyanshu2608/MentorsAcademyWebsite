import React from 'react'
import './Mainpage.css'
import Adv from '../assets/men.jpg'

const Mainpage = () => {
  return (
    <div>
    <div className='container'>
      
        <img className='main' src={Adv} alt="" />
        <div className="write"><h2 className='coverline'>Welcome To Mentors' Academy</h2>
            <h3 className='subhead'>"Discover the joy of learning"</h3>
            
    
    </div>
    <div className='open'>Admissions Open </div>
    </div>

    </div>
  )
}

export default Mainpage
