// Imports
// React Imports
import React from "react";
// enzyme imports
import { shallow } from "enzyme";
// Component Imports
import {TimeDisplay} from "./TimeDisplay";

describe("TimeDisplay", () => {
  let container:any;
  beforeEach(() => (container = shallow(<TimeDisplay Time={{ ms: 88, s: 54, m: 1, h: 15 }}/>)))
  it("should render a <div />", () => {
    expect(container.find("div").length).toEqual(1)
  });
  it("should render a <p />", () => {
    expect(container.find("p").length).toEqual(1)
  });
  it("should render 4 <span />", () => {
    expect(container.find("span").length).toEqual(4)
  });
  it("check hours based on current time", () => {
    expect(container.find("span").slice(0, 1).text()).toBe("15:");
  });
  it("check minutes based on current time", () => {
    expect(container.find("span").slice(1, 2).text()).toBe("01:");
  });
  it("check secobds based on current time", () => {
    expect(container.find("span").slice(2, 3).text()).toBe("54.");
  });
  it("check ms based on current time", () => {
    expect(container.find("span").slice(3, 4).text()).toBe("88");
  });
})