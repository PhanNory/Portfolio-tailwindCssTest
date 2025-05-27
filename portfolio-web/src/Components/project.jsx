import React from 'react'
import {projects} from '../data/assets'

const project = () => {
  
    const categories = [
      { id: 'all', name: 'All' },
      { id: 'ui-ux', name: 'UI/UX Design' },
      { id: 'web', name: 'Web App' },
      { id: 'mobile', name: 'Mobile' },
    ];
  return (
    <div id='project' className='w-full py-6 px-6 scroll-mt-20 '>
        <h1 className='text-4xl text-center font-extrabold '>My Projects</h1>
        <ul className='flex flex-wrap gap-3 justify-center mt-5 py-4'>
            {categories.map((category)=> (
                <li key={category.id} className='px-6 py-4 rounded-md transition-colors duration-200 bg-blue-500 text-white
                hover:bg-blue-400 cursor-pointer text-sm'>{category.name}</li>
            ))}

        </ul>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-6 max-w-7xl mx-auto px-6 mt-10 overflow-hidden">
        {projects.map((pro, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow p-4">
            <img src={pro.image} alt={project.title} className="rounded mb-4"/>
            <h4 className="text-xl font-semibold mb-2">{pro.title}</h4>
            <p className="text-gray-600 text-sm mb-4">{pro.description}</p>
            <p>{pro.tags}</p>
            <div className="flex space-x-3">
              <a href={pro.liveLink} target="_blank" className="text-blue-600 font-medium text-lg">Live</a>
              <a href={pro.codeLink} target="_blank" className="text-gray-600 font-medium text-lg">Code</a>
            </div>
          </div>
        ))}
      </div>
      
    </div>
  )
}

export default project
