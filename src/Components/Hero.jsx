import React from 'react'
import landingPageData from "../constant/WebData";


const Hero = () => {
    return (
        <section className="h-screen mt-10 ">
            <div className="container mx-auto flex px-5  md:flex-row flex-col items-center">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 className="title-font sm:text-5xl leading-tight text-3xl mb-4 font-medium ">
                        {landingPageData.hero.title}
                    </h1>
                    <p className="mb-8 leading-relaxed">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. A hic enim facilis aperiam! Eos, quos nobis repellendus ipsa fugiat maiores natus perferendis ipsam deleniti id odio eligendi alias asperiores recusandae?
                    </p>
                    <div className="w-full ">
                        <button className="group inline-flex items-center justify-center border-1 border-gray-200 py-1 rounded hover:rounded-3xl w-[50%] font-semibold px-4 focus:outline-none text-center hover:bg-[#dadada] hover:text-black text-md mt-4 md:mt-0 transition-all duration-300">
                            {landingPageData.hero.buttonText}
                            <svg
                                fill="none"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={1.5}
                                className="w-8 h-8 ml-1 transform transition-all duration-300 group-hover:translate-x-4"
                                viewBox="0 0 24 24"
                            >
                                <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>
                </div>
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                    <img
                        className="object-cover object-center  object-center rounded-[10%]"
                        alt="hero"
                        src={landingPageData.hero.image}
                    />
                </div>
            </div>
        </section>
    )
}

export default Hero