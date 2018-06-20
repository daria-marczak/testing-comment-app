import { combineReducers } from "redux";

import ReducerComments from "reducers/ReducerComments";

export default combineReducers({
  comments: ReducerComments
});
