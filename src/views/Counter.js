import React from 'react';
import { connect } from 'react-redux';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

class Counter extends React.Component {
  increment = () => {
    this.props.dispatch({ type: 'INCREMENT' });
  }

  decrement = () => {
    this.props.dispatch({ type: 'DECREMENT' });
  }

  render() {
    return (
        <div className="App App-header">
          <header className="App-header">
            <h2>Counter: {this.props.count}</h2>
            <div>
              <button onClick={this.decrement}>Substract</button>
              <button onClick={this.increment}>Add</button>
            </div>
          </header>
        </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    count: state.count
  };
}

export default connect(mapStateToProps)(Counter);

const initialState = {
  count: 0
};

function reducer(state = initialState, action) {
  switch(action.type) {
    case 'INCREMENT':
      return {
        count: state.count + 1
      };
    case 'DECREMENT':
      return {
        count: state.count - 1
      };
    default:
      return state;
  }
}

const store = createStore(reducer);

const App = () => (
  <Provider store={store}>
    <Counter/>
  </Provider>
);

render(<App />, document.getElementById('root'));