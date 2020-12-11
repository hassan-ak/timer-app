// Imports
// React Imports
import React from "react";
// Enzyme imports
import { shallow } from "enzyme";
// Component Imports
import {Buttons} from "./Buttons";

describe("Buttons", () => {
  let container:any;
  beforeEach(() => (container = shallow(<Buttons StatusR={"finished"} ResumeR={()=>{}} ResetR={()=>{}} PauseR={()=>{}} StartR={()=>{}}/>)))
  it("should render a <div />", () => {
    expect(container.find("div").length).toEqual(1)
  })
  it("should render three <button />", () => {
    expect(container.find("button").length).toEqual(1)
  })
})

describe("Buttons", () => {
  let container:any;
  beforeEach(() => (container = shallow(<Buttons StatusR={"running"} ResumeR={()=>{}} ResetR={()=>{}} PauseR={()=>{}} StartR={()=>{}}/>)))
  it("should render a <div />", () => {
    expect(container.find("div").length).toEqual(2)
  })
  it("should render three <button />", () => {
    expect(container.find("button").length).toEqual(2)
  })
})

describe("Buttons", () => {
  let container:any;
  beforeEach(() => (container = shallow(<Buttons StatusR={"paused"} ResumeR={()=>{}} ResetR={()=>{}} PauseR={()=>{}} StartR={()=>{}}/>)))
  it("should render a <div />", () => {
    expect(container.find("div").length).toEqual(2)
  })
  it("should render a <button />", () => {
    expect(container.find("button").length).toEqual(2)
  })
})