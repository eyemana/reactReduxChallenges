import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom"; // eslint-disable-line no-unused-vars

const AuthorList = ({ authors, onDeleteClick }) => (
  <table className="table">
    <thead>
      <tr>
        <th>Author Name</th>
        <th>Courses by Author</th>
        <th />
      </tr>
    </thead>
    <tbody>
      {authors.map((author) => {
        return (
          <tr key={author.id}>
            <td>
              <Link to={"/author/" + author.id}>{author.name}</Link>
            </td>
            <td>
              {author.courses.length > 0
                ? author.courses
                : "No courses found by this author."}
            </td>
            <td>
              {author.courses.length > 0 ? (
                ""
              ) : (
                <button
                  className="btn btn-outline-danger"
                  onClick={() => onDeleteClick(author)}
                >
                  Delete
                </button>
              )}
            </td>
          </tr>
        );
      })}
    </tbody>
  </table>
);

AuthorList.propTypes = {
  authors: PropTypes.array.isRequired,
  onDeleteClick: PropTypes.func.isRequired,
};

export default AuthorList;
