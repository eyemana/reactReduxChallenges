import React from "react";
import { mount } from "enzyme";
import { expect } from "chai";
import { authors, newCourse, courses } from "../../../tools/mockData";
import { ManageCoursePage } from "./ManageCoursePage";
import sinon from "sinon";
import configureStore from "../../redux/configureStore";
import { Provider as ReduxProvider } from "react-redux";

function render(args) {
  const defaultProps = {
    authors,
    courses,
    // Passed from React Router in real app, so just stubbing in for test.
    // Could also choose to use MemoryRouter as shown in Header.test.js,
    // or even wrap with React Router, depending on whether I
    // need to test React Router related behavior.
    history: {},
    saveCourse: sinon.spy(),
    loadAuthors: sinon.spy(),
    loadCourses: sinon.spy(),
    course: newCourse,
    match: { params: { slug: "scooby-doo" } },
  };

  const store = configureStore();
  const props = { ...defaultProps, ...args };

  return mount(
    <ReduxProvider store={store}>
      <ManageCoursePage {...props} />
    </ReduxProvider>
  );
}

it("sets error when attempting to save an empty title field", () => {
  const wrapper = render();
  wrapper.find("form").simulate("submit");
  const error = wrapper.find(".alert").first();
  expect(error.text()).to.equal("Title is required.");
});
