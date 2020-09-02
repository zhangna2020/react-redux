import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import reducer from './reducers/counter';
import rootReducer from './reducers/rootReducer';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

const store = createStore(rootReducer);

// store.subscribe(() => console.log("state:", store.getState()));

// const render = () => {
//   ReactDOM.render(
//     <App
//       onIncrement={() => store.dispatch({ type: "increment" })}
//       onDecrement={() => store.dispatch({ type: "decrement" })}
//       value={store.getState()}
//     />
//     ,
//     document.getElementById('root')
//   );
// }

// render();
// store.subscribe(render);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  ,
  document.getElementById('root')
);