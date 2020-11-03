import axios from "axios";
export const READ_EVENTS = "READ_EVENTS";
export const CREATE_EVENT = "CREATE_EVENT";
export const DELETE_EVENT = "DELETE_EVENT";

const ROOT_URL = "https://udemy-utils.herokuapp.com/api/v1";
const QUERYSTRING = "?token=token123";

// イベント一覧をjson配列で取得
export const readEvents = () => async (dispatch) => {
	const response = await axios.get(`${ROOT_URL}/events${QUERYSTRING}`);
	dispatch({ type: READ_EVENTS, response });
};

// イベント新規作成
export const postEvent = (values) => async (dispatch) => {
	const response = await axios.post(
		`${ROOT_URL}/events${QUERYSTRING}`,
		values
	);
	dispatch({ type: CREATE_EVENT, response });
};

// イベント削除
export const deleteEvent = (id) => async (dispatch) => {
	await axios.delete(`${ROOT_URL}/events${id}${QUERYSTRING}`);
	dispatch({ type: DELETE_EVENT, id });
};
// typeはreducerがactionの識別子
// 識別子であるtypeには定数を用いることが推奨される。
