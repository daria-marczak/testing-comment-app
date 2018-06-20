import React from "react";
import { mount } from "enzyme";

import CommentBox from "components/CommentBox";

let wrapped;

beforeEach(() => {
  wrapped = mount(<CommentBox />);
});

afterEach(() => {
  wrapped.unmount();
});

it("has a text area and a button", () => {
  expect(wrapped.find("button").length).toEqual(1);
  expect(wrapped.find("textarea").length).toEqual(1);
  // Find can be used to find raw HTML elements as well
});

// Describe is used to group together certain sets of tests
// that have common lines of code
// It can also limit the scope of beforeEach
describe("the textarea", () => {
  beforeEach(() => {
    wrapped.find("textarea").simulate("change", {
      target: { value: "New comment" }
    });
    wrapped.update();
  });

  it("has a text area that users can type in", () => {
    expect(wrapped.find("textarea").prop("value")).toEqual("New comment");
    // The prop is actually the object key in the target
  });

  it("has a form that is emptied after submit", () => {
    wrapped.find("form").simulate("submit");
    wrapped.update();

    expect(wrapped.find("textarea").prop("value")).toEqual("");
  });
});
