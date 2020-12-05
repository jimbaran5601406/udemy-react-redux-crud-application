import React, { Component } from "react";
import { connect } from "react-redux";
import { Field, Form, reduxForm } from "redux-form";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

import { postEvent } from "../actions";

class EventsNew extends Component {
	constructor(props) {
		super(props);
		this.onSubmit = this.onSubmit.bind(this);
	}

	renderField(field) {
		const {
			input,
			label,
			name,
			type,
			meta: { touched, error }
		} = field;
		return (
			<TextField
				name={name}
				type={type}
				label={label}
				{...input}
				error={touched && error}
				helperText={touched && error}
				fullWidth={true}
			/>
		);
	}

	async onSubmit(values) {
		await this.props.postEvent(values);
		this.props.history.push("/");
	}

	render() {
		const { handleSubmit, pristine, submitting, invalid } = this.props;
		const buttonStyle = { margin: 12 };
		const linkStyle = { textDecoration: "none", color: "#000000" };

		return (
			<form onSubmit={handleSubmit(this.onSubmit)}>
				<div>
					<Field
						label="Title"
						name="title"
						type="text"
						component={this.renderField}
					/>
					<Field
						label="Body"
						name="body"
						type="text"
						component={this.renderField}
					/>
				</div>

				<div>
					<Button
						variant="contained"
						type="submit"
						color="primary"
						disabled={pristine || submitting || invalid}
					>
						Submit
					</Button>
					<Button variant="contained" style={buttonStyle}>
						<Link to="/" style={linkStyle}>
							Cancel
						</Link>
					</Button>
				</div>
			</form>
		);
	}
}

const mapDispatchToProps = { postEvent };

const validate = (values) => {
	const errors = {};

	if (!values.title) {
		errors.title = "Enter a title, please";
	}
	if (!values.body) {
		errors.body = "Enter a body, please";
	}
	return errors;
};

export default connect(
	null,
	mapDispatchToProps
)(reduxForm({ validate, form: "eventNewForm" })(EventsNew));
