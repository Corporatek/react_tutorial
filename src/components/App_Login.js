import React from "react";
// import {Component} from "react"
// import '../App.css';
// import ToDoItem from "./ToDoItem"
// import ToDoData from "./ToDoData"

class Appy extends React.Component {
  constructor() {
    super()
    this.state = {
      isLoggedIn: false
    }
    this.logIn = this.logIn.bind(this)
  }

 logIn() {
    this.setState(prevState => {
      const logStatus = !prevState.isLoggedIn
      return {isLoggedIn: logStatus}
    })
  }


  render() {
    let buttonText = this.state.isLoggedIn ? "Log Out" : "Log In"
      return(
        <div className="todo-list">
          <button onClick={this.logIn}>{buttonText}</button>
        </div>
      )
    }
}



export default Appy;
