import React from "react";
import AuthorForm from "./AuthorForm";
import { shallow } from "enzyme";
import { expect } from "chai";

function renderAuthorForm(args) {
  const defaultProps = {
    author: [],
    saving: false,
    errors: {},
    onSave: () => {},
    onChange: () => {},
  };

  const props = { ...defaultProps, ...args };
  return shallow(<AuthorForm {...props} />);
}

it("renders form and header when no course passed in", () => {
  const wrapper = renderAuthorForm();
  // console.log(wrapper.debug());
  expect(wrapper.find("form").length).to.equal(1);
  expect(wrapper.find("h2").text()).to.equal("Add Author");
});

it("renders form and header when courses passed in", () => {
  const wrapper = renderAuthorForm({
    author: { id: 1, name: "test author arthur" },
  });
  // console.log(wrapper.debug());
  expect(wrapper.find("form").length).to.equal(1);
  expect(wrapper.find("h2").text()).to.equal("Edit Author");
});

it('labels save buttons as "Save" when not saving', () => {
  const wrapper = renderAuthorForm();
  expect(wrapper.find("button").text()).to.equal("Save");
});

it('labels save button as "Saving..." when saving', () => {
  const wrapper = renderAuthorForm({ saving: true });
  expect(wrapper.find("button").text()).to.equal("Saving...");
});
