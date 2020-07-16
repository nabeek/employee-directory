import React from "react";
import "./style.css";
import { FaSort } from "react-icons/fa";

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
          <p className="has-text-centered m-t1 m-b1">
            Click on the <FaSort style={{ verticalAlign: "middle" }} /> to sort
            alphabetically by name
          </p>
        </div>
      </div>
    </div>
  );
}

export default Search;
