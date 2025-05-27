import React from 'react'
import aboutbg from '../assets/herobg.png'

const About = () => {
  return (
    <div id='about' className='py-16 px-4 md:px-10 bg-slate-300 w-full h-screen scroll-mt-20'>
      <div className="flex flex-col md:flex-row items-center gap-20 justify-center">
        {/* Image */}
        <div className='max-w-[320px] md:w-1/2 hidden md:block'>
          <img
            src={aboutbg}
            alt="Developer"
            className="rounded-2xl shadow-lg w-full object-cover transform scale-x-[-1]"
          />
        </div>

        {/* Text */}
        <div className='max-w-2xl md:w-1/2 text-center md:text-left'>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            About Me
          </h2>
          <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-4">
            Hi! I'm a passionate <span className="font-semibold text-blue-600">Frontend Developer</span> with a knack for
            building beautiful, functional websites. I enjoy turning complex problems into simple,
            intuitive user experiences using modern tools like <span className="font-semibold text-blue-600">React, Tailwind CSS</span>, and JavaScript.
          </p>
          <p className="text-gray-600 text-base md:text-lg leading-relaxed">
            I'm continuously learning and love building projects that combine clean code, solid performance,
            and engaging design. Currently open to internships and junior developer roles.
          </p>
          <div className="mt-6">
            <a
              href="#projects"
              className="inline-block px-6 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
            >
              View Projects
            </a>
          </div>
        </div>
      </div>

    </div>
  )
}

export default About
