import React from 'react'
import { useState, useEffect } from 'react'
import {Switch, Route} from "react-router-dom" 
import menuList from './components/Data'
import NavBar from './components/NavBar'
import Home from './pages/Home'
import Menu from './pages/Menu'
import Shoppingcart from './pages/ShoppingCart'
import "./App.css"
//import kebab2 from "../image/kebab2."

const App = () => {

  const [menuData, setMenuData] = useState(menuList)
  const [cartItems, setCartItems] = useState([])
  //console.log(cartItems,"this is our cartItems array")
  
  const addToCart = (item ) => {
    //console.log("hey we got here because you clicked on an item", item)
    //console.log(cartItems)
    let currentCartItems = cartItems
    currentCartItems.unshift(item)
    setCartItems(
		  currentCartItems
		);
	};

  const removeFromCart = (item)=> { // item - refers in the ShoppingCart.js
    //console.log(item)
    setCartItems( cartItems.filter((food) => { // reads from inside out. Filter is coming first and then it changes the state
     return food.name !== item.name
   }))
}

  // useEffect is debugging the code (used to check if I have an access to menuList)
  // useEffect(() => {
  //   console.log(menuData.appetizers)
  // },[]) 


  return (
    <div id="app">
      
       <NavBar />
      
      <Switch>
        
        <Route exact path="/home">
          <Home/>
         </Route> 
          
        <Route path="/menu">
          <Menu menuData={menuData}  addToCart={addToCart}/> 
        </Route>

        <Route path="/shoppingcart">
          <Shoppingcart handleAdd = {addToCart} cartItems={cartItems} removeFromCart={removeFromCart} />
        </Route>        

      </Switch> 
      
      {/* <img className="kebab2" src={kebab2} alt="kebab2"></img> */}
              
    </div>
  )
}

export default App
