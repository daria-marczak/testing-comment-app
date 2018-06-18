import React from "react";
import ReactDOM from "react-dom";

import App from "../App";

it("shows the CommentBox", () => {
  const div = document.createElement("div");
  // It's a fake div that exists solely inside the memory of terminal
  ReactDOM.render(<App />, div);
  // Looks inside the div and checks if the CommentBox is in there
  expect(div.innerHTML).toContain("comment box");
  // Expectations - it's actually a core of tests
  // generally mae be a lot of expectations inside an if function

  // Not the best way to test as it's trying to check how the
  // component Comment Box is working and in general
  // we need to limit this knowledge

  ReactDOM.unmountComponentAtNode(div);
  // To clean up the components we've created during the test as
  // it is going to take up some memory
});
