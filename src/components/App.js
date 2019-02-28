import React from "react";
import '../App.css';
// import Footer from "./Footer"
// import Header from "./Header"
// import MainContent from "./MainContent"
// import ToDoItem from "./ToDoItem"
// import Joke from "./Joke"
// import ContactCard from "./ContactCard"

import Product from "./Product";
import productData from "./vschoolProducts"

// Alternatively you can use an arrow function which does not require the return keyword

function App() {

const productList = productData.map(item =>
<Product key={item.id} name={item.name} price={item.price} description={item.description} />)

  return (
    <div className="contacts">
      {productList}
    </div>
  )
}

export default App;
