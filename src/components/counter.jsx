import React, { Component } from 'react';

class Counter extends Component {
  state = {
    value : this.props.value
  };


  renderTags() {
    return this.state.tags.length === 0 ?
      <p>There is no tags</p> :
      this.state.tags.map(tag => <li key={tag}>{tag}</li>);
  }

  handleIncrement = () => {
    this.setState({ value: this.state.value + 1 })
  }

  render() {
    return (
      <div>
        <span className={this.getBadgeClasses()}>
          {this.formatCount()}
        </span>
        <button
          onClick={ this.handleIncrement }
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const count = this.state.value;
    return count === 0 ? 'zero' : count;
  }
}

export default Counter;
