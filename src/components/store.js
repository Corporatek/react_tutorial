// Here I will be storing the most recent version of the todolist App

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
    this.handleChange = this.handleChange.bind(this)
  }

handleChange(id){
  this.setState((prevState) => {
    const updatedTodos = prevState.todos.map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed
        document.getElementById(todo.id, )
      }
      return todo
    })
    return {
      todos: updatedTodos
    }
  })


}

render() {
  // Below gives the components data the ability to react
  const todolist = this.state.todos.map(item => <ToDoItem key={item.id} item={item} handleChange={this.handleChange}/>)
  

  return(
    <div className="todo-list">
      {todolist}
    </div>
  )
}

}

export default App;
