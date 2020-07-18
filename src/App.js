import React, { Component } from "react";
// バリデーション実装
import PropTypes from "prop-types";

const App = () => {
  const profiles = [
    { name: "Taro", age: 20 },
    { name: "Hanako", age: 20 },
    { name: "Hanako", age: 3 },
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

User.propsTypes = {
  name: PropTypes.string,
  age: PropTypes.number.isRequired,
};
export default App;
