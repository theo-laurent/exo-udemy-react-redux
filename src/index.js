import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
// import for redux
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
// recucers
import CounterReducer from "./reducers/CounterReducer";
import AddCartReducer from "./reducers/AddCartReducer";

const rootReducer = combineReducers({
  CounterReducer,
  AddCartReducer,
});
const Store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={Store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
