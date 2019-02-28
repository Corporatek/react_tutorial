import React from "react";
import '../App.css';
// import Footer from "./Footer"
// import Header from "./Header"
// import MainContent from "./MainContent"
// import ToDoItem from "./ToDoItem"
import Joke from "./Joke"

// import ContactCard from "./ContactCard"

// Alternatively you can use an arrow function which does not require the return keyword

function App() {
  return (
    <div className="contacts">
      <Joke
        joke={{question: "Joke", answer: "LOL"}}
      />
     
    </div>
  )
}

export default App;
