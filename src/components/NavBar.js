import React from 'react'
import { Link } from 'react-router-dom'
import cart from '../images/cart.png'
import home from '../images/home.png'
import menu from '../images/menu.png'

const NavBar = () => {
    return (
        <nav className="nav-bar">
        
        <div id="header">
           "Om-nom-nom" Kitchen  
        </div>
        
        <ul>
            <li><Link to="/home"> <img id="cart" src={home} alt="home"></img></Link></li>
            <li><Link to="/menu"> <img id="cart" src={menu} alt="menu"></img></Link></li>
            <li><Link to="/shoppingcart"><img id="cart" src={cart} alt="cart"></img></Link> </li>
        </ul>
        </nav>
    )
}

export default NavBar