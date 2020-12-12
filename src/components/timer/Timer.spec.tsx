// Imports
// React Imports
import React from "react";
// enzyme imports
import { shallow } from "enzyme";
// Component Imports
import {Timer} from "./Timer";

describe("Timer", () => {
  let container:any;
  beforeEach(() => (container = shallow(<Timer />)))
  it("should render a <div />", () => {
    expect(container.find("div").length).toEqual(1)
  });
})