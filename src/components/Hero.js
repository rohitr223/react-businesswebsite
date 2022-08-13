import React from 'react'
import HeroImg from "../images/uiux.png"
import {Link} from "react-scroll"

const Hero = () => {
  return (
    <div>
      <section className="text-gray-300 body-font" id="home">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img className="object-cover object-center rounded" alt="hero" src={HeroImg} />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-300">Help Us To Make Your
              <br className="hidden lg:inline-block" />Dream App
            </h1>
            <p className="mb-8 leading-relaxed">
              We are a group of frontend web developers that help you to make your dream website. 
              We can also design and develop complex UI/UX web applications<br/> according to your preferences.
            </p>
            <div className="flex justify-center">
              <Link to="about">
                <button className="inline-flex text-yellow-200 border-solid border-2 border-yellow-300 py-2 px-6 focus:outline-none hover:bg-yellow-200 hover:text-black rounded text-lg">
                  Read More
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Hero