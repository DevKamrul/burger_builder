import React from 'react';

const order = (props) => {
    const ingredientSummery = props.order.ingredient.map(item => {
        return (
            <span style={{
                border: "1px solid grey",
                borderRadius: "5px",
                padding: "5px",
                marginRight: "10px"
            }} key={item.type}><span style={{ textTransform: "capitalize" }}>{item.type}</span> x {item.amount}</span>
        )
    })
    return (
        <div style={{
            border: "1px solid grey",
            boxsadow: "1px 1px #888888 ",
            borderRadius: "5px",
            padding: "20px",
            marginBottom: "10px"
        }}>
            <p><b>Id:</b> {props.order.id}</p>
            <p><b>Name:</b> {props.order.customer.name}</p>
            <p><b>Address:</b> {props.order.customer.deliveryAddress}</p>
            <hr />
            {ingredientSummery}
            <hr />
            <p><b>Price:</b> {props.order.Price}</p>
        </div>
    )
}

export default order
