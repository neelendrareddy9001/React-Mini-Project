import React, { useState } from 'react'
import {AioutlineClose, AiOutlineMenuUnfold} from 'react-icons/ai'

const Navbar = () => {
    const [menu, setMenu] = useState(false)
    const handleChange = () => {
        setMenu(!menu)
    }
    const closeMenu = () => {
        setMenu(false)
    }
  return (
    <div>
      <div>
        <div className='flex flex-row justify-between p-5 lg:px-32 px-5 bg-gradient-to-r from-backgroundColor to-brightColor shadow-[0_3px_10px_rgba(0,0,0,0.2'>
            <div className='flex flex-row items-center cursor-pointer gap-2'>
                <span>
                    <SiCoffeescript />
                </span>
                <h1 className='text-xl font-semibold'>CafePulse</h1>
            </div>
            <nav className='hidden md:flex flex-row items-center gap-8 text-lg font-medium'>
                <Link to="home" spy={true} smooth={true} duration={500} className="cursor-pointer">Home
                    <span className='absolute inset-x-0 bottom-0 h-0.5 bg-black transform scale-x-0 origin-left transition-transform group-hover:scalex-100'></span>
                </Link>
                <Link to="menu" spy={true} smooth={true} duration={500} className="cursor-pointer">Menu</Link>
                <Link to="about" spy={true} smooth={true} duration={500} className="cursor-pointer">About</Link>
                <Link to="products" spy={true} smooth={true} duration={500} className="cursor-pointer">Products</Link>
                <Link to="review" spy={true} smooth={true} duration={500} className="cursor-pointer">Contact</Link>
            </nav>
            <div>
                <Button title="Login"></Button>
            </div>

            <div className='md:hidden flex items-center'>
                {menu ? (
                    <AioutlineClose size={25} onclick={handleChange}/>
                ) : (
                    <AiOutlineMenuUnfold size={25} onClick={handleChange} />
                )}
            </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
