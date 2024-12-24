import React from 'react'

const Projects = () => {
  return (
    <div className="flex w-[400px] h-[200px] border border-solid-black flex-wrap relative">
    <img src="2024-12-17.png" alt="martex website"className="object-cover w-full h-full" />
    <div className="absolute inset-x-0 bottom-0 flex flex-end bg-black bg-opacity-50 text-white opacity-0 hover:opacity-100 transition-opacity duration-300 flex-col p-[10px]">
        <p className="semibold">Built a responsive digital marketing website clone using HTML, CSS,Javascript and Tailwind CSS</p>
        <a href="https://http://martex-clone.vercel.app" className="text-green-500 text-semibold">https://http://martex-clone.vercel.app</a>
    </div>

    </div>
  )
}

export default Projects