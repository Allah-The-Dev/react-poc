import React, { Component } from 'react';
import NavBar from './components/navbar';
import Counters from './components/counters';

class App
 extends Component {

  state = {
    counters : [
      { id: 1, value: 0},
      { id: 2, value: 2},
      { id: 3, value: 3},
      { id: 4, value: 4},
    ]
  };

  //called when component is initialized
  //order - 1
  constructor() {
    super();
    console.log('App-constructor');
  }

  //called once component is rendered in DOM
  //perfect place to make Ajax call to get data
  //order - 3
  componentDidMount() {
    console.log('App-mounted');
  }

  handleDelete = counterId => {
    console.log("even on delete called for id ", counterId);
    const counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({counters: counters});
  }

  handleReset = () => {
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
    this.setState({counters});
  }

  handleIncrement = counter => {
    const counters = [...this.state.counters]; //clone the counters
    const index = counters.indexOf(counter); //get the index of target object
    counters[index] = {...counter}; //clone the object
    counters[index].value++;//modify object
    this.setState({counters});//update the state
  }

  //called to create virtual dom and update real dom
  //order - 2
  render() {
    console.log('App-rendered');
    return (
      <React.Fragment>
        <NavBar totalCounters={this.state.counters.filter(c => c.value > 0).length} />
        <main className="container">
          <Counters
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDelete={this.handleDelete}
            counters={this.state.counters}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
