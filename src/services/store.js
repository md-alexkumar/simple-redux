import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";

import Counter from "./reducer";

// Connect the reducer to craete store
const store = createStore(Counter, applyMiddleware(thunk));
export default store;
