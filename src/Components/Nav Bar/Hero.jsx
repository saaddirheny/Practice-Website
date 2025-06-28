import React from 'react'
import {ReactTyped} from 'react-typed'

const Hero = () => {
  return (
    <div className='text-white '>
      <div className='max-w-[800px] w-full h-screen mt-[-96px] mx-auto items-center flex flex-col justify-center'>
        <p className='uppercase text-[#006859] font-bold p-2'>Practicing Frontend Devlopment</p>

        <h1 className='font-bold md:text-7xl sm:6xl text-4xl p-2 md:p-6'>I'm Saad Ibrahim</h1>

      <div className='flex items-center justify-center'>
        <p className='p-2 md:text-4xl sm:text-3xl text-xl '>Here I'm Practicing</p>
        <ReactTyped
        className='md:text-4xl sm:text-3xl text-xl text-gray-400'
        strings={
          [
            "React JS",
            "Tailwind CSS",
            "Java Script"
          ]
        }
        typeSpeed={140}
        backSpeed={50}
        loop
        />
      </div>
      <p className='text-gray-600 p-2 md:text-2xl text-xl '>Welcome here to explore my practice website. </p>
      <button className='bg-primary py-2 px-6 rounded-full text-black mt-2'>Do Practice</button>

      </div>
    </div>
  )
}

export default Hero