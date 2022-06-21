import React from 'react'
import {BsFillEnvelopeFill} from 'react-icons/bs'

// Import Stylesheet
import '../style/style.css'

export default function ImageHeader(){
    return(
        <div className='container'>
            <div className='image-section'></div>
            <h1 className='image-section--name'>Bishway Datta</h1>
            <h3 className='image-section--designation'>Frontend Developer</h3>
            <h4 className='image-section--email'>mrdatta2410@gmailcom</h4>
            <button className='email--button'>
                <span className='email-button--icon'>
                    <BsFillEnvelopeFill />
                </span>
                <span className='email-button--icon-name'>
                    Email
                </span>
            </button>
        </div>
    )
}