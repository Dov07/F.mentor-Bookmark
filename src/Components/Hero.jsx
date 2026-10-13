import React from 'react'
import hero from  '../../images/illustration-hero.svg'


const Hero = () => {
  return (
    <div>

            <div className='top-img'>
                <img src={hero} alt="" />
                <div className='right-shape'></div>
            </div>

            <div>
                <h2>
                    A Simple Bookmark Manager
                </h2>
                <p>
                    A clean and simple interface to organize your favorite websites. Open a new browser tab and see your sites load instantly. Try iş for free
                </p>

            </div>
            <div>
                <button>Get in on Chrome</button>
                <button>Get it on Firefox</button>
            </div>
        
    </div>
  )
}

export default Hero