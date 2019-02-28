import React from "react";

function Product(props) {
    return(
        <div>
            <hr></hr>
                <h1>Item Name: {props.name}</h1>
                <h2>Price: ${props.price}</h2>
                <h4>{props.description}</h4>
            <hr></hr>
        </div>
    )
}


export default Product