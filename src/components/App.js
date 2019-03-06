import React from "react";
// import {Component} from "react"
import '../App.css';

// }



class App extends React.Component {
  constructor() {
    super()
    this.state = {
      isLoggedIn: false,
    }
  }
render() {
  let logStatus

  if (this.state.isLoggedIn === true) {
    logStatus = "in"
  } else {
    logStatus = "out"
  }

  return (
    <div>
      <h1>You are currently logged {logStatus}</h1>
    </div>

  )
}
}

export default App;
