import { combineReducers } from "redux";

import ReducerComments from "reducers/ReducerComments";
import ReducerAuth from "reducers/ReducerAuth";

export default combineReducers({
  comments: ReducerComments,
  auth: ReducerAuth
});
