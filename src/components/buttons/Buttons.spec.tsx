// Imports
// React Imports
import React from "react";
// Enzyme imports
import { shallow } from "enzyme";
// Component Imports
import {Buttons} from "./Buttons";

describe("Buttons", () => {
  let container:any;
  beforeEach(() => (container = shallow(<Buttons/>)))
  it("should render a <div />", () => {
    expect(container.find("div").length).toEqual(1)
  })
  it("should render three <button />", () => {
    expect(container.find("button").length).toEqual(3)
  })
})