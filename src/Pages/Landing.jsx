import React from 'react'
import Header from '../Components/Header'
import Hero from '../Components/Hero'
import Footer from '../Components/Footer'
import HumanCentricHealth from '../Components/HumanCentricHealth'
import Finance from '../Components/Finance'
import ContactUs from '../Components/ContactUs'

const Landing = () => {
    return (
        <div className='flex flex-col gap-10'>
            <Header />
            <Hero />
            <HumanCentricHealth/>
            <Footer />
            <Finance/>
            <ContactUs/>
        </div>
    )
}

export default Landing