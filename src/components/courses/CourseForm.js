import React, { useState } from "react";
import { Prompt } from "react-router";
import PropTypes from "prop-types";
import TextInput from "../common/TextInput";
import SelectInput from "../common/SelectInput";

const CourseForm = ({
  course,
  authors,
  onSave,
  onChange,
  saving = false,
  errors = {},
}) => {
  const [dirty, setDirty] = useState(false);

  // useEffect(() => {
  //   if (courses.length === 0) {
  //     loadCourses().catch((error) => {
  //       alert("Loading courses failed" + error);
  //     });
  //   } else {
  //     setCourse({ ...props.course });
  //   }

  //   if (authors.length === 0) {
  //     loadAuthors().catch((error) => {
  //       alert("Loading authors failed" + error);
  //     });
  //   }
  // }, [course]);

  const handleChange = (e) => {
    setDirty(true);
    onChange(e);
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
        onChange={handleChange}
        error={errors.title}
      />

      <SelectInput
        name="authorId"
        label="Author"
        value={course.authorId || ""}
        defaultOption="Select Author"
        options={authors.map((author) => ({
          value: author.id,
          text: author.name,
        }))}
        onChange={handleChange}
        error={errors.author}
      />

      <TextInput
        name="category"
        label="Category"
        value={course.category}
        onChange={handleChange}
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
  saving: PropTypes.bool,
};

export default CourseForm;
