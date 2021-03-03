import React, { Component } from "react";
import { connect, Provider } from "react-redux";
import { doIncrementAsync, doDecrementAsync } from "./actions";
import { store } from "./store";

// UI display
class Count extends Component {
  render() {
    console.log('this.props', this.props);
    return (
      <div className="App">
        <div className="App-title">Using redux for sync actions</div>
        <div className="App-count">{this.props.count1}</div>
        <button className="App-btn" onClick={this.props.doIncrementAsyncFn}>
          INCREMENT
        </button>
        <button className="App-btn" onClick={this.props.doDecrementAsyncFn}>
          DECREMENT
        </button>
      </div>
    );
  }
}
// export default connect(mapstateToprops, mapdispatchToprops)(Count);
// Connect the redux state and dispatch function to Count Class function.
const mapStateToProps = (state, ownProps) => {
  console.log("state", state);
  return {
    count1: state.count,
    name: []
  };
};

const mapDispatchToProps = dispatch => ({
  doIncrementAsyncFn: () => dispatch(doIncrementAsync()),
  doDecrementAsyncFn: () => dispatch(doDecrementAsync())
});

const App = connect(mapStateToProps, mapDispatchToProps)(Count);
// const App = connect(mapStateToProps, { doIncrementAsync, doDecrementAsync })(Count);

export default () => (
  <Provider store={store}>
    <App />
  </Provider>
);
