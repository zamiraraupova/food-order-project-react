import React from 'react'

function MenuItems(props) {
    return (
        <div>
            <h2> {props.item.name} </h2>
            <h4> {props.item.description} </h4>
            <h3> {props.item.price} </h3>
        </div>
    )
}

export default MenuItems
