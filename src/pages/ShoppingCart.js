
const Shoppingcart = (props) => {
    
    //console.log("shopping cart line5",props.cartItems.length)
    
    // const itemsPrice = cartItems.reduce((a,c)=> a + c.quantity + c.price, 0)
    // const totalPrice = itemsPrice
    return (
        <div id="shopping-cart-section">
           <h2>Cart Items</h2>
             {/* {props.cartItems.length} */}
             
             {props.cartItems.map((item) => (
               <div> 
                <div id="shopping-cart-item-section">
                        <div id="name"> {item.name} </div>
                        <div id="price"> ${item.price} </div>
                        <div id="btn"> <button onClick={() => props.removeFromCart(item)}>Remove</button> </div>
                </div> 
               
                <div>
                   purchased item: {props.cartItems.length} 
               </div>
                <div> 
                    total:
                </div>
                {/* <div> 
                    {/* <button onClick={() => handleAdd()} className="add">+</button> 
                 </div> */}
            </div>    
        ))} 
                
        
       {/* need to add total price and quantity purchased */}
        </div>
    )
}

export default Shoppingcart
