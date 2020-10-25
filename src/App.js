import React from "react";
import Container from "@material-ui/core/Container";
import Alert from "@material-ui/lab/Alert";

const App = () => {
	const profiles = [
		{ name: "Material", age: 20 },
		{},
		{ name: "Alert", age: 24 }
	];

	return (
		<Container>
			{profiles.map((profile, index) => {
				return (
					<Alert severity="success" key={index}>
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
	age: 1000
};

export default App;
