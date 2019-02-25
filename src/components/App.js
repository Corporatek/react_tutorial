import React from "react";
import '../App.css';
// import Footer from "./Footer"
// import Header from "./Header"
// import MainContent from "./MainContent"
import ToDoItem from "./ToDoItem"

// Alternatively you can use an arrow function which does not require the return keyword

function App() {
  return (
    <div className="todo-list">
      <ToDoItem />
    </div>
  )
}

export default App;
