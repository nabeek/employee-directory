import React from "react";
import "./style.css";
import { FaSort } from "react-icons/fa";

function EmployeeList(props) {
  // Use a ternary to assign a particular set of employees, and then map that list
  // This reduces the amount of code needed in the tbody
  let results;
  props.filteredEmployees[0] !== undefined
    ? (results = props.filteredEmployees)
    : (results = props.employees);

  // Return the structured table and map the employees based on initial load or filtered list
  return (
    <div className="columns is-centered">
      <div className="column is-10">
        <table className="table is-fullwidth">
          <thead>
            <tr>
              <th>Headshot</th>
              <th>
                Name {"  "}
                <FaSort
                  onClick={props.handleSort}
                  style={{ cursor: "pointer", verticalAlign: "middle" }}
                />
              </th>
              <th>Email</th>
              <th>Location</th>
              <th>Cell Number</th>
              <th>Age</th>
            </tr>
          </thead>
          <tbody>
            {results.map(result => (
              // Add a key to each entry to enable sorting and filtering
              <tr key={result.login.salt}>
                <td>
                  <img alt={result.name.first} src={result.picture.large} />
                </td>
                <td>
                  {result.name.first} {result.name.last}
                </td>
                <td>{result.email}</td>
                <td>
                  {result.location.city}, {result.location.state}
                </td>
                <td>{result.cell}</td>
                <td>{result.dob.age}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default EmployeeList;
