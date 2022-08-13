import React from 'react'

const About = () => {
  return (
    <div>
      <section className="text-gray-300 body-font" id="about">
        <h4 className="text-2xl font-bold text-center mt-4">About Us</h4>
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
            <div className="p-4 md:w-1/3 flex">
              <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4 flex-shrink-0">
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-6 h-6" viewBox="0 0 24 24">
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                </svg>
              </div>
              <div className="flex-grow pl-6">
                <h2 className="text-gray-200 text-lg title-font font-medium mb-2">UI/UX Design</h2>
                <p className="leading-relaxed text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde voluptatem odio est dolorem voluptas minus mollitia iure optio blanditiis beatae.</p>
              </div>
            </div>
            <div className="p-4 md:w-1/3 flex">
              <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4 flex-shrink-0">
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-6 h-6" viewBox="0 0 24 24">
                  <circle cx="6" cy="6" r="3"></circle>
                  <circle cx="6" cy="18" r="3"></circle>
                  <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
                </svg>
              </div>
              <div className="flex-grow pl-6">
                <h2 className="text-gray-200 text-lg title-font font-medium mb-2">Android App Development</h2>
                <p className="leading-relaxed text-base">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem, architecto consequuntur qui inventore nulla commodi dolores eveniet labore repellendus nam?</p>
              </div>
            </div>
            <div className="p-4 md:w-1/3 flex">
              <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4 flex-shrink-0">
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-6 h-6" viewBox="0 0 24 24">
                  <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </div>
              <div className="flex-grow pl-6">
                <h2 className="text-gray-200 text-lg title-font font-medium mb-2">Web Development</h2>
                <p className="leading-relaxed text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita incidunt quisquam rem veniam consequatur nisi impedit harum, magnam animi delectus.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About