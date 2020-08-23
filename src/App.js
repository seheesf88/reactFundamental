import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {

    }
  }


greeting = () => {
  alert('hi')
}




render(){
  return (
    <div>
      <h1>React Fundamental</h1>
      <button onClick={this.greeting}>hi</button>
    </div>

  );
}
}

export default App;
