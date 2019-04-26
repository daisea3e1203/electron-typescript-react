import React from "react";
import enzyme from "enzyme";
import Sample from "./Sample";

test("renders hello", () => {
  const hello = enzyme.shallow(<Sample />);
  expect(hello.find(".hello>p").text()).toEqual("hello");
});
