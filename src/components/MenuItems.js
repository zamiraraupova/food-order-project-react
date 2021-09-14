import React from 'react'


function MenuItems(props) {
    //console.log(props,"line5 menuItems")
    
	

    // const [ cartItems, setCartItems] = useState([]);
    // const addToCart = (item) => {
    //     const exit = cartItems.find((x)=> x.name);
    //     if (exist){
    //         setCartItems(
    //             cartItems.map((x) =>
    //             x.name === item.id ? {...exist, qty: exist.qty + 1} : x
    //             )
    //         );
    //     } else {
    //         setCartItems([...cartItems, {...item, qty: 1 }]);
    //     }
    // };

 
//console.log("menuItems24",props.item.name)
    return (
        <div id="item-section">
            <image />
            <div id="name"> <h3> {props.item.name} </h3> </div>
            <div id="description"> <h5> {props.item.description} </h5> </div>
            <div id="price"> <h4> ${props.item.price} </h4> </div>
            
            <button onClick={()=> props.addToCart(props.item)}>Add</button>
        </div>
    )
}

export default MenuItems
