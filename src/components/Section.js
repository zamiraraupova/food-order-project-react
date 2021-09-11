import React from 'react'
import MenuItems from './MenuItems'

// This sections are for each part section of menu
function Section(props) {
    return (
        <div>
           <h3>{props.name}</h3> 
           console.log(props)
            {/* mapping every single menu item  */}
            {
                props.MenuItems.map(item => <MenuItems item={item}/>)
            }   
        </div>
    )
}

export default Section
