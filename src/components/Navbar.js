import React from 'react'
import {Link} from "react-scroll"


const Navbar = () => {
  return (
    <div>
      <header className="body-font">
          <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
            <Link className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0" to="#">
              <h2 className="ml-3 text-3xl font-bold text-gray-300">WEB<span className="text-blue-600">DEV</span></h2>
            </Link>
            <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center font-serif">
              <Link to="home" className="mr-5 text-gray-300 hover:underline cursor-pointer font-bold">HOME</Link>
              <Link to="about" className="mr-5 text-gray-300 hover:underline cursor-pointer font-bold">ABOUT</Link>
              <Link to="services" className="mr-5 text-gray-300 hover:underline cursor-pointer font-bold">SERVICES</Link>
              <Link to="testimonials" className="mr-5 text-gray-300 hover:underline cursor-pointer font-bold">TESTIMONIALS</Link>
            </nav>
            <Link to="contact">
                <button className="inline-flex items-center text-yellow-400 font-bold  border-2 border-solid border-yellow-400 py-1 px-3 focus:outline-none hover:bg-yellow-500 hover:text-black rounded text-base p-4 mt-4 md:mt-0">
                  CONTACT
                </button>
            </Link>
          </div>
        </header>
    </div>
  )
}

export default Navbar