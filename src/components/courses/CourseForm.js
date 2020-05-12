import React, { useEffect, useState } from "react";
import { Prompt } from "react-router";
import PropTypes from "prop-types";
import TextInput from "../common/TextInput";
import CreatableSelect from "react-select/creatable";

const CourseForm = ({
  course,
  authors,
  onSave,
  onChange,
  onCreateAuthor,
  saving = false,
  errors = {},
}) => {
  const [dirty, setDirty] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [authorFilter, setAuthorFilter] = useState({});
  const [options, setOptions] = useState([{}]);

  useEffect(() => {
    setAuthorFilter(
      course.id
        ? authors.find((author) => author.id == course.authorId)
        : { name: "Author...", id: 0 }
    );
  }, [course]);

  const handleTitleChange = (e) => {
    setDirty(true);
    onChange(e.target);
  };

  const handleCategoryChange = handleTitleChange;

  const handleAuthorChange = (newValue, actionMeta) => {
    console.group("Value Changed");
    console.log(newValue);
    console.log(`action: ${actionMeta.action}`);
    console.groupEnd();
    setDirty(true);
    setAuthorFilter({ id: newValue.value, name: newValue.label });
    onChange({ name: "authorId", value: newValue.value });
  };

  const handleCreateAuthor = (newValue) => {
    setLoading(true);
    console.group("Author created");
    console.log("Wait a moment...");
    setTimeout(() => {
      const newOption = onCreateAuthor({ id: null, name: newValue });
      console.log(newOption);
      console.groupEnd();
      setLoading(false);
      setOptions([...options, newOption]);
    }, 1000);
  };

  return (
    <form onSubmit={onSave}>
      <h2>{course.id ? "Edit" : "Add"} Course</h2>
      {errors.onSave && (
        <div className="alert alert-danger" role="alert">
          {errors.onSave}
        </div>
      )}
      <TextInput
        name="title"
        label="Title"
        value={course.title}
        onChange={handleTitleChange}
        error={errors.title}
      />

      <CreatableSelect
        isClearable
        isDisabled={isLoading}
        isLoading={isLoading}
        value={{ value: authorFilter.id, label: authorFilter.name }}
        options={authors.map((author) => ({
          value: author.id,
          label: author.name,
        }))}
        onChange={handleAuthorChange}
        onCreateOption={handleCreateAuthor}
        error={"author" in errors ? errors["author"] : ""}
      />

      <TextInput
        name="category"
        label="Category"
        value={course.category}
        onChange={handleCategoryChange}
        error={errors.category}
      />

      <Prompt
        when={dirty}
        message="You have unsaved changes.  Are you sure you want to leave this page?"
      />

      <button type="submit" disabled={saving} className="btn btn-primary">
        {saving ? "Saving..." : "Save"}
      </button>
    </form>
  );
};

CourseForm.propTypes = {
  authors: PropTypes.array.isRequired,
  course: PropTypes.object.isRequired,
  errors: PropTypes.object,
  onSave: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  onCreateAuthor: PropTypes.func.isRequired,
  saving: PropTypes.bool,
};

export default CourseForm;
