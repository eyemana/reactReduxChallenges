import { handleResponse, handleError } from "./apiUtils";
const baseUrl = process.env.API_URL + "/authors/";

export function getAuthors() {
  return fetch(baseUrl).then(handleResponse).catch(handleError);
}

export function saveAuthor(author) {
  return fetch(baseUrl + (author.id || ""), {
    method: author.id ? "PUT" : "POST", // POST for create, PUT to update when id already exists.
    headers: { "content-type": "application/json" },
    body: JSON.stringify(author),
  })
    .then(handleResponse)
    .catch(handleError);
}

export function deleteAuthor(author) {
  // if this were a real ap
  return fetch(baseUrl + author.id, { method: "DELETE" })
    .then(handleResponse)
    .catch(handleError);
}
//http://localhost:3001/authors/5
