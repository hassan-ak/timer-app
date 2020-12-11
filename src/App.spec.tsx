// Imports
// React Imports
import React from "react";
// Enzyme imports
import { shallow } from "enzyme";
import Header from "./components/header/Header";
// Component Imports
import App from "./App";

describe("check App component renders", () => {
  let container:any;
  beforeEach(() => (container = shallow(<App />)))
  it("should render a <div />", () => {
    expect(container.find("div").length).toEqual(1)
  })
  it("should render the Header Component", () => {
    expect(container.containsMatchingElement(<Header/>)).toEqual(true)
  })
})