// Imports
// React Imports
import React from "react";
// enzyme imports
import { shallow } from "enzyme";
// Component Imports
import {TimeDisplay} from "./TimeDisplay";

describe("TimeDisplay when status finished", () => {
  let container:any;
  beforeEach(() => (container = shallow(<TimeDisplay Time={{ ms: 88, s: 54, m: 1, h: 15 }} StatusR={"finished"} hIR={()=>{}} hDR={()=>{}} mIR={()=>{}} mDR={()=>{}} sIR={()=>{}} sDR={()=>{}}/>)))
  it("should render 10 <div />", () => {
    expect(container.find("div").length).toEqual(10)
  });
  it("should render 7 <span />", () => {
    expect(container.find("span").length).toEqual(7)
  });
  it("should render 6 <button />", () => {
    expect(container.find("button").length).toEqual(6)
  });
  it("check hours based on current time", () => {
    expect(container.find("span").slice(0, 1).text()).toBe("15");
  });
  it("check minutes based on current time", () => {
    expect(container.find("span").slice(2, 3).text()).toBe("01");
  });
  it("check secobds based on current time", () => {
    expect(container.find("span").slice(4, 5).text()).toBe("54");
  });
  it("check ms based on current time", () => {
    expect(container.find("span").slice(6, 7).text()).toBe("88");
  });
})

describe("TimeDisplay when status not finished", () => {
  let container:any;
  beforeEach(() => (container = shallow(<TimeDisplay Time={{ ms: 88, s: 54, m: 1, h: 15 }} StatusR={"running"||"paused"||"completed"} hIR={()=>{}} hDR={()=>{}} mIR={()=>{}} mDR={()=>{}} sIR={()=>{}} sDR={()=>{}}/>)))
  it("should render 10 <div />", () => {
    expect(container.find("div").length).toEqual(10)
  });
  it("should render 7 <span />", () => {
    expect(container.find("span").length).toEqual(7)
  });
  it("should render 6 <button />", () => {
    expect(container.find("button").length).toEqual(0)
  });
  it("check hours based on current time", () => {
    expect(container.find("span").slice(0, 1).text()).toBe("15");
  });
  it("check minutes based on current time", () => {
    expect(container.find("span").slice(2, 3).text()).toBe("01");
  });
  it("check secobds based on current time", () => {
    expect(container.find("span").slice(4, 5).text()).toBe("54");
  });
  it("check ms based on current time", () => {
    expect(container.find("span").slice(6, 7).text()).toBe("88");
  });
})