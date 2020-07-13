// jsxで記述する際にトランスコンパイルする関係でReactをimportする必要がある。
import React, { Component } from "react";

const App = () => {
  const profiles = [
    { name: "Taro", age: 20 },
    { name: "Hanako", age: 20 },
    { name: "Hanako" },
  ];

  return (
    <div>
      {profiles.map((profile) => {
        return <User name={profile.name} age={profile.age} />;
      })}
    </div>
  );
};

const User = (props) => {
  return (
    <div>
      Hi, I am {props.name} and {props.age} years old!
    </div>
  );
};

// Userコンポーネントのprops.ageに設定される値がない場合はデフォルトの値がセットされる。
User.defaultProps = {
  age: 1,
};
export default App;
