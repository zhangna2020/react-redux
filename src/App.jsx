import React, { Component } from 'react';
import { connect } from 'react-redux';
// import {increment,decrement} from './actions/action';
import * as counterAction from './actions/counterAction';
import { bindActionCreators } from 'redux';
import User from './components/user';

class App extends Component {
  render() {
    // console.log(this.props)
    return (
      <div>
        <h1>{this.props.counter}</h1>
        <p>
          {/* <button onClick={this.props.onIncrement}>increment</button>
          <button onClick={this.props.onDecrement}>decrement</button> */}
          {/* <button onClick={() => this.props.increment()}>increment</button>
          <button onClick={() => this.props.decrement()}>decrement</button> */}
          <button onClick={() => this.props.counterAction.increment(10)}>increment</button>
          <button onClick={() => this.props.counterAction.decrement(5)}>decrement</button>
        </p>
        <User />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state)
  return {
    counter: state.counter
  }
}

// const mapDispatchToProps = (dispatch) => {
//   return {
//     increment:()=>{dispatch(increment())},
//     decrement:()=>{dispatch(decrement())},
//   }
// }

const mapDispatchToProps = (dispatch) => {
  return {
    counterAction: bindActionCreators(counterAction, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);