import React, { useState } from 'react'
import tab1 from '../../images/illustration-features-tab-1.svg'
import tab2 from '../../images/illustration-features-tab-2.svg'
import tab3 from '../../images/illustration-features-tab-3.svg'





const HeroM = () => {
    const content = [
        {
            id: 1,
            title: "Bookmark in one Click",
            desc: "Organize your bookmark however you like. Our simple drag-and-drop interface gives you complate control over how you manage your favorite sites.",
            img: tab1,
        },
        {
            id: 2,
            title: "Intelligent search",
            desc: "Our powerful search feature will help you find saved sites in no named at all. No need to trawl through all of your bookmarks.",
            img: tab2,
        },
        {
            id: 3,
            title: "Share your Bookmarks",
            desc: "Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button",
            img: tab3,
        }
    ]
    const headTitle = [
        {
            id: 1,
            title: "Simple Bookmarking",
        },
        {
            id: 2,
            title: "Speed Searching"
        },
        {
            id: 3,
            title: "Easy Sharing"
        },


    ]


    const [HandleID, setHandleID] = useState(1)

    const activeContent = content.find((c) => c.id === HandleID)

    console.log(HandleID)
    return (
        <div className='w-full py-10'>
            <div className='w-auto h-auto flex flex-col justify-center gap-2'>
                <h3 className='text-center text-4xl font-medium'>Features</h3>
                <p className='text-center p-3 text-lg'>
                    Our aim is to make it quick and easy for you to access your favorite websites. Your bookmarks sync between your devices so you can access them on the go.
                </p>
            </div>

            <div className=''>
                <div className='flex flex-col items-center px-10 py-4 '>
                    {headTitle.map((e, index) => (
                        <div
                            className={`w-full h-auto p-2 flex justify-center border-[lightgrey] ${index === 0 ? 'border-t border-b' : ''} ${index === headTitle.length - 1 ? 'border-t border-b' : ''}`}
                            key={e.id}
                        >
                            <button className='w-[70%] p-4 cursor-pointer hover:p-4  hover:border-b-3 hover:border-b-[hsl(0,94%,66%)]' onClick={() => setHandleID(e.id)}>{e.title}</button>
                        </div>
                    ))}
                </div>

                <div className='py-10 '>
                    {
                        activeContent && (
                            <div className='relative w-full flex flex-col items-center justify-center text-center p-4 gap-20  '>
                                <img className='w-90' src={activeContent.img} alt={activeContent.title} />
                                <div className='w-full flex flex-col gap-6 p-4'>
                                    <h3 className='text-4xl font-medium '>{activeContent.title}</h3>
                                    <p className='text-xl'>{activeContent.desc}</p>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>


        </div>
    )
}

export default HeroM