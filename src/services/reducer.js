import {
  INCREMENT,
  DECREMENT,
  INCREMENT_ASYNC,
  DECREMENT_ASYNC,
} from "./actionType";

const INITIAL_STATE = { count: 0 };
// Reducer function
function Counter(state = INITIAL_STATE, action) {
  console.log("action.type", action.type);
  switch (action.type) {
    case INCREMENT:
    case INCREMENT_ASYNC:
      return { ...state, count: state.count + 1 };
    case DECREMENT:
    case DECREMENT_ASYNC:
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }
}

export default Counter;
