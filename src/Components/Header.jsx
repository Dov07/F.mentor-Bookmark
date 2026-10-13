import React, { useState } from 'react'
import logo from  '../assets/logo-bookmark.svg'
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
    <div>
        <div>

          <a href="/"><img src={logo} alt="" /></a>
         <button onClick={controlOpen}> <img src={open ? Hamburger: Close} alt="" />  </button>
        </div>

       <nav>
          <ul>
          {
          
            list.map((list) =>(
              <li>{list}</li>
            ))
          }
          </ul>

          <button>Login</button>
       </nav>
    </div>
  )
}

export default Header