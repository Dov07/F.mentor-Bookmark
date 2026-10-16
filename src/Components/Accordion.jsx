import React from 'react'
import arrow from '../assets/icon-arrow.svg'
const Accordion = () => {

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
        <div>
            <div>
                <h3>Frequently Asked Questions</h3>
                <p>Here are some of our FAQs. If You have any other questions you'd like answered please feel free to email us.</p>
            </div>

            <div>
                {
               accordion.map((add)=>(
                <>
                 <div>
                    <h3>{add.title}</h3>
                    <button><img src={arrow} alt="arrow" /></button>
                </div>
                <div>
                    <p>{add.answer}</p>

                </div>
                </>
               ))

}

            </div>


        </div>
    )
}

export default Accordion