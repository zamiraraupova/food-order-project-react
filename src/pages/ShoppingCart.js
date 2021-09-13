
const Shoppingcart = (props) => {
    //const { handleAdd, cartItems, addToCart, removeFromCart } = props;
    
    //console.log("shopping cart line5",props.cartItems.length)
    
    return (
        <div>
           <h2>Cart Items</h2>
             {/* {props.cartItems.length} */}
             
             {props.cartItems.map((item) => (
               <div> 
                <div className="shopping-cart">
                        <div id="name"> {item.name} </div>
                        <div id="price"> {item.price} </div>
                        <div id="btn"> <button onClick={() => props.removeFromCart(item)}>Remove</button> </div>
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
