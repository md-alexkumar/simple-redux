import { Provider, useDispatch, useSelector } from "react-redux";

import { doIncrementAsync, doDecrementAsync } from "./services/actions";
import store from "./services/store";
import "./index.css";

// UI display
function Count() {
  // Connect the redux state and dispatch function
  const count1 = useSelector((state) => state.count);
  const dispatch = useDispatch();
  const doIncrement = () => dispatch(doIncrementAsync());
  const doDecrement = () => dispatch(doDecrementAsync());
  return (
    <div className="App">
      <div className="App-title">Using redux for Async actions</div>
      <div className="App-count">{count1}</div>
      <button className="App-btn" onClick={doIncrement}>
        INCREMENT
      </button>
      <button className="App-btn" onClick={doDecrement}>
        DECREMENT
      </button>
    </div>
  );
}

const App = () => (
  <Provider store={store}>
    <Count />
  </Provider>
);

export default App;
