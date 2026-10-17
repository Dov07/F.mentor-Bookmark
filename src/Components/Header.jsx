import React, { useState } from 'react'
import logo from  '../assets/logo-bookmark.svg'
import logo2 from '../assets/logo-bookmark1.svg'
import Hamburger from '../assets/icon-hamburger.svg'
import Close from '../assets/icon-close.svg'

const Header = () => {


const list =[
  "features", "pricing", "contact"
]  
  
const [open, setopen] = useState(false)

const controlOpen= () =>{
    setopen(prev=>!prev)
}
console.log(open)
  return (
    <div className='w-full flex px-10 py-6'>
        <div className={`${open ? 'z-1' : ''} w-full h-auto flex justify-between ` }>

          <a href="/"><img className='cursor-pointer' src={`${open? logo2: logo}`} alt="" /></a>
         <button className={`${open ? '' : ''} cursor-pointer `} onClick={controlOpen}> <img src={open ? Close: Hamburger} alt="" />  </button>
        </div>

       <nav className= {`${open ? 'absolute' : 'hidden'} w-full bg-[hsl(229,31%,21%)] top-0 left-0 py-10 " flex flex-col `}>
          <ul className=' flex flex-col items-center justify-center py-10'>
          {
          
            list.map((list) =>(
              <li  className='size-[80%] text-center text-2xl uppercase p-6 text-white font-extralight tracking-wide border-t border-y '>{list}</li>
            ))
          }
          </ul>

          <button className='w-100 self-center text-3xl border p-2 uppercase cursor-pointer  text-white '>Login</button>
       </nav>
    </div>
  )
}

export default Header