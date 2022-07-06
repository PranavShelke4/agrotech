import React,{useState} from 'react'
import Mail from '../../../assets/mai.svg'
import './Contact.scss'

const Contact = () => {
  return (
    <>
        <div className='contact-container'>
            <div className='contact-container-1'>
                <h2>Get Information</h2>
                <p>What are you waiting for, contact now !</p>
                <button>Form</button>
            </div>
            
            <div className='contact-container-2'>
                <img src={Mail} alt='Mail' />

            </div>

        
        
        </div>
    </>
  )
}

export default Contact