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
        <div>
            <div>
                <h3>
                    Download the Extansion
                </h3>
                <p>
                    We've got more browsers in the pipeline. Please do let us know if you've got a favorite you'd like us to prioritize.
                </p>


            </div>
            {
                extansion.map((e) => (
                    <div>
                        <div key={e.id}>
                            <img src={e.img} alt={e.title} />
                            <h3>{e.title}</h3>    
                            <p>{e.version}</p>
                        </div>
                        
                        <div>
                            <img src={dots} alt="dots" />
                            <button>Add & Install Extension</button>
                        </div>

                    </div>
                ))
            }

        </div>
    )
}

export default Extansion