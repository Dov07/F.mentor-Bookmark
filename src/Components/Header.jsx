import { useState } from 'react'
import logo from  '../assets/logo-bookmark.svg'
import logo2 from '../assets/logo-bookmark1.svg'
import Hamburger from '../assets/icon-hamburger.svg'
import Close from '../assets/icon-close.svg'

const Header = () => {


const list = [
  "features", "pricing", "contact"
]  
  
const [open, setopen] = useState(false)

const controlOpen = () => {
    setopen(prev=>!prev)
}
  return (
    <div className='relative z-50 mx-auto flex w-full max-w-[1200px] items-center justify-between px-6 py-6 lg:max-w-[1330px] lg:px-0 lg:py-10'>
        <div className={`${open ? 'relative z-50' : ''} flex w-full items-center justify-between lg:w-auto`}>

          <a href="/"><img className='w-[148px] cursor-pointer lg:w-[200px]' src={open ? logo2 : logo} alt="Bookmark" /></a>
         <button className='cursor-pointer lg:hidden' onClick={controlOpen} aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open}> <img src={open ? Close : Hamburger} alt="" />  </button>
        </div>

       <nav className={`${open ? 'absolute' : 'hidden'} left-0 top-0 z-40 flex w-full flex-col bg-[hsl(229,31%,21%)] px-6 py-8 lg:static lg:flex lg:w-auto lg:flex-row lg:items-center lg:gap-12 lg:bg-transparent lg:p-0`}>
          <ul className='flex flex-col items-center justify-center py-10 lg:flex-row lg:gap-3'>
          {
          
            list.map((item) =>(
              <li key={item} className='w-full border-y border-white/20 py-5 text-center text-2xl font-extralight uppercase tracking-wide text-white lg:w-auto lg:border-0 lg:py-3 lg:px-3 lg:text-base lg:font-medium lg:text-[hsl(229,31%,21%)] lg:hover:text-[hsl(0,94%,66%)]'>
                {item}
              </li>
            ))
          }
          </ul>

          <button className='mt-6 w-full cursor-pointer rounded-md border-2 border-white px-5 py-3 text-2xl uppercase tracking-wide text-white lg:mt-0 lg:w-auto lg:border-[hsl(0,94%,66%)] lg:bg-[hsl(0,94%,66%)] lg:px-10 lg:py-3 lg:text-base lg:font-medium lg:text-white lg:shadow-md lg:hover:bg-white lg:hover:text-[hsl(0,94%,66%)]'>
            Login
          </button>
       </nav>
    </div>
  )
}

export default Header