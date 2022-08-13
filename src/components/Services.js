import React from 'react'
import servImg from "../images/responsivedesign.png"

const Services = () => {
  return (
    <div>
      <section className="text-gray-300 body-font overflow-hidden" id="services">
        <h4 className="text-2xl font-bold text-center mt-4">Our Services</h4>
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
              <h1 className="text-gray-200 text-2xl title-font font-medium mb-4">What do we do?</h1>
              <p className="leading-relaxed mb-4">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto blanditiis explicabo, placeat sed ad doloribus natus sapiente dolore similique, consectetur quas pariatur optio itaque? Nulla odio eius laudantium consectetur dolorum.</p>
              <div className="flex border-t border-gray-200 py-2">
                <span className="text-gray-300">UI/UX Design</span>
              </div>
              <div className="flex border-t border-gray-200 py-2">
                <span className="text-gray-300">Android Development</span>
              </div>
              <div className="flex border-t border-b mb-6 border-gray-200 py-2">
                <span className="text-gray-300">Web Development</span>
              </div>
            </div>
            <img alt="ecommerce" className="lg:w-1/2 w-60 lg:h-auto h-52 " src={servImg} />
          </div>
        </div>
      </section>
    </div>
  )
}

export default Services