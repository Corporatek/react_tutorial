import React from "react";
import {Component} from "react"
import '../App.css';

// }



class App extends React.Component {

  render() {        
    return (
      <div>
        <Header username="Kelechi"/>      
        <Greeting />      
      </div>
    )
  }
}

class Header extends React.Component {
  render() {
    return (
        <header>
          <p>Welcome, {this.props.username}!</p> 
        </header>
    )
  }
}


// Notice how the below class component does not containt "React" before "Component"
class Greeting extends Component {

  render() {

  var date = new Date()
  var hours = date.getHours()
  let timeOfDay

  if (hours < 12) {
    timeOfDay = "morning"
  } else if (hours >= 12 && hours < 17) {
    timeOfDay = "afternoon"
  } else {
    timeOfDay = "night"
  }

    return (
      <h1>
        Good {timeOfDay} to you, sir or madam!
      </h1>
    )
  }
}


export default App;
