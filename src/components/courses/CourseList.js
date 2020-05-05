import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import SelectInput from "../common/SelectInput";

export function CourseList({
  courses,
  authors,
  onDeleteClick,
  onAuthorFilterChange,
}) {
  // eslint-disable-next-line no-unused-vars
  const [authorFilter, setAuthorFilter] = useState("");

  function handleAuthorFilterChange(event) {
    const { value } = event.target;
    setAuthorFilter(value);
    onAuthorFilterChange(value);
  }

  return (
    <>
      <SelectInput
        name="authorFilter"
        label="Filter by Author"
        value={authorFilter}
        defaultOption="Filter by Author"
        options={authors.map((author) => ({
          value: author.id,
          text: author.name,
        }))}
        onChange={handleAuthorFilterChange}
      />

      <table className="table">
        <thead>
          <tr>
            <th />
            <th>Title</th>
            <th>Author</th>
            <th>Category</th>
            <th />
          </tr>
        </thead>
        <tbody>
          {courses.map((course) => {
            return (
              <tr key={course.id}>
                <td>
                  <a
                    className="btn btn-light"
                    href={"http://pluralsight.com/courses/" + course.slug}
                  >
                    Watch
                  </a>
                </td>
                <td>
                  <Link to={"/course/" + course.slug}>{course.title}</Link>
                </td>
                <td>{course.authorName}</td>
                <td>{course.category}</td>
                <td>
                  <button
                    className="btn btn-outline-danger"
                    onClick={() => onDeleteClick(course)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

CourseList.propTypes = {
  courses: PropTypes.array.isRequired,
  authors: PropTypes.array.isRequired,
  onDeleteClick: PropTypes.func.isRequired,
  onAuthorFilterChange: PropTypes.func.isRequired,
};

export default CourseList;
