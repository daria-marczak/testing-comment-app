import React from "react";
import { mount } from "enzyme";

import CommentBox from "components/CommentBox";

let wrapped;

beforeEach(() => {
  wrapped = mount(<CommentBox />);
});

it("has a text area and a button", () => {
  expect(wrapped.find("button").length).toEqual(1);
  expect(wrapped.find("textarea").length).toEqual(1);
  // Find can be used to find raw HTML elements as well
});

afterEach(() => {
  wrapped.unmount();
});
// We need to cleanup not to take memory

it("has a text area that users can type in", () => {
  // Find the textarea element and simulate a change event
  // We are trying to simulate the HTML event, not the React one
  wrapped.find("textarea").simulate("change", {
    target: { value: "New comment" }
  });
  // The second argument is a mock object, to provide a fake event object
  // This object is merged into real event: it goes into the handleChange
  // and sets the state to the value

  // Force the component to update as setState is async and we don't want to wait for it
  wrapped.update();
  // Assert the textareas value has changed

  expect(wrapped.find("textarea").prop("value")).toEqual("New comment");
  // The prop is actually the object key in the target
});

it("has a form that user can submit and is emptied", () => {
  wrapped.find("textarea").simulate("change", {
    target: { value: "Something something" }
  });
  wrapped.update();
  // First of all we need to simulate the form entering and update
  // then we can simulate the submit

  wrapped.find("form").simulate("submit");
  wrapped.update();

  expect(wrapped.find("textarea").prop("value")).toEqual("");
});
