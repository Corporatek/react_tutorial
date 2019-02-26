import React from "react";
import '../App.css';
// import Footer from "./Footer"
// import Header from "./Header"
// import MainContent from "./MainContent"
// import ToDoItem from "./ToDoItem"

import ContactCard from "./ContactCard"

// Alternatively you can use an arrow function which does not require the return keyword

function App() {
  return (
    <div className="contacts">
      <ContactCard 
        contact={{imgUrl: "http://placekitten.com/300/200", name: "Mr. Whiskers", phone: "212-666-6666", email: "me@me.com"}}
      />
     
    </div>
  )
}

export default App;
