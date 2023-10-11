import React from 'react'
import '../Style/contactus.css'
import {RiCustomerService2Line} from 'react-icons/ri'
import {HiMiniChatBubbleLeftRight} from 'react-icons/hi2'
import {FaMapLocationDot} from 'react-icons/fa6'

function Contactus() {
  return (
    <div className='main'>
      <div className='contact-container'>
        <div className='contact-header'>
          <h1>Contact Us</h1>
          <p>Need any help?</p>
        </div>
        
        <div className='contact-main'>

          <div className='contact-card'>
            <RiCustomerService2Line className='icons'/>
            <h2 className='contact-title'>24/7 Live Customer Service</h2>
            <p className='contact-desc'>At Skeptas.id, we take pride in offering you unparalleled 24/7 customer service that goes beyond the ordinary. Our commitment to your satisfaction knows no boundaries, and our dedicated support team is always ready to assist you, day or night.</p>
            <button className='contact-button'>Call</button>
          </div>

          <div className='contact-card'>
            <HiMiniChatBubbleLeftRight className='icons'/>
            <h2 className='contact-title'>24/7 Live Chat</h2>
            <p className='contact-desc'>Welcome to Skeptas.id, where help is just a click away, day or night! Our 24/7 live chat support is your direct line to expert assistance, providing you with instant solutions and a personalized touch whenever you need it.</p>
            <button className='contact-button'>Chat</button>
          </div>

          <div className='contact-card'>
            <FaMapLocationDot className='icons'/>
            <h2 className='contact-title'>Our Office</h2>
            <h4>9th, Sunset Road</h4>
            <p className='contact-desc'>At Skeptas.id, we invite you to step into our world of innovation, dedication, and impeccable service. Our office is more than just a physical space; it's the heart of our operations, where we bring our commitment to excellence to life.
            </p>
            <button className='contact-button'>Map</button>
          </div>
          {/* batas */}
        </div>
      </div>
    </div>
  )
}

export default Contactus