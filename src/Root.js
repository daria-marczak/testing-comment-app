import React from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";

import reducers from "reducers";

export default ({ children, initialState = {} }) => {
  return (
    // Provider is a React component that communicates directly
    // with every connected component

    // The empty object is for the store that is not created
    // The initialState is for the tests so that it has the initialstate
    <Provider store={createStore(reducers, initialState)}>{children}</Provider>
  );
};

// Props.children is a React construct, allows to take the component
// we've created and to wrap other components

// when the Root component is rendered, it will receive the App component
