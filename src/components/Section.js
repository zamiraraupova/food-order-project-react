import React from 'react'
import MenuItems from './MenuItems'

// This sections are for each part section of menu
function Section(props) {
    //console.log(props.name)
    //console.log(props.menuItem)
    return (
        <div className="section">
            <h3>{props.name}</h3>
           
            {/* mapping every single menu item  */}
            {
                props.menuItems.map(item => <MenuItems item={item} addToCart={props.addToCart}/>)
            }   
        </div>
    )
}

export default Section
