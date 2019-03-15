import React from "react";
// import {Component} from "react"
import '../App.css';
// import ToDoItem from "./ToDoItem"
// import ToDoData from "./ToDoData"

// }


function handleClick() {
  console.log("I was clicked")
}

function handleHover() {
  console.log("I was hovered over")

}
function App() {
  return(
    <div>
      <h1>Test</h1>
      <img src="https://www.fillmurray.com/200/100" alt="fill_murray"  onMouseOver={handleHover}></img>

      {/* <br> </br>
      <br> </br> */}
      <button onClick={handleClick}>Click Me!</button>
    </div>
  )
}

