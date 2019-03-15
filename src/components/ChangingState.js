import React from "react";
// import {Component} from "react"
import '../App.css';
// import ToDoItem from "./ToDoItem"
// import ToDoData from "./ToDoData"

// }



class App extends React.Component {
  constructor() {
    super()
    this.state = {
      // todos: ToDoData
        count: 0
    }
    // below binds the handleClick method to the class
    this.handleClick = this.handleClick.bind(this)
  }

// Whenever you create a method within a class that will change the state of the component, you need to make sure its bound to the constructor of the class
handleClick() {
  this.setState(prevState => {
      return {
        count: prevState.count + 1
      }
  })
}

render() {
//  const ToDoItems = this.state.todos.map(item => <ToDoItem key={item.id} item={item} />)
  return (
    <div className="todo-list">
      <hr></hr>
        {/* {ToDoItems} */}
      <hr></hr>
      <h1>{this.state.count}</h1>
      <button onClick={this.handleClick}>Change!</button>
    </div>

  )
}
}

export default App;
