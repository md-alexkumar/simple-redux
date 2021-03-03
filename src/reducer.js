import { INCREMENT, DECREMENT, INCREMENT_ASYNC, DECREMENT_ASYNC } from "./actionType";

const INITIAL_STATE = { count: 0 };
// Reducer function
function Counter(state = INITIAL_STATE, action) {
  switch (action.type) {
    case INCREMENT || INCREMENT_ASYNC:
      console.log("action", action);
      return { ...state, count: state.count + 1 };
    case DECREMENT || DECREMENT_ASYNC:
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }
}

export default Counter;
