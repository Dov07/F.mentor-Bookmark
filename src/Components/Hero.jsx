import React from 'react'
import hero from '../../images/illustration-hero.svg'


const Hero = () => {
    return (
        <div className='w-full h-auto py-10 flex flex-col lg:pl-8 lg:py-10 lg:flex-row-reverse '>

            <div className='  lg:w-[50%] relative  h-auto w-auto flex justify-center lg:justify-center '>
                <img className='w-[90%] h-auto lg:w-[80%] ' src={hero} alt="" />
                <div className=' absolute right-0 bottom-0 w-[70%] lg:w-[60%] h-[75%] bg-[hsl(231,69%,60%)] rounded-l-full z-[-1] '></div>
            </div>
            <div className='lg:w-[50%] lg:h-auto lg:pl-10 '>
                <div className='py-10  flex flex-col gap-5 p-5 lg:w-full '>
                    <h2 className='text-center  text-4xl font-medium lg:text-start lg:text-5xl'>
                        A Simple Bookmark Manager
                    </h2>
                    <p className='text-center lg:text-start text-[1.2rem] lg:text-[1.6rem]'>
                        A clean and simple interface to organize your favorite websites. Open a new browser tab and see your sites load instantly. Try it for free
                    </p>

                </div>
                <div className='sm:w-full flex gap-4 flex justify-center'>
                    <button className='bg-[#5368df] p-4 text-white rounded-sm cursor-pointer hover:bg-white hover:text-[#5368df] hover:border-2 font-medium '>Get in on Chrome</button>
                    <button className='bg-[#f7f7f7 ]  p-4 shadow-xl rounded-sm cursor-pointer hover:border-2 font-medium'>Get it on Firefox</button>
                </div>
            </div>
        </div>
    )
}

export default Hero