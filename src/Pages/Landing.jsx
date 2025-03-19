import React from 'react'
import Header from '../Components/Header'
import Hero from '../Components/Hero'
import Footer from '../Components/Footer'
import HumanCentricHealth from '../Components/HumanCentricHealth'

const Landing = () => {
    return (
        <div className='flex flex-col gap-10'>
            <Header />
            <Hero />
            <HumanCentricHealth/>
            <Footer />
        </div>
    )
}

export default Landing