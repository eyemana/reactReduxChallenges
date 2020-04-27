import React from "react";
import CourseForm from "./CourseForm";
import renderer from "react-test-renderer";
import sinon from "sinon";
import { expect } from "chai";
import { courses, authors } from "../../../tools/mockData";

it("sets submit button label 'Saving...' when saving is true", () => {
  const tree = renderer.create(
    <CourseForm
      course={courses[0]}
      authors={authors}
      onSave={sinon.spy()}
      onChange={sinon.spy()}
      saving
    />
  );

  expect(tree).to.matchSnapshot();
});

it("sets submit button label 'Save' when saving is false", () => {
  const tree = renderer.create(
    <CourseForm
      course={courses[0]}
      authors={authors}
      onSave={sinon.spy()}
      onChange={sinon.spy()}
      saving={false}
    />
  );

  expect(tree).to.matchSnapshot();
});
