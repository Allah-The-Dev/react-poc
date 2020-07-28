import React, { Component } from 'react';

class Counter extends Component {
  state = {
    count : 0,
    tags: ["tag1", "tag2"]
  }


  renderTags() {
    return this.state.tags.length === 0 ?
      <p>There is no tags</p> :
      this.state.tags.map(tag => <li key={tag}>{tag}</li>);
  }

  handleIncrement = () => {
    console.log("increment called", this)
  }

  render() {
    return (
      <React.Fragment>
        <span className={this.getBadgeClasses()}>
          {this.formatCount()}
        </span>
        <button
          onClick={this.handleIncrement}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <ul>
          { this.state.tags.length === 0 && 'Please create a new tag..!!' }
          {this.renderTags()}
        </ul>
      </React.Fragment>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const count = this.state.count;
    return count === 0 ? 'zero' : count;
  }
}

export default Counter;
