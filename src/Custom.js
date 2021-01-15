import React, { Component } from 'react'

export class Custom extends Component {
  state ={
    firstName:null,
    lastName:null
}

handleChange = (e) =>{
    this.setState({
        [e.target.id]: e.target.value
    })
}

handleSubmit = (e) =>{
    e.preventDefault();
    this.props.updateName(this.state);
}

  render() {
        return (
            <div className="custom" id="custom">
            <h3>Customize jokes</h3>
            <form >
            <label htmlFor="firstName">First Name</label>
              <input id="firstName" type="text" placeholder="First Name" onChange={this.handleChange}/>
              <label htmlFor="lastName">LastName</label>
              <input id="lastName" type="text" placeholder="Last Name" onChange={this.handleChange}/>
              <button onClick={this.handleSubmit}><a href="#">Submit</a></button>
              <a href="#" className="close">Close</a>
            </form>
          </div>
        )
    }
}

export default Custom


