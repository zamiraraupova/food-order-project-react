import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <nav id="nav-bar">
        
        <div id="header">
           "Om-nom-nom" Kitchen  
        </div>
        
        <ul>
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/menu">Menu</Link></li>
            <li><Link to="/shoppingcart">Shopping Cart</Link></li>
        </ul>
        </nav>
    )
}

export default NavBar