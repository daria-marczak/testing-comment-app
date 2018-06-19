import React from "react";
import { shallow } from "enzyme";
// Renders an instance of App component and none of its children

import App from "components/App";
import CommentBox from "components/CommentBox";
import CommentList from "components/CommentList";
// I can now move piece files

let wrapped; // It's out of beforeEach scope and can be
// accessed in those tests

beforeEach(() => {
  wrapped = shallow(<App />); // Wrapped version of App component
}); // We extract it so as not to repeat the same line of code
// before every single line of code, run first this one

it("shows the CommentBox", () => {
  expect(wrapped.find(CommentBox).length).toEqual(1);
  // We search for every copy of CommentBox, this gives us an array
  // and we want it to be exactly 1
});

it("shows the CommentList", () => {
  expect(wrapped.find(CommentList).length).toEqual(1);
});
