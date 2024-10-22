import React from 'react';
import { motion } from 'framer-motion';

function Footer() {

  // Define motion variants for animation
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: 'easeInOut'
      }
    }
  };

  return (
    <motion.div
      className='w-screen h-72 text-white'
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }} // triggers animation only once
    >
      <div className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <motion.div className="flex flex-wrap md:text-left text-center order-first"
            variants={fadeInUp}
          >
            {/* Products Section */}
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
                PRODUCTS
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <a className="text-gray-600 hover:text-gray-800" href="#">Product 1</a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800" href="#">Product 2</a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800" href="#">Product 3</a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800" href="#">Product 4</a>
                </li>
              </nav>
            </div>

            {/* Services Section */}
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
                SERVICES
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <a className="text-gray-600 hover:text-gray-800" href="#">Consulting</a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800" href="#">Customer Support</a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800" href="#">Custom Solutions</a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800" href="#">Maintenance</a>
                </li>
              </nav>
            </div>

            {/* Resources Section */}
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
                RESOURCES
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <a className="text-gray-600 hover:text-gray-800" href="#">Blog</a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800" href="#">Case Studies</a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800" href="#">White Papers</a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800" href="#">E-books</a>
                </li>
              </nav>
            </div>

            {/* Subscribe Section */}
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
                SUBSCRIBE
              </h2>
              <div className="flex xl:flex-nowrap md:flex-nowrap lg:flex-wrap flex-wrap justify-center items-end md:justify-start">
                <div className="relative w-40 sm:w-auto xl:mr-4 lg:mr-0 sm:mr-4 mr-2">
                  <label htmlFor="footer-field" className="leading-7 text-sm text-gray-600">
                    Email
                  </label>
                  <input
                    type="email"
                    id="footer-field"
                    name="footer-field"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    placeholder="you@example.com"
                  />
                </div>
                <button className="lg:mt-2 xl:mt-0 flex-shrink-0 inline-flex text-white bg-custom-gradient border-0 py-2 px-6 focus:outline-none hover:scale-110 hover:duration-300 hover:transition-all rounded">
                  Subscribe
                </button>
              </div>
              <p className="text-gray-500 text-sm mt-2 md:text-left text-center">
                Get the latest updates and offers directly in your inbox.
              </p>
            </div>
          </motion.div>
        </div>

        <div className="">
          <div className="container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col">
            <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
            <img width="24" height="24" src="https://img.icons8.com/material-two-tone/24/city-buildings.png" alt="city-buildings"/>
              <span className="ml-3 text-xl">Virutal DOMinators</span>
            </a>
            <p className="text-sm text-gray-500 sm:ml-6 sm:mt-0 mt-4">
              © 2024 Virutal DOMinators —
              <a href="https://twitter.com/yourcompany" rel="noopener noreferrer" className="text-gray-600 ml-1" target="_blank">
                @VirutalDOMinators
              </a>
            </p>
            <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
              <a className="text-gray-500" href="https://facebook.com/yourcompany" target="_blank">
                <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                </svg>
              </a>
              <a className="ml-3 text-gray-500" href="https://twitter.com/yourcompany" target="_blank">
                <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                </svg>
              </a>
              <a className="ml-3 text-gray-500" href="https://instagram.com/yourcompany" target="_blank">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"></path>
                  <path d="M17.5 6.5h.01"></path>
                </svg>
              </a>
              <a className="ml-3 text-gray-500" href="https://linkedin.com/yourcompany" target="_blank">
                <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" className="w-5 h-5" viewBox="0 0 24 24">
                  <path stroke="none" d="M16 8a6 6 0 00-12 0v7a6 6 0 0012 0V8z"></path>
                  <rect width="6" height="6" x="9" y="9"></rect>
                  <rect width="12" height="6" x="6" y="16"></rect>
                </svg>
              </a>
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Footer;
