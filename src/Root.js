import React from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import async from "middlewares/async";
import stateValidator from "middlewares/stateValidator";
import reducers from "reducers";

export default ({ children, initialState = {} }) => {
  const store = createStore(
    reducers,
    initialState,
    applyMiddleware(async, stateValidator)
  );

  return (
    // Provider is a React component that communicates directly
    // with every connected component

    // The empty object is for the store that is not created
    <Provider store={store}>{children}</Provider>
  );
};

// Props.children is a React construct, allows to take the component
// we've created and to wrap other components

// when the Root component is rendered, it will receive the App component
