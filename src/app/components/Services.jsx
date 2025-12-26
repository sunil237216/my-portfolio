import React from 'react'
import { assets, serviceData } from '../../../assets/assets'
import Image from 'next/image'

const Services = () => {
  return (
   <div id='services' className='w-full px-[12%] scroll-mt-20'>
    <h4 className='text-center mb-2 text-lg font-Ovo'>What I Offer</h4>
    <h2 className='text-center text-5xl font-Ovo'>My Services</h2>

    <p className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'>
        I specialize in creating powerful, scalable web solutions tailored to your business needs. From concept to deployment, I deliver excellence in every project.
    </p>

    <div className='grid  grid-cols-1 md:grid-cols-2 gap-6 my-10'>
        {serviceData.map(({icon, title, description, link}, index) => (
          <div key={index} className='border border-gray-400 rounded-lg px-8 py-12 hover:shadow-black cursor-pointer hover:shadow-lg hover:-translate-y-1 duration-500 hover:bg-lightHover hover:border-gray-500'>
            <Image src={icon} alt='' className='w-10' />
            <h3 className='text-xl my-4 text-gray-700 font-semibold'>{title}</h3>
            <p className='text-sm text-gray-600 leading-6'>{description}</p>
            {link && <a href={link} className='flex items-center gap-2 text-sm mt-5 text-blue-600 hover:text-blue-700'>Learn More <Image src={assets.right_arrow} alt='Arrow' className='w-4' /></a>}
          </div>
        ))}
    </div>
        </div>
  )
}

export default Services