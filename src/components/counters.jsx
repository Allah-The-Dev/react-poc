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

  render() {
    return (
      <div>
       {this.state.counters.map(counter =>
        <Counter
          key={counter.id}
          onDelete={this.handleDelete}
          value={counter.value}
          id={counter.id}
        >
        </Counter>
        )}
      </div>
    );
  }
}

export default Counters;
