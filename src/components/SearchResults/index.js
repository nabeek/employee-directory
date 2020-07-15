import React from "react";
import "./style.css";

function SearchResults(props) {
  return (
    <ul className="list-group search-results">
      {props.results.map(result => (
        <li key={result.login.uuid} className="list-group-item">
          <img
            alt={result.name.first}
            src={result.picture.large}
            className="img-fluid"
          />
        </li>
      ))}
    </ul>
  );
}

export default SearchResults;
