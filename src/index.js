import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";

import reducers from "reducers";
import App from "components/App";

// Provider is a React component that communicates directly
// with every connected component

// The empty object is for the store that is not created
ReactDOM.render(
  <Provider store={createStore(reducers, {})}>
    <App />
  </Provider>,
  document.getElementById("root")
);
