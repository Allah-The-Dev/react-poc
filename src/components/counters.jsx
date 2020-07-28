import React, { Component } from 'react';
import Counter from './counter'

class Counters extends Component {
  state = {
    counters : [
      { id: 1, value: 0},
      { id: 2, value: 2},
      { id: 3, value: 3},
      { id: 4, value: 4},
    ]
  };

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

  render() {
    return (
      <div>
         <button
          onClick={this.handleReset}
          className="btn btn-primary btn-sm m-2">
            Reset
        </button>
        {this.state.counters.map(counter =>
          <Counter
            key={counter.id}
            onDelete={this.handleDelete}
            onIncrement={this.handleIncrement}
            counter={counter}
          >
          </Counter>
        )}
      </div>
    );
  }
}

export default Counters;
