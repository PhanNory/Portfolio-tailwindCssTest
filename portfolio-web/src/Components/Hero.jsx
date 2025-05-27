import React from 'react'
import herobg from '../assets/herobg.png'


const Hero = () => {
  return (
    <div id='hero' className='relative md:h-full w-full overflow-hidden'>
     <div className='flex flex-col items-center justify-between md:flex-row   
       px-8 sm:px-16 md:px-24 lg:px-32 py-16 md:py-12'>
       <div className='flex flex-col items-center md:items-start max-w-2xl text-center md:text-left mt-5 '>
         <h1 className='text-4xl sm:text-5xl lg:text-[80px] mb-2 md:mb-10
            font-bold text-transparent bg-clip-text bg-gradient-to-b from-blue-500 to-green-500 '>Hello i'm Jose</h1>
         <h3 className='text-2xl md:text-4xl font-bold mb-2 md:mb-8'>I am a frontend Developer</h3>
         <p className='mb-4 md:mb-10 text-[14px] md:text-lg'>I’m a passionate Frontend Developer skilled in building responsive,
           user-friendly web interfaces using React, Tailwind CSS, and modern
           JavaScript frameworks. I love turning designs into clean, functional code.</p>
         <button className='hidden md:block items-center justify-center w-[160px] h-[50px] md:h-[60px] md:w-[160px]
              transition-all duration-300 hover:bg-sky-700 bg-sky-500 md:text-xl  text-white rounded-lg cursor-pointer text-lg'>Download CV </button>
       </div>
       <div className='max-w-[220px] sm:max-w-[300px]  md:max-w-[400px] '>
         <img src={herobg} alt="" className='w-full h-full object-cover' />
       </div>
     </div>

   </div>
  )
}

export default Hero
