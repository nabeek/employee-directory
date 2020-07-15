import React, { Component } from "react";
import API from "../../utils/API";
import Search from "../Search";
import Table from "../Table";

class DirectoryContainer extends Component {
  state = {
    employees: [],
    filteredEmployees: [],
    sort: "ascending",
  };

  componentDidMount() {
    this.loadEmployees();
  }

  loadEmployees = () => {
    API.getEmployees().then(res => {
      this.setState({ employees: res.data.results });
    });
  };

  handleInputChange = event => {
    const value = event.target.value;
    const filteredList = this.state.employees.filter(employee => {
      let names =
        employee.name.first.toLowerCase() +
        " " +
        employee.name.last.toLowerCase();

      // The API responses for first and last name are searched using the input value
      // Any match is returned, regardless of value length, but no matches will return the full list
      if (names.indexOf(value.toLowerCase()) !== -1) {
        return employee;
      }
    });

    // Replace the array of filteredEmployees (initially empty) with the list above

    this.setState({
      filteredEmployees: !value ? [] : filteredList,
    });
  };

  handleSort = () => {
    let results;
    this.state.filteredEmployees[0] !== undefined
      ? (results = this.state.filteredEmployees)
      : (results = this.state.employees);

    switch (this.state.sort) {
      case "ascending":
        const ascendingList = results.sort((a, b) => {
          return a.name.first < b.name.first ? -1 : 1;
        });
        this.setState({
          employees: ascendingList,
        });
        this.setState({ sort: "descending" });
        break;
      case "descending":
        const descendingList = results.sort((a, b) => {
          return a.name.first < b.name.first ? 1 : -1;
        });
        this.setState({
          employees: descendingList,
        });
        this.setState({ sort: "ascending" });
        break;
      default:
        console.log("Error");
        break;
    }
  };

  render() {
    return (
      <div className="container">
        <h1 className="title is-1 has-text-centered">Employee Directory</h1>
        <Search handleInputChange={this.handleInputChange} />
        <Table
          employees={this.state.employees}
          filteredEmployees={this.state.filteredEmployees}
          handleSort={this.handleSort}
        />
      </div>
    );
  }
}

export default DirectoryContainer;
