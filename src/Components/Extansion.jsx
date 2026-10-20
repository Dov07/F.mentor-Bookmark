import React, { version } from 'react'
import chrome from '../../images/logo-chrome.svg'
import firefox from '../../images/logo-firefox.svg'
import opera from '../../images/logo-opera.svg'
import dots from '../../images/bg-dots.svg'
const Extansion = () => {

    const extansion = [

        {
            id: 1,
            title: "Add to Chrome",
            version: "Minimum version 62",
            img: chrome,
        },
        {
            id: 2,
            title: "Add to Firefox",
            version: "Minimum version 55",
            img: firefox,
        },
        {
            id: 3,
            title: "Add to Opera",
            version: "Minimum version 46",
            img: opera,
        }
    ]

    return (
        <div className='w-full h-auto flex flex-col gap-4'>
            <div className='w-full h-auto p-6 flex flex-col gap-5 justify-center items-center tex-center
            lg:w-[50%] lg:m-auto
            '>
                <h3 className='text-2xl text-center font-medium lg:text-4xl'>
                    Download the Extansion
                </h3>
                <p className='text-center text-xl lg:text-2xl '>
                    We've got more browsers in the pipeline. Please do let us know if you've got a favorite you'd like us to prioritize.
                </p>


            </div>
            <div className='lg: w-full lg:h-auto lg:flex lg:justify-center'>
                {

                    extansion.map((e, index) => (
                        <div key={e.id} className= {` lg:w-auto w-full h-auto flex flex-col justify-center items-center p-6
                        ${index === 1 ? 'lg:mt-18' : ''}
        ${index === 2 ? 'lg:mt-34' : ''}
                        `}>
                            <div className='flex flex-col justify center items-center py-4 shadow-md rounded-lg
                        '>
                                <div className=' w-full flex flex-col gap-6 justify-center items-center' key={e.id}>
                                    <img src={e.img} alt={e.title} />
                                    <h3>{e.title}</h3>
                                    <p>{e.version}</p>
                                </div>

                                <div className='py-6 w-full flex flex-col gap-6 justify-center items-center '>
                                    <img src={dots} alt="dots" />
                                    <button className='w-[15rem] text-center bg-[hsl(231,69%,60%)] p-4 rounded-md border border-transparent text-white cursor-pointer hover:text-[hsl(231,69%,60%)] hover:bg-white hover:border-[hsl(231,69%,60%)]'>Add & Install Extension</button>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Extansion