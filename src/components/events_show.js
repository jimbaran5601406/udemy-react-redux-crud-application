import React, { Component } from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import { Link } from "react-router-dom";

import { getEvent, deleteEvent, putEvent } from "../actions";

class EventsShow extends Component {
	constructor(props) {
		super(props);
		this.onSubmit = this.onSubmit.bind(this);
		this.onDeleteClick = this.onDeleteClick.bind(this);
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
			<div>
				<input {...input} placeholder={label} type={type} />
				{touched && error && <span>{error}</span>}
			</div>
		);
	}

	async onDeleteClick() {
		const { id } = this.props.match.params;
		await this.props.deleteEvent(id);
		this.props.history.push("/");
	}

	async onSubmit(values) {
		// await this.props.postEvent(values);
		this.props.history.push("/");
	}

	render() {
		const { handleSubmit, pristine, submitting } = this.props;

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
					<input
						type="submit"
						value="Submit"
						disabled={pristine || submitting}
					/>
					<Link to="/">Cancel</Link>
					<Link to="/" onClick={this.onDeleteClick}>
						Delete
					</Link>
				</div>
			</form>
		);
	}
}

const mapDispatchToProps = { deleteEvent };

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
)(reduxForm({ validate, form: "eventShowForm" })(EventsShow));
