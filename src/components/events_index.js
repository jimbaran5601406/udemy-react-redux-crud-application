import React, { Component } from "react";
import { connect } from "react-redux";
import _ from "lodash";
import { Link } from "react-router-dom";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";

import { readEvents } from "../actions";

// 呼び出し元
// クラスコンポーネントの場合のみrender関数が必要
class EventsIndex extends Component {
	componentDidMount() {
		this.props.readEvents();
	}

	renderEvents() {
		return _.map(this.props.events, (event) => (
			<TableRow key={event.id}>
				<TableCell>{event.id}</TableCell>
				<TableCell>
					<Link to={`/events/${event.id}`}>{event.title}</Link>
				</TableCell>
				<TableCell>{event.body}</TableCell>
			</TableRow>
		));
	}
	render() {
		const style = {
			position: "fixed",
			right: 12,
			bottom: 12
		};
		return (
			<React.Fragment>
				<Link to="/events/new" style={style}>
					<Fab color="primary" aria-label="add">
						<AddIcon />
					</Fab>
				</Link>
				<TableContainer>
					<Table>
						<TableHead>
							<TableRow>
								<TableCell>ID</TableCell>
								<TableCell>Title</TableCell>
								<TableCell>Body</TableCell>
							</TableRow>
						</TableHead>

						<TableBody>{this.renderEvents()}</TableBody>
					</Table>
				</TableContainer>
			</React.Fragment>
		);
	}
}
// reducerで更新されたstateをeventsに設定
const mapStateToProps = (state) => ({ events: state.events });
// const mapDispatchToProps = (dispatch) => ({
// 	increment: () => dispatch(increment()),
// 	decrement: () => dispatch(decrement())
// });
const mapDispatchToProps = { readEvents };

export default connect(mapStateToProps, mapDispatchToProps)(EventsIndex);
// 更新されたstateをcomponentに設定
