// jsxで記述する際にトランスコンパイルする関係でReactをimportする必要がある。
import React, { Component } from "react";

// Componentクラスを継承してAppクラスを定義しているのでクラスコンポーネントと呼ばれる。
//class App extends Component {
//render() {
//const dom = "Variable!";
//return (
// returnで返すのは一つのブロックのみ
// ブロックをdivで囲ってしまうとWebページに意味のないdivタグが挿入れてしまうのでReact.Fragmentタグを使用する。
//<React.Fragment>
//<h1>Hello, {dom}!</h1>
//<label htmlFor="bar">bar</label>
//{/* 場所によって異なるコメントアウト */}
//<input
//type="text"
//onClick={() => {
//console.log("I am clicked.");
//}}
//>
//</React.Fragment>
//);
//}
//}

const App = () => {
  return (
    <div>
      <Cat />
      <Cat />
      <Cat />
      <Cat />
    </div>
  );
};

const Cat = () => {
  return <div>Meow!</div>;
};

export default App;
