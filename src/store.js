import { createStore } from "redux";

import Counter from './reducer'

// Connect the reducer to craete store
export const store = createStore(Counter);
