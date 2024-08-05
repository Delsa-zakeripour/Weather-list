import React from "react";

class Try extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 5 };
    this.handleDec = this.handleDec.bind(this);
    this.handleInc = this.handleInc.bind(this);
  }

  handleDec() {
    // this.setState({ count: 7});
    this.setState((curState) => {
      return { count: curState.count - 1 };
    });
  }

  handleInc() {
    this.setState((curState) => {
      return { count: curState.count + 1 };
    });
  }

  render() {
    const date = new Date();
    date.setDate(date.getDate() + this.state.count);

    return (
      <div>
        <button onClick={this.handleDec}>-</button>
        <span>
          {date.toDateString()} [{this.state.count}]
        </span>
        <button onClick={this.handleInc}>+</button>
      </div>
    );
  }
}

export default Try;
