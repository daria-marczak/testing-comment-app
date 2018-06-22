import React from "react";
import { mount } from "enzyme";
import moxios from "moxios";

import Root from "Root";
import App from "components/App";

beforeEach(() => {
  moxios.install();
  // moxios tricks axios into thinking that this
  // is the real data it's supposed to receive

  moxios.stubRequest("http://jsonplaceholder.typicode.com/comments", {
    status: 200,
    response: [{ name: "Fetched #1" }, { name: "Fetched #2" }]
  });
});

afterEach(() => {
  // Not to accidentally stub another request
  moxios.uninstall();
});

it("can fetch a list of comments and display them", done => {
  // Attempt to render the entire app
  const wrapped = mount(
    <Root>
      <App />
    </Root>
  );
  // Find the fetchComments button and click it
  wrapped.find(".fetch-comments").simulate("click");
  // Expect to find a list of comments
  // This will not work as it's all render in command line environment
  // in the Jest DOM => use moxios!

  // Introduce a tiny pause
  // Jest actually does not handle setTimeout very well
  // so we need to tell Jest that it's done with callback
  // setTimeout(() => {
  //   wrapped.update();
  //   expect(wrapped.find("li").length).toEqual(2);

  //   done(); // Signal for Jest that everything is done
  //   wrapped.unmount();
  // }, 100);

  // Moxios actually has a function for delayed actions
  moxios.wait(() => {
    wrapped.update();
    expect(wrapped.find("li").length).toEqual(2);

    done(); // Signal for Jest that everything is done
    wrapped.unmount();
  });
});
