import React, { Component } from "react";
import { Container } from "@material-ui/core";
import { Alert } from "@material-ui/lab";

const App = () => {
	const profiles = [
		{ name: "Taro", age: 20 },
		{ name: "", age: "" }
	];

	return (
		<Container>
			{profiles.map((profile) => {
				return (
					<Alert severity="success">
						<Human name={profile.name} age={profile.age} />
					</Alert>
				);
			})}
		</Container>
	);
};

const Human = (props) => {
	return (
		<div>
			Good morning, I'm {props.name} and {props.age} year-old.
		</div>
	);
};

Human.defaultProps = {
	name: "Anonymous",
	age: 100
};

export default App;
