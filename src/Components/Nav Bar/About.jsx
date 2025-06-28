import React from 'react'
import Programmer from '../../assets/programmer.png'

const About = () => {
  return (
    <div className='w-full bg-white py-1 px-4'>
      <div className='max-w-[1240px] w-full mx-auto grid md:grid-cols-2'>
        <img className='w-[400px] mx-auto' src={Programmer} alt="" />
        <div className='flex flex-col justify-center'>
          <p className='font-bold uppercase text-primary/70'>Introduction About Me</p>

          <h2 className='font-bold md:text-4xl sm:text-3xl text-2xl py-2'>Frontend Web Developer</h2>

          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum culpa commodi nam aliquam, optio, repudiandae sint alias recusandae facere sapiente assumenda animi quod exercitationem fugit rem modi? Cumque, explicabo animi?</p>
          <div className='flex items-center justify-center'>
            <button className='bg-primary py-2 px-6 rounded-full text-black mt-4'>Contact Us</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About