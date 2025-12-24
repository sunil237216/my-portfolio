import Image from 'next/image'
import React from 'react'
import { assets } from '../../../assets/assets'

const Header = () => {
  return (
    <div className='w-11/12 max-w-3xl text-center flex flex-col items-center justify-center min-h-screen mx-auto' id='top'>
      <div>
        <Image src={assets.my_photo} alt='' className='w-32 rounded-full' />
        </div>
            <h3 className='flex item-end gap-2 text-xl md:text-2xl mb-2'>Hi! I'm Sunil Jadhav  <Image src={assets.hand_icon} alt='' className='w-6' /></h3>
            <h1 className='text-3xl  sm:text-6xl  lg:text-[66px]   font-Ovo'>frontend Developer based in Pune</h1>
            <p className='text-lg mt-6 mb-6 max-w-2xl'>I am a passionate frontend developer with expertise in creating dynamic and responsive websites. I love turning ideas into reality using code.</p>

            <div className='flex flex-col sm:flex-row gap-4 mt-6'>
                <a href='#contact' className='px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2'>Contact <Image src={assets.right_arrow_white} alt='Contact' className='w-4'/></a>
                <a href='/sample-resume.pdf'  className='px-10 py-3 border rounded-full border-grey-500 flex items-center gap-2' download> My Resume <Image src={assets.download_icon} alt='Resume' className='w-4'/></a>

            </div>
    </div>
  )
}

export default Header
