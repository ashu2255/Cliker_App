import React, { Component } from "react";
export class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  increment() {
    this.setState(
      {
        count: this.state.count + 1,
      },
      () => {
        console.log("Callback Value", this.state.count);
      }
    );

    console.log(this.state.count);
  }

  refresh() {
    this.setState(
      {
        count: 0,
      },
      () => {
        console.log("Callback Value", this.state.count);
      }
    );

    console.log(this.state.count);
  }

  decrement() {
    this.setState(
      {
        count: this.state.count - 1,
      },
      () => {
        console.log("Callback Value", this.state.count);
      }
    );

    console.log(this.state.count);
  }

  render(){
    return (
      <div>
        <div> count = {this.state.count}</div>
        <button className='btn'  onClick={() => this.increment()}>+</button>
        <button className='btn' onClick={() => this.refresh()}>refresh</button>
        <button className='btn' onClick={() => this.decrement()}>-</button>
      </div>
    );
  }
}

export default Counter;
