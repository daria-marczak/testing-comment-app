import ReducerComments from "reducers/ReducerComments";
import { SAVE_COMMENT } from "actions/types";

// pass a fake action and expect it to return the payload
it("handles actions of type SAVE_COMMENT", () => {
  const action = {
    type: SAVE_COMMENT,
    payload: "New comment"
  };

  const newState = ReducerComments([], action);
  expect(newState).toEqual(["New comment"]);
});

it("handles actions with unknown type", () => {
  const newState = ReducerComments([], {});
  // Action can be an empty object as it is the same
  // as an action of no type

  expect(newState).toEqual([]);
});
