import React from "react";


// Add props as the function parameter to allow new information to populate each section
function ContactCard(props) {
    console.log(props)

    return (
        <div>
            <img src={props.contact.imgUrl} alt="cat"></img>
            <h3> {props.contact.name} </h3>
            <p>Phone: {props.contact.phone}</p>
            <p>Email: {props.contact.email}</p>
        </div>

    )
}


export default ContactCard

// function addNumbers(a, b) {
//     return a + b
// }
