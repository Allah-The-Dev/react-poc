import React, { Component } from 'react';

class Counter extends Component {
  state = {
    count : 0,
    imageUrl: 'https://picsum.photos/200'
  }
  render() {
    return (
      <React.Fragment>
        <img src={this.state.imageUrl} alt=""/>
        <span>{this.state.count}</span>
        <button>Increment</button>
      </React.Fragment>
    );
  }
}

export default Counter;
