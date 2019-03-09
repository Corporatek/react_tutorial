import React from "react";
// import {Component} from "react"
import '../App.css';
import ToDoItem from "./ToDoItem"
import ToDoData from "./ToDoData"

// }



class App extends React.Component {
  constructor() {
    super()
    this.state = {
      todos: ToDoData
    }
  }

render() {
 const ToDoItems = this.state.todos.map(item => <ToDoItem key={item.id} item={item} />)

  return (
    <div className="todo-list">
      <hr></hr>
        {ToDoItems}
      <hr></hr>
    </div>

  )
}
}

export default App;
