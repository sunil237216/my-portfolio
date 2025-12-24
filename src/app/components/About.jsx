import React from 'react'
import { assets, infoList, toolsData } from '../../../assets/assets'
import Image from 'next/image'

const About = () => {
  return (
    <div id="about" className='w-full px-[12%] py-10 scroll-mt-20'>
    <h4 className='text-center mb-2 text-lg font-Ovo'>Introduction</h4>
    <h2 className='text-center text-5xl font-Ovo'>About me</h2>

    <div className='flex w-full flex-col lg:flex-row gap-10 mt-10 items-center gap-20 my-20'>
     {/* <div className='w-54 sm:w-50 rounded-3xl max-w-none'>
        <Image src={assets.my_photo} alt='User Image' className='w-full rounded-3xl' />
     </div> */}
     <div className='flex-1'>
      <p className='mb-10 max-2-2xl font-Ovo'>
        I'm a passionate frontend developer with a knack for creating dynamic and responsive web applications. With a strong foundation in both front-end and back-end technologies, I strive to build seamless user experiences that are both visually appealing and functionally robust.
      </p>
      <ul className='grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl'>
        {infoList.map(({icon, iconDark, title,description},index) => (
          <li key={index} className='border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-sky-100 hover:-translate-y-1 duration-500'>
            <Image src={icon} alt={title} className='w-7 mt-3' />
            <div>
              <h3 className='font-Ovo text-lg'>{title}</h3>
              <p className='text-gray-600 text-sm'>{description}</p>
            </div>
          </li>
        ))}
      </ul>

      <h4 className='my-6 text-gray-700 font-Ovo'>Tools I use</h4>
      <ul className='flex items-center gap-3 sm:gap-5'>
        {toolsData.map((tool, index) => (
          <li key={index} className='flex items-center justify-center w-12 sm:w-14 aspect-sqaure border border-gray-400 rounded-lg cursor-pointer hover:bg-sky-100 hover:-translate-y-1 duration-500 p-2'>
            <Image src={tool} alt='Tool' className='w-5  sm:w-7' />
          </li>
        ))}
      </ul>

     </div>

    </div>


      
    </div>
  )
}

export default About
