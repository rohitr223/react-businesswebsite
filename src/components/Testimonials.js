import React from 'react'
import girlImg from "../images/girl.jpg"
import manImg from "../images/boy1.jpg"
import boyImg from "../images/boy2.jpg"

const Testimonials = () => {
  return (
    <div>
        <section className="text-gray-300 body-font" id="testimonials">
          <h4 className="text-2xl font-bold text-center mt-4">Testimonials</h4>
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-wrap -m-4">
              <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
                <div className="h-full text-center">
                  <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src={girlImg} />
                  <p className="leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus, odio! Obcaecati deleniti mollitia necessitatibus consequuntur?</p>
                  <span className="inline-block h-1 w-10 rounded bg-yellow-400 mt-6 mb-4"></span>
                  <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">HOLDEN CAULFIELD</h2>
                  <p className="text-gray-200 font-bold">Our Customer</p>
                </div>
              </div>
              <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
                <div className="h-full text-center">
                  <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src={manImg} />
                  <p className="leading-relaxed">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas voluptates sequi mollitia impedit reiciendis vel.</p>
                  <span className="inline-block h-1 w-10 rounded bg-yellow-400 mt-6 mb-4"></span>
                  <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">ALPER KAMU</h2>
                  <p className="text-gray-200 font-bold">Our Customer</p>
                </div>
              </div>
              <div className="lg:w-1/3 lg:mb-0 p-4">
                <div className="h-full text-center">
                  <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src={boyImg} />
                  <p className="leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui perspiciatis quaerat accusantium, possimus nemo nulla.</p>
                  <span className="inline-block h-1 w-10 rounded bg-yellow-400 mt-6 mb-4"></span>
                  <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">HENRY LETHAM</h2>
                  <p className="text-gray-200 font-bold">Our Customer</p>
                </div>
              </div>
            </div>
          </div>
      </section>
    </div>
  )
}

export default Testimonials