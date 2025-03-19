import React from 'react'
import landingPageData from "../constant/WebData";
import Button from './Button';

const Header = () => {
  return (
    <header className=" body-font">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <h1 className='text-2xl font-bold '>{landingPageData.header.logo}</h1>
    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
      <a className="mr-5 font-semibold hover:text-[#ffff] ">First Link</a>
      <a className="mr-5 font-semibold hover:text-[#ffff] ">Second Link</a>
      <a className="mr-5 font-semibold hover:text-[#ffff] ">Third Link</a>
      <a className="mr-5 font-semibold hover:text-[#ffff] ">Fourth Link</a>
    </nav>
    <Button/>
  </div>
</header>

  )
}

export default Header