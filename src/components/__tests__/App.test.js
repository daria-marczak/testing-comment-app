import React from "react";
import { shallow } from "enzyme";
// renders an instance of App component and none of its children

import App from "../App";
import CommentBox from "../CommentBox";
import CommentList from "../CommentList";

it("shows the CommentBox", () => {
  const wrapped = shallow(<App />); // wrapped version of App component

  expect(wrapped.find(CommentBox).length).toEqual(1);
  // we search for every copy of CommentBox, this gives us an array
  // and we want it to be exactly 1
});

it("shows the CommentList", () => {
  const wrapped = shallow(<App />);

  expect(wrapped.find(CommentList).length).toEqual(1);
});
