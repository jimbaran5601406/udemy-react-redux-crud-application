import React, { Component } from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

import { getEvent, deleteEvent, putEvent } from "../actions";

class EventsShow extends Component {
	constructor(props) {
		super(props);
		this.onSubmit = this.onSubmit.bind(this);
		this.onDeleteClick = this.onDeleteClick.bind(this);
	}

	componentDidMount() {
		const { id } = this.props.match.params;
		if (id) this.props.getEvent(id);
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

	async onDeleteClick() {
		const { id } = this.props.match.params;
		await this.props.deleteEvent(id);
		this.props.history.push("/");
	}

	async onSubmit(values) {
		await this.props.putEvent(values);
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
						type="submit"
						disabled={pristine || submitting || invalid}
						variant="contained"
						color="primary"
						style={buttonStyle}
					>
						Submit
					</Button>
					<Button variant="contained" style={buttonStyle}>
						<Link to="/" style={linkStyle}>
							Cancel
						</Link>
					</Button>
					<Button variant="contained" color="secondary" style={buttonStyle}>
						<Link to="/" onClick={this.onDeleteClick} style={linkStyle}>
							Delete
						</Link>
					</Button>
				</div>
			</form>
		);
	}
}

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

const mapStateToProps = (state, ownProps) => {
	const event = state.events[ownProps.match.params.id];
	return { initialValues: event, event };
};

const mapDispatchToProps = { deleteEvent, getEvent, putEvent };
// events_show.jsコンポーネントで使用するactionを紐付ける。

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(
	reduxForm({ validate, form: "eventShowForm", enableReinitialize: true })(
		EventsShow
	)
);
