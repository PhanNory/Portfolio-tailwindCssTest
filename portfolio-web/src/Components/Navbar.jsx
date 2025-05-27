import React, { useEffect, useState } from 'react'
import menuicon from '../assets/menuicons.png' 
import closeicon from '../assets/closeicons.png'

const Navbar = () => {

const [showMenu, setShowMenu] = useState(false);

useEffect (() => {
if (showMenu) {
document.body.style.overflow = 'hidden'
}
else {
document.body.style.overflow = 'auto'
}
return ()=> {
document.body.style.overflow = 'auto'
}
},[showMenu])

return (
<div className='fixed top-0 left-0 w-full h-[60px] z-10 '>
  <div className='container mx-auto 
    flex justify-between items-center px-8 md:px-16 lg:px-32 py-6 bg-sky-50'>
    <a href="#" className='text-2xl md:text-4xl text-blue-400 font-extrabold tracking-wider'>Portfolio</a>

    {/*-- Mobile Menu --*/}
    <ul className='hidden md:flex items-center space-x-6 text-gray-700'>
      <li><a href="#hero" className='text-lg transition duration-300
            hover:text-blue-600'>Home</a></li>
      <li><a href="#about" className='text-lg transition duration-300
            hover:text-blue-600'>About</a></li>
      <li><a href="#project" className='text-lg transition duration-300
            hover:text-blue-600'>Projects</a></li>
      <li><a href="#skill" className='text-lg transition duration-300
            hover:text-blue-600'>Skills</a></li>
      <li><a href="#contact" className='text-lg transition duration-300
            hover:text-blue-600'>Contact</a></li>
    </ul>
    <img onClick={()=>setShowMenu(true)} src={menuicon} alt="" className='block md:hidden w-[30px] text-black
    cursor-pointer'/>

    {/* Mobile Menu */}
    <div className={`md:hidden ${showMenu ? 'w-[300px] h-full' : 'w-0 h-0' } fixed overflow-hidden top-0 right-0 z-10
      bg-slate-50 px-8 py-2`}>
      <img onClick={()=> setShowMenu(false)} src={closeicon} alt="CloseIcon" className='w-[40px] float-end
      cursor-pointer'/>
      <ul className="flex flex-col px-4 pb-4 space-y-3 mt-12">
        <li><a onClick={()=> setShowMenu(false)} href="#hero" className="block hover:text-blue-600">Home</a></li>
        <li><a onClick={()=>setShowMenu(false)} href="#about" className="block hover:text-blue-600">About</a></li>
        <li><a onClick={()=>setShowMenu(false)} href="#portfolio" className="block hover:text-blue-600">portfolio</a></li>
        <li><a onClick={()=>setShowMenu(false)} href="#skill" className="block hover:text-blue-600">Skills</a></li>
        <li><a onClick={()=>setShowMenu(false)} href="#contact" className="block hover:text-blue-600">Contact</a></li>
      </ul>
    </div>

  </div>
</div>
  )
}

export default Navbar
