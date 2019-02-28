import React from "react";
import '../App.css';
// import Footer from "./Footer"
// import Header from "./Header"
// import MainContent from "./MainContent"

import ToDoItem from "./ToDoItem"
import ToDoData from "./ToDoData"

// import Joke from "./Joke"
// import ContactCard from "./ContactCard"

// import Product from "./Product";
// import productData from "./vschoolProducts"

// Alternatively you can use an arrow function which does not require the return keyword

function App() {

const ToDoList = ToDoData.map(item =>
<ToDoItem key={item.id} item={item} />)

  return (
    <div className="todo-list">
    <h1>To Do List...</h1>
      <hr></hr>
        {ToDoList}
    </div>
  )
}

export default App;
