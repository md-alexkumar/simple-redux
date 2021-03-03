import React, { Component } from "react";
import { connect, Provider } from "react-redux";
import { doIncrement, doDecrement } from "./actions";
import { store } from "./store";

// UI display
class Count extends Component {
  render() {
    console.log('this.props', this.props);
    return (
      <div className="App">
        <div className="App-title">Using redux for sync actions</div>
        <div className="App-count">{this.props.count1}</div>
        <button className="App-btn" onClick={this.props.doIncrementFn}>
          INCREMENT
        </button>
        <button className="App-btn" onClick={this.props.doDecrementFn}>
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
  doIncrementFn: () => dispatch(doIncrement()),
  doDecrementFn: () => dispatch(doDecrement())
});

const App = connect(mapStateToProps, mapDispatchToProps)(Count);
// const App = connect(mapStateToProps, { doIncrement, doDecrement })(Count);

export default () => (
  <Provider store={store}>
    <App />
  </Provider>
);
