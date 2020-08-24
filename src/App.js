import React, { Component } from 'react';
import './App.css';
import FunctionalComp from './FunctionalComp.js';
import PropsComponent from './PropsComponent.js';


class App extends Component {
  constructor(){
    super();
    this.state = {
      greet : {
        morning: 'good morning',
        afternoon: '',
        evening: '',
      },
      newGreet: '',
      newGreets: [],

      data : {
        lastName: '',
        firstName: '',
        phone: '',
      },
      dataArr: [],
    }
    // this.handleInput : this.handleInput.bind(this),
    // this.handleSubmit :  this.handleSubmit.bind(this)
}

  //1. Mount
  // componentDidMount(){
  //   // this.greeting()
  // }



  //3.passing props to the child components
  handleInput = (e) => {
   console.log(e.target.name, e.target.value);
   this.setState({
     data: {
       ...this.state.data,
       [e.target.name] : e.target.value
     }

   })

  }
  handleSubmit = (e) => {
    e.preventDefault()

    // const lastName = this.state.data.lastName;
    // const firstName = this.state.data.firstName;
    // const phone = this.state.data.phone;
    const phBook = this.state.dataArr
    phBook.push(this.state.data)
    this.setState({
      newArr : phBook
    })
  }

// 2. how to make todo list in one component
  // handleInput = (e) => {
  //
  //   this.setState({
  //       newGreet: e.target.value
  //   })
  // }
  //
  //
  //
  // handleSubmit = (e) => {
  //
  //   e.preventDefault();
  //   let newArr = this.state.newGreets
  //
  //   newArr.push(this.state.newGreet);
  //
  //   this.setState({
  //     newGreet: '',
  //     newGreets : newArr
  //   })
  // }

//1. prctice how it mount data
  // greeting = () => {
  //   // alert('hi')
  //   this.setState({
  //     greet : {
  //       ...this.state.greet,
  //       afternoon: 'good afternoon'
  //     }
  //   })
  // }




render(){


  const newtask = this.state.newGreets.map((task, idx ) => (

      <li key={idx}>
        {task}
      </li>
  ))

  console.log('this.state.date', this.state.data);


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
        <li>Functional Component is here</li>
          <FunctionalComp greet={this.state.greet}/>
        <li>Form</li>
        <form onSubmit={this.handleSubmit}>
          <input name="newGreet" type="text" onChange={this.handleInput} />
          <button type="submit">Add greet</button>
        </form>
        <li>
          <ol>
            {newtask}
          </ol>
        </li>
        <li>Props Practice
          <div>
            <form onSubmit={this.handleSubmit}>
              <label htmlFor='lastName'>Last Name:</label>
              <input onChange={this.handleInput} name="lastName" id="lastName" placeholder="last Name"/>
              <label htmlFor='firstName'>First Name:</label>
              <input onChange={this.handleInput} name="firstName" id="firstName" placeholder="first Name"/>
              <label htmlFor='phone'>Phone Number:</label>
              <input onChange={this.handleInput} name="phone" id="phone" placeholder="Phone Number"/>
              <button type="submit">Add</button>
            </form>
          </div>
          <div><PropsComponent dataArr={this.state.dataArr}/></div>
        </li>
      </ol>
    </div>

  );
}
}

export default App;
