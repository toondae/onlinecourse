import React, { useState } from 'react'
import { Link } from 'react-router-dom';


const Navbar = () => {
  const [isMenuOpen, setIsmenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsmenuOpen(!isMenuOpen)
  }

  return (
    <nav className='bg-black p-4'>
      
      <div className='container mx-auto flex items-center justify-between md:px-12'>
        <h1 className='text-white text-2xl'>Online Course</h1>
        <div className='flex items-center md:hidden'>
          <button className='text-white' onClick={toggleMenu}>
            <svg 
              fill='none' 
              stroke='currentColor' 
              strokeLinecap='round' 
              strokeLinejoin='round'
              strokeWidth='2'
              viewBox='0 0 24 24'
              className='w-6 h-6'
            >
              <path d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>

        <ul className='hidden md:flex items-center space-x-4'>
          <li><Link to='/home' className='text-white hover:font-bold'>Home</Link></li>
          <li><Link to='/course' className='text-white hover:font-bold'>Course</Link></li>
          <li><Link to='/blog' className='text-white hover:font-bold'>Blog</Link></li>
          <li>
            <button className='px-2 py-1 bg-gray-200 rounded-md transition-transform duration-300 hover:bg-gray-100 hover:font-semibold'>
              <Link to='/login' className='text-black transition-transform duration-300 '>
                Login / Register
              </Link>
            </button>
          </li>
        </ul>
      </div>
      
      {isMenuOpen? (
        <ul className='flex flex-col items-center justify-center text-lg md:hidden '>
          <li className='py-1'><Link to='/home' className='text-gray-300 hover:text-white hover:border-b-2 border-gray-300'>Home</Link></li>
          <li className='py-1'><Link to='/course' className='text-gray-300 hover:text-white hover:border-b-2 border-gray-300'>Course</Link></li>
          <li className='py-1'><Link to='/blog' className='text-gray-300 hover:text-white hover:border-b-2 border-gray-300'>Blog</Link></li>
          <li className='py-1'><Link to='/login' className='text-gray-300 hover:text-white hover:border-b-2 border-gray-300'>Log-in / Register</Link></li>
        </ul>
      ) : null}
            
    </nav>
  )
}

export default Navbar