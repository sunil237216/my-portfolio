'use client';
import React, { useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { assets } from '../../../assets/assets'
import { useRef } from 'react'

const Navbar = () => {

  const [scroll, setScroll] = React.useState(false);

    const sideMenuRef = useRef();
    const openMenu = () => {
      sideMenuRef.current.style.transform = 'translateX(-16rem)';
    }

    const closeMenu = () => {
      sideMenuRef.current.style.transform = 'translateX(16rem)';
    }

    useEffect(() => {
      const handleScroll = () => {
        if(window.scrollY > 50){
          setScroll(true);
        } else{
          setScroll(false);
        }
      };

      window.addEventListener('scroll', handleScroll);
      
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);

  return (
    <>
    <div>

        <Image src={assets.header_bg_color} alt='' className='fixed top-0 right-0 w-11/12 -z-10  w-full translate-y-[-80%]' />
    </div>
    <nav className={`${scroll ? 'bg-white bg-opacity-50 backdrop-blur-lg shadow-sm' : ''} w-full fixed px-5 flex items-center justify-between pt-5 px-8 lg:px-8 xl:px-[8%] z-50 py-4`}>
        <Link href='/#top'>
            <Image src={assets.my_logo} alt='' className='w-18 cursor-pointer mr-14' />
        </Link>
      <ul className={`hidden md:flex items-center  gap-6 la-gap-8 rounded-full px-12 py-3  ${scroll ?'bg-white shadow-sm bg-opacity-50': ''}`}>
        <li> <Link className="oyo-font" href='/#top'>Home</Link> </li>
        <li> <Link className="oyo-font" href='/#about'>About</Link> </li>
        {/* <li> <Link className="oyo-font" href='/#projects'>Projects</Link> </li> */}
        <li> <Link className="oyo-font" href='/#services'>Services</Link> </li>
        <li> <Link className="oyo-font" href='/blog'>Blog</Link> </li>
      </ul>

      <div className='flex items-center gap-4'>
        <button>
            <Image src={assets.moon_icon} alt='Toggle Theme' className='w-6' />
        </button>
        <Link href='/#contact' className='hidden oyo-font lg:flex items-center gap-3 px-10 py-2.5 border border-grey-500 rounded-full ml-4'>Contact <Image src={assets.arrow_icon} alt='Contact' className='w-3'/></Link>
        <button className='block md:hidden ml-3' onClick={openMenu}>
            <Image src={assets.menu_black} alt='Toggle Theme' className='w-6' />
        </button>
      </div>


      {/* mobile menu */}
      <div className='md:hidden'>
        <ul ref={sideMenuRef} className='flex flex-col  gap-4 py-20 fixed px-10 top-0 bottom-0 w-64 z-50 bg-rose-50 -right-64 h-screen-50 transition duration-500'>
          <div className='absolute top-6 right-6' >

            <Image src={assets.close_black} alt='Close Menu' className='w-5  cursor-pointer' onClick={closeMenu} />
          </div>

          <li> <Link className="oyo-font" onClick={closeMenu} href='/#top'>Home</Link> </li>
          <li> <Link className="oyo-font" onClick={closeMenu} href='/#about'>About</Link> </li>
          <li> <Link className="oyo-font" onClick={closeMenu} href='/#projects'>Projects</Link> </li>
          <li> <Link className="oyo-font" onClick={closeMenu} href='/#contact'>Contact</Link> </li>
          <li> <Link className="oyo-font" onClick={closeMenu} href='/blog'>Blog</Link> </li>
        </ul>
      </div>
    </nav>
    </>
  )
}

export default Navbar
