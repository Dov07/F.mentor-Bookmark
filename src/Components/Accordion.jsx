import React, { useState } from 'react'
import arrow from '../assets/icon-arrow.svg'
const Accordion = () => {


    const [openId, setOpenId] = useState(null)

    const accordion = [
        {
            id: "random1",
            title: "What is Bookmark?",
            answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, eum. Doloremque ea aperiam quibusdam ut nostrum voluptatum id. Error, at?",
        },
        {

            id: "random2",
            title: "How can I request a new browser?",
            answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, eum. Doloremque ea aperiam quibusdam ut nostrum voluptatum id. Error, at?",

        },
        {
            id: "random3",
            title: "Is there a mobile app?",
            answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, eum. Doloremque ea aperiam quibusdam ut nostrum voluptatum id. Error, at?",

        },
        {


            id: "random4",
            title: "What about other Chromium browsers?",
            answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, eum. Doloremque ea aperiam quibusdam ut nostrum voluptatum id. Error, at?",

        },
    ]



    return (
        <div className='p-4 w-full flex flex-col gap-6 lg:w-[50%] m-auto'>
            <div className='w-full h-auto flex flex-col gap-4'>
                <h3 className='text-center font-medium text-3xl'>Frequently Asked Questions</h3>
                <p className='text-center'>Here are some of our FAQs. If You have any other questions you'd like answered please feel free to email us.</p>
            </div>

            <div>
                {
                    accordion.map((add) => (
                       <div className='p-4 border-b flex flex-col gap-4 ' key={add.id}>
                            <button
                                type="button"
                                onClick={() => setOpenId(openId === add.id ? null : add.id)}
                                className='flex justify-between cursor-pointer hover:text-[hsl(0,94%,66%)] text-left'
                                aria-expanded={openId === add.id}
                                aria-controls={`answer-${add.id}`}
                            >
                                <h3 className='font-medium'>{add.title}</h3>
                                <img
                                    src={arrow}
                                    alt=""
                                    className={` h-[.9rem] transition-transform duration-200 ${openId === add.id ? "rotate-180" : ""}`}
                                />
                            </button>
                            <div
                                id={`answer-${add.id}`}
                                className={`grid overflow-hidden transition-[grid-template-rows,opacity] duration-300 ease-in-out ${openId === add.id ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
                                aria-hidden={openId !== add.id}
                            >
                                <div className="min-h-0 overflow-hidden">
                                <p>{add.answer}</p>
                                </div>
                            </div>
                        </div>
                    ))

                }

            </div>


        </div>
    )
}

export default Accordion