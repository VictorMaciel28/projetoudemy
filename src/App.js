import React, { Component } from 'react';
import './App.css';
import ValidationComponent from './User/ValidationComponent'
import CharComponent from './User/CharComponent'


class App extends Component {
  state = {
    userInput:''
  }

  eraseelement = ( event ) => {
    this.setState( { userInput: event.target.value } )
  }

  deleteCharHandler = ( index ) => {
    const text = this.state.userInput.split('');
    text.splice(index, 1)
    const updatedText= text.join('');
    this.setState({userInput: updatedText})
  }
  
  render() {
    const letter = this.state.userInput.split('').map((uniqueletter, index)=>{
      return <CharComponent letter={uniqueletter} key={index} clicked={() => this.deleteCharHandler(index)}/>
    })
  
   

    return (
      <div className="App">
        <input type="text" onChange={this.eraseelement} value={this.state.userInput}/>  
        <ValidationComponent inputlentgh={this.state.userInput.length}/>
        {letter}
      </div>
    );
  }
}

export default App;
























//<UserOutput username={this.state.username}/>
/* <UserOutput />
<UserOutput /> */

// <h1>Hi, I'm a react App</h1>
// <Person name={this.state.pessoa.name} age="22" />
// <Person name="Pessoa" age="25">Eu curto passear!</Person>
// <Person name="Fulano" age="32" />

// <br />
// <br />

// <div>
//   <UserInput onChange={this.eraseelement.bind(this)} username ={this.state.pessoa.name}/>
// </div>

// <div>
// <br />
// <br />
          
// </div>