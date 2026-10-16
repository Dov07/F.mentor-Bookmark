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

const activeContent = content.find((c)=> c.id=== HandleID)

console.log(HandleID)
    return (
        <div>
            <div>
                <h3>Features</h3>
                <p>
                    Our aim is to make it quick and easy for you to access your favorite websites. Your bookmarks sync between your devices so you can access them on the go.
                </p>
            </div>

            <div>
                <div>
                    {headTitle.map((e) => (
                        <button key={e.id} onClick={()=>setHandleID(e.id)}>{e.title}</button>
                    ))}
                </div>

                <div>
                    {
                        activeContent &&(
                            <div>
                                <h3>{activeContent.title}</h3>
                                <p>{activeContent.desc}</p>
                                <img src={activeContent.img} alt={activeContent.title} />
                                </div>
                        )
                    }
                </div>
            </div>


        </div>
    )
}

export default HeroM