import React from 'react'
import './About.css'
import abt from "../assets/abt.mp4"
const About = () => {
  return (
    <div>
      <div className="vidabt">
        <video src={abt} controls className='vid3'></video>
      </div>
    </div>
  )
}

export default About
