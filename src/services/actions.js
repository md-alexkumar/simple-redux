import axios from "axios";
import {
  INCREMENT,
  DECREMENT,
  INCREMENT_ASYNC,
  DECREMENT_ASYNC,
} from "./actionType";

//Actions creators

export const doIncrement = () => {
  console.log("return");
  return { type: INCREMENT, data: 1 }; // 2nd argument of reducer
};
export const doDecrement = () => ({ type: DECREMENT, payload: 1 });

export const doIncrementAsync = () => (dispatch) => {
  axios
    .get("https://jsonplaceholder.typicode.com/todos/1") // dummy rest api
    .then(() => dispatch({ type: INCREMENT_ASYNC }))
    .catch(() => dispatch({ type: INCREMENT_ASYNC }));
};
export const doDecrementAsync = () => (dispatch) => {
  axios
    .get("https://jsonplaceholder.typicode.com/todos/1") // dummy rest api
    .then(() => dispatch({ type: DECREMENT_ASYNC }))
    .catch(() => dispatch({ type: DECREMENT_ASYNC }));
};
