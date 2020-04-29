import courseReducer from "./courseReducer";
import * as actions from "../actions/courseActions";
import { expect } from "chai";

it("should add course when passed CREATE_COURSE_SUCCESS", () => {
  // arrange
  const initialState = [
    {
      title: "A",
    },
    {
      title: "B",
    },
  ];

  const newCourse = {
    title: "C",
  };

  const action = actions.createCourseSuccess(newCourse);

  // act
  const newState = courseReducer(initialState, action);

  // assert
  expect(newState.length).to.equal(3);
  expect(newState[0].title).to.equal("A");
  expect(newState[1].title).to.equal("B");
  expect(newState[2].title).to.equal("C");
});

it("should update course when passed UPDATE_COURSE_SUCCESS", () => {
  // arrange
  const initialState = [
    { id: 1, title: "A" },
    { id: 2, title: "B" },
    { id: 3, title: "C" },
  ];

  const course = { id: 2, title: "New Title" };
  const action = actions.updateCourseSuccess(course);

  // act
  const newState = courseReducer(initialState, action);
  const updatedCourse = newState.find((a) => a.id == course.id);
  const untouchedCourse = newState.find((a) => a.id == 1);

  // assert
  expect(updatedCourse.title).to.equal("New Title");
  expect(untouchedCourse.title).to.equal("A");
  expect(newState.length).to.equal(3);
});
