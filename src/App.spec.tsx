// Imports
// React Imports
import React from "react";
// Enzyme imports
import { shallow } from "enzyme";
import Header from "./components/header/Header";
import { Timer } from "./components/timer/Timer";
import Footer from "./components/footer/Footer";
// Component Imports
import App from "./App";

describe("check App component renders", () => {
    let container:any;
    beforeEach(() => (container = shallow(<App />)))
    it("should render a <div />", () => {
        expect(container.find("div").length).toEqual(2)
    });
    it("should render the Header Component", () => {
        expect(container.containsMatchingElement(<Header/>)).toEqual(true)
    });
    it("should render the Footer Component", () => {
        expect(container.containsMatchingElement(<Footer/>)).toEqual(true)
    });
    it("should render the Timer Component", () => {
        expect(container.containsMatchingElement(<Timer/>)).toEqual(true)
    });
})