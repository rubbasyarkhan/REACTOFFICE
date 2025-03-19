import React from 'react'
import Header from '../Components/Header'
import Hero from '../Components/Hero'
import Footer from '../Components/Footer'
import HumanCentricHealth from '../Components/HumanCentricHealth'

const Landing = () => {
    return (
        <div>
            <Header />
            <Hero />
            <HumanCentricHealth/>
            <Footer/>
        </div>
    )
}

export default Landing