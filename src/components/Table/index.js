import React from "react";
import "./style.css";

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
              <th>Name</th>
              <th>Email</th>
              <th>Location</th>
              <th>Cell Number</th>
              <th>Age</th>
            </tr>
          </thead>
          <tbody>
            {results.map(result => (
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
