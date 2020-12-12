// Imports
// React Imports
import React from "react";
// Enzyme imports
import { shallow } from "enzyme";
// Component Imports
import {Buttons} from "./Buttons";

describe("Buttons", () => {
  let container:any;
  beforeEach(() => (container = shallow(<Buttons StatusR={"finished"} Time={{ ms: 88, s: 54, m: 1, h: 15 }} ResumeR={()=>{}} ResetR={()=>{}} PauseR={()=>{}} StartR={()=>{}}/>)))
  it("should render a <div />", () => {
    expect(container.find("div").length).toEqual(1)
  })
  it("should render three <button />", () => {
    expect(container.find("button").length).toEqual(1)
  })
})

describe("Buttons", () => {
  let container:any;
  beforeEach(() => (container = shallow(<Buttons StatusR={"running"} Time={{ ms: 88, s: 54, m: 1, h: 15 }} ResumeR={()=>{}} ResetR={()=>{}} PauseR={()=>{}} StartR={()=>{}}/>)))
  it("should render a <div />", () => {
    expect(container.find("div").length).toEqual(2)
  })
  it("should render three <button />", () => {
    expect(container.find("button").length).toEqual(2)
  })
})

describe("Buttons", () => {
  let container:any;
  beforeEach(() => (container = shallow(<Buttons StatusR={"paused"} Time={{ ms: 88, s: 54, m: 1, h: 15 }} ResumeR={()=>{}} ResetR={()=>{}} PauseR={()=>{}} StartR={()=>{}}/>)))
  it("should render a <div />", () => {
    expect(container.find("div").length).toEqual(2)
  })
  it("should render a <button />", () => {
    expect(container.find("button").length).toEqual(2)
  })
})

describe("Buttons", () => {
  let container:any;
  beforeEach(() => (container = shallow(<Buttons StatusR={"completed"} Time={{ ms: 88, s: 54, m: 1, h: 15 }} ResumeR={()=>{}} ResetR={()=>{}} PauseR={()=>{}} StartR={()=>{}}/>)))
  it("should render a <div />", () => {
    expect(container.find("div").length).toEqual(2)
  })
  it("should render a <button />", () => {
    expect(container.find("button").length).toEqual(1)
  })
})