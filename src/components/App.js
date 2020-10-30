import React, { Component } from "react";

// 呼び出し元
const App = () => <Counter></Counter>;
// クラスコンポーネントの場合のみrender関数が必要
class Counter extends Component {
  constructor(props) {
    super(props);
    console.log(this.state);
    this.state = { count: 0 };
  }

  handlePlusButton = () => {
    // 直接状態を操作することは禁止
    // this.state = { count: this.state.count};
    this.setState({ count: this.state.count + 1 });
  };

  handleMinusButton = () => {
    this.setState({ count: this.state.count - 1 });
  };

  render() {
    // setState();を実行したあとにrender();も実行される。
    console.log("render");
    return (
      <React.Fragment>
        <div>count: {this.state.count}</div>
        <button onClick={this.handlePlusButton}>+1</button>
        <button onClick={this.handleMinusButton}>-1</button>
      </React.Fragment>
    );
  }
}

export default App;
