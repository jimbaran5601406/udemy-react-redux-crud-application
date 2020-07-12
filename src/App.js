// jsxで記述する際にトランスコンパイルする関係でReactをimportする必要がある。
import React, { Component } from "react";

class App extends Component {
  render() {
    const dom = "Variable!";
    return (
      // returnで返すのは一つのブロックのみ
      <React.Fragment>
        <h1>Hello, {dom}!</h1>
        <label htmlFor="bar">bar</label>
        {/* 場所によって異なるコメントアウト */}
        <input
          type="text"
          onClick={() => {
            console.log("I am clicked.");
          }}
        />
      </React.Fragment>
    );
  }
}

export default App;
