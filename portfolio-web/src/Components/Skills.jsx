import React from 'react'
import { skills } from '../data/assets'

const Skills = () => {
  return (
   <div className='w-full h-screen py-24 px-8 scroll-mt-20' id='skill'>
    <h1 className='text-3xl text-center md:text-5xl my-2 font-semibold'>My Skills</h1>
     <div className="flex flex-col items-start md:flex-row  gap-6">
     <div className='w-full md:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-5 items-center'>
     {skills.map((skill) => (
        <div key={skill.id} className="flex flex-col gap-5 md:gap-10 overflow-hidden"> 
          <p className="text-left text-base md:text-xl text-amber-800 font-semibold capitalize">{skill.name}</p>
          <div className='relative flex flex-col items-center h-[5px] min-w-[150px] bg-gray-400 rounded-lg'>
            <hr className='absolute top-0 left-0 h-full w-[60%] bg-blue-600 rounded-lg'/>
          </div>
         
        </div>
      ))}
     </div>
      <div className='w-full md:w-1/2'>
        <h1 className='text-xl md:text-2xl text-center my-5 font-semibold uppercase text-blue-600'>Our Skill Design</h1>
        <p className='text-base md:text-lg'>Looking for a beautiful website template for adding your
           CV or portfolio? Take a look at this CV Portfolio Elementor
        website template. This clean and well-structured CV template helps you to create a positive impression and make the opportunity to get hired. You can display your cover letter on the Cover Letter page and able to share your job experience on the Experience page. Even your clients can easily download your CV using the navigation menu’ Download CV link.</p>
      </div>
    </div>
   </div>
  );
};

export default Skills;
