import React, { Component } from "react";
import { connect } from "react-redux";
import _ from "lodash";
import { Link } from "react-router-dom";

import { readEvents } from "../actions";

// 呼び出し元
// クラスコンポーネントの場合のみrender関数が必要
class EventsIndex extends Component {
	componentDidMount() {
		this.props.readEvents();
	}

	renderEvents() {
		return _.map(this.props.events, (event) => (
			<tr key={event.id}>
				<td>{event.id}</td>
				<td>
					<Link to={`/events/${event.id}`}>{event.title}</Link>
				</td>
				<td>{event.body}</td>
			</tr>
		));
	}
	render() {
		return (
			<React.Fragment>
				<table>
					<thead>
						<tr>
							<th>ID</th>
							<th>Title</th>
							<th>Body</th>
						</tr>
					</thead>

					<tbody>{this.renderEvents()}</tbody>
				</table>

				<Link to="/events/new">New Event</Link>
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
