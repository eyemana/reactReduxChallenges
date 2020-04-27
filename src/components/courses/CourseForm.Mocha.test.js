import React from "react";
import CourseForm from "./CourseForm";
import { shallow } from "enzyme";
import { expect } from "chai";

function renderCourseForm(args) {
  const defaultProps = {
    authors: [],
    course: {},
    saving: false,
    errors: {},
    onSave: () => {},
    onChange: () => {},
  };

  const props = { ...defaultProps, ...args };
  return shallow(<CourseForm {...props} />);
}

it("renders form and header when no course passed in", () => {
  const wrapper = renderCourseForm();
  // console.log(wrapper.debug());
  expect(wrapper.find("form").length).to.equal(1);
  expect(wrapper.find("h2").text()).to.equal("Add Course");
});

it("renders form and header when courses passed in", () => {
  const wrapper = renderCourseForm({
    course: { id: 1, title: "test_title", authorId: 1, category: "test_cat" },
  });
  // console.log(wrapper.debug());
  expect(wrapper.find("form").length).to.equal(1);
  expect(wrapper.find("h2").text()).to.equal("Edit Course");
});

it('labels save buttons as "Save" when not saving', () => {
  const wrapper = renderCourseForm();
  expect(wrapper.find("button").text()).to.equal("Save");
});

it('labels save button as "Saving..." when saving', () => {
  const wrapper = renderCourseForm({ saving: true });
  expect(wrapper.find("button").text()).to.equal("Saving...");
});
