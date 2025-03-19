import React from 'react'
import landingPageData from "../constant/WebData";
import Button from './Button';


const Hero = () => {
    return (
        <section className=" body-font h-[90vh]">
            <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 className="title-font sm:text-5xl leading-tight text-3xl mb-4 font-medium ">
                        {landingPageData.hero.title}
                    </h1>
                    <p className="mb-8 leading-relaxed">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. A hic enim facilis aperiam! Eos, quos nobis repellendus ipsa fugiat maiores natus perferendis ipsam deleniti id odio eligendi alias asperiores recusandae?
                    </p>
                    <div className="flex gap-10 justify-center">
                        <button className="inline-flex items-center border-1 bg-[#ff890042] border-[#ff890042] py-1 px-3 focus:outline-none hover:bg-[#ff899019]  rounded text-base mt-4 md:mt-0">
                            {landingPageData.hero.buttonText}
                            <svg
                                fill="none"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                className="w-4 h-4 ml-1"
                                viewBox="0 0 24 24"
                            >
                                <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>
                </div>
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                    <img
                        className="object-cover w-full h-full object-center rounded-[10%]"
                        alt="hero"
                        src={landingPageData.hero.image}
                    />
                </div>
            </div>
        </section>
    )
}

export default Hero