import React from 'react'
import { useState, useEffect } from 'react'
import {Switch, Route} from "react-router-dom" 
import menuList from './components/Data'
import NavBar from './components/NavBar'
import Home from './pages/Home'
import Menu from './pages/Menu'
import Shoppingcart from './pages/ShoppingCart'


import "./App.css"


const App = () => {

  const [menuData, setMenuData] = useState(menuList)
  

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
          <Menu menuData={menuData}/> 
        </Route>

        <Route path="/shoppingcart">
          <Shoppingcart/>
        </Route>        

      </Switch> 
      
     
          
      
    </div>
  )
}

export default App
