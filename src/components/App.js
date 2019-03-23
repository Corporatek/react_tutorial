import React, {Component} from "react"

class App extends Component {
  constructor() {
    super()
    this.state = {
      firstName: "",
      lastName: "",
      age: "",
      diet: [],
      gender: "",
      destination: "",
      isVegan: false,
      isKosher: false,
      isLactoseFree: false
       
    }
    this.handleChange = this.handleChange.bind(this)
  }
  
  handleChange(event){
    const {name, value, type, checked} = event.target

    type === "checkbox" ?
    this.setState({
        [name]: checked
      })
:
    this.setState({
      [name]: value
    })
  }

  
  render() {
    return(
      <div className="todo-list">
        <form>
          <input name="firstName" value={this.state.firstName} placeholder="First Name" onChange={this.handleChange}/> <br></br>
          <input name="lastName" value={this.state.lasttName} placeholder="Last Name" onChange={this.handleChange}/> <br></br>
          <input name="age" value={this.state.age} placeholder="Age" onChange={this.handleChange} /> <br></br>

          <input type="radio" checked={this.state.gender === "male"} name="gender" value="male" placeholder="male" onChange={this.handleChange} />Male <br></br>
          <input type="radio" checked={this.state.gender === "female"} name="gender" value="female" placeholder="female" onChange={this.handleChange} />Female <br></br>

          <select name="destination" value={this.state.destination} onChange={this.handleChange}>
            <option value="atlanta">Atlanta</option>
            <option value="boston">Boston</option>
            <option value="new york">New York</option>
          </select>
          <br></br>

        <b>Dietary Needs:</b>
        <br></br>
        
          <input type="checkbox" checked={this.state.isVegan} name="isVegan" onChange={this.handleChange} />Vegan?<br></br>
          <input type="checkbox" checked={this.state.isKosher} name="isKosher" onChange={this.handleChange} />Kosher?<br></br>
          <input type="checkbox" checked={this.state.isLactoseFree} name="isLactoseFree" onChange={this.handleChange} />Lactose Intolerant?<br></br>
        
        </form>

        <h1>Entered Information:</h1>
        <h2>Your name: {this.state.firstName} {this.state.lastName}</h2>
        <h2>Age: {this.state.age}</h2>
        <h2>Gender: {this.state.gender}</h2>
        <h2>Destination: {this.state.destination}</h2>
        <br></br>

        <p>
          <b>Dietary Needs:</b>
          <br></br>
          Vegam: {this.state.isVegan ? "Yes" : "No"}<br></br>
          Kosher: {this.state.isKosher ? "Yes" : "No"}<br></br>
          Lactose Intolerant: {this.state.isLactoseFree ? "Yes" : "No"}<br></br>
        </p>

        </div>
    )
  }
}

export default App