import _ from "lodash";
import { READ_EVENTS, READ_EVENT, DELETE_EVENT } from "../actions";

export default (events = {}, action) => {
	switch (action.type) {
		case READ_EVENT:
			const data = action.response.data;
			console.log(data);
			return { ...events, [data.id]: data };
		case READ_EVENTS:
			return _.mapKeys(action.response.data, "id");
		case DELETE_EVENT:
			delete events[action.id];
			return events;
		default:
			return events;
	}
};

// reducerはstateの更新
