import React from "react";
import "./style.css";

function Search(props) {
  return (
    <div className="columns is-centered">
      <div className="column is-4">
        <div className="field is-grouped">
          <input
            value={props.value}
            onChange={props.handleInputChange}
            name="search"
            type="text"
            className="input"
          />
          <div className="control">
            <button
              className="button is-primary"
              onClick={props.handleFormSubmit}
            >
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Search;
