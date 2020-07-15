import React from "react";
import "./style.css";

function SearchResults(props) {
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
            {props.results.map(result => (
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
export default SearchResults;
