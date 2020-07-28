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
    // this.setState({counters});//this is also a valid line for above
  }

  handleReset = () => {
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
    this.setState({counters});
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
            counter={counter}
          >
          </Counter>
        )}
      </div>
    );
  }
}

export default Counters;
