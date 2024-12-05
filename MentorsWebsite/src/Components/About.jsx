import React from 'react'
import './About.css'
import abt from "../assets/abt.mp4"
const About = () => {
  return (
    <div>
      <div className="vidabt">
        <video src={abt} loop autoPlay className='vid3'></video>
        <div className="about">
          <h2 className="aboutline">About Our Faculty</h2>
          <h3 className="quote">"Teachers plant seeds of knowledge that grow forever."</h3>
        </div>
      </div>
    </div>
  )
}

export default About
