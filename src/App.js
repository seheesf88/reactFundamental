import React, { Component } from 'react';
import './App.css';
import FunctionalComponent from './FunctionalComponent.js'

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
      <ol>
        <li>Class Component vs. Functional Component</li>
          <div>
           <h4>Syntax.</h4>
            <div>Check github!</div>
           <h4>Difference.</h4>
           <ul>
            <li>Class Component has stateful component while Functional Component is stateless Component</li>
            <li>Functional Component is JS function for html UI. </li>
            <li>Functional Component is simplier and readable. </li>
            <li>Class Component has constructor and it pass props through super()</li>
           </ul>
           <h4>LifeCycles.</h4>
          <div>https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/</div>
            <ul>
              <li>Mounting</li>
                <ul>
                  <li>constructor</li>
                  <li>render</li>
                  <li>React updates DOM and refs</li>
                  <li>componentDidMount</li>
                </ul>
              <li>Updating</li>
                <ul>
                  <li>render(new props, setState(), forceUpdate())</li>
                  <li>React updates DOM and refs</li>
                  <li>componentDidUpdate</li>
                </ul>
              <li>Unmounting</li>
                <ul>
                  <li>componentWillUnmount</li>
                </ul>
            </ul>
          </div>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ol>
    </div>

  );
}
}

export default App;
