
const Shoppingcart = (props) => {
   console.log(props.cartItems) 
    //console.log("shopping cart line5",props.cartItems.length)
    
    const itemsPrice = props.cartItems.reduce((a,item)=> a + item.price, 0)
    //const totalPrice = itemsPrice
    
    return (
        <div className="shopping-cart-page">
           <h2>Cart Items</h2>
             
             {props.cartItems.map((item) => (
                <div id="shopping-cart-section">
                    <div id="name"> {item.name} </div>
                    <div id="price"> ${item.price} </div>
                    <div id="btn"> <button onClick={() => props.removeFromCart(item)}>Remove</button> </div>
                </div> 
              
        ))} 
                <div id="check-out">
                    purchased item:  {props.cartItems.length}
                    <br/> 
                    total:  ${itemsPrice}
                    <br/>
                    <button>Check Out</button>
                </div>  
        </div>
    )
}

export default Shoppingcart
