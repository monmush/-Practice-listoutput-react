import React, { Component } from 'react';
import './App.css';
import Validation from './Validation/Validation';
import Char from './Char/Char';

class App extends Component {
  state = {
  userInput: ''
}

userInputHandler = (event) => {
  this.setState({
    userInput: event.target.value
  });}

deleteOutputHandler = (index) => {
  const text = this.state.userInput.split('');
  text.splice(index,1);
  const updatedText = text.join('');
  this.setState({userInput:updatedText});

}

  render() {
    const charList = this.state.userInput.split('').map((lt,index) => {
      return <Char lt={lt} key={index} changed={() => this.deleteOutputHandler(index)}/>
    });

    return (
      <div className="App">

        <input type="text" onChange={this.userInputHandler} value={this.state.userInput}/>
        <p>{this.state.userInput}</p>
        <Validation length={this.state.userInput.length} />
        {charList}
      </div>
    )
  };
};

export default App;
