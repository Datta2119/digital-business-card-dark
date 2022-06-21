import React from 'react'

// Custome Component Import

import Header from './components/Header'
import About from './components/About'
import Interest from './components/Interest'
import Footer from './components/Footer'

import {MdEmail} from 'react-icons/fa'

export default function App(){
    return(
        <div>
            <Header />
            <About />
            <Interest />
            <Footer />
        </div>
    )
}