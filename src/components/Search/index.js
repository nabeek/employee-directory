import React from "react";
import "./style.css";

function Search(props) {
  return (
    <div className="columns is-centered">
      <div className="column is-4">
        <div className="field">
          <input
            value={props.value}
            onChange={props.handleInputChange}
            name="search"
            type="text"
            className="input"
            placeholder="Search employee names"
          />
        </div>
      </div>
    </div>
  );
}

export default Search;
