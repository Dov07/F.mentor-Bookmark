import React from 'react'
import tab1 from '../../images/illustration-features-tab-1.svg'
import tab2 from '../../images/illustration-features-tab-2.svg'
import tab3 from '../../images/illustration-features-tab-3.svg'

const content =[
    {
        
        title: "Bookmark in one Click",
        desc: "Organize your bookmark however you like. Our simple drag-and-drop interface gives you complate control over how you manage your favorite sites.",
        img: tab1,
    },
    {
       
        title: "Intelligent search",
        desc: "Our powerful search feature will help you find saved sites in no named at all. No need to trawl through all of your bookmarks.",
        img: tab2,
    },
    {
        
        title: "Share your Bookmarks",
        desc: "Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button",
        img: tab3,
    }
]
const headTitle = [
    "Simple Bookmarking", "Speed Searching", "Easy Sharing"
]
const HeroM = () => {
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
                {headTitle.map((e)=>(
                      <button>{e}</button>  
                ))}
            </div>

            
        </div>
    

    </div>
  )
}

export default HeroM