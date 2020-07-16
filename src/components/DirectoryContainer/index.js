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
    // Use a ternary to select a specific array of employees, to enable sorting after filtering
    let employees;
    this.state.filteredEmployees[0] !== undefined
      ? (employees = this.state.filteredEmployees)
      : (employees = this.state.employees);

    // Switch statement alternates between ascending/descending sorting by using state
    switch (this.state.sort) {
      case "ascending":
        const ascendingList = employees.sort((a, b) => {
          return a.name.first < b.name.first ? -1 : 1;
        });
        this.setState({
          filteredEmployees: ascendingList,
        });
        this.setState({ sort: "descending" });
        break;
      case "descending":
        const descendingList = employees.sort((a, b) => {
          return a.name.first < b.name.first ? 1 : -1;
        });
        this.setState({
          filteredEmployees: descendingList,
        });
        this.setState({ sort: "ascending" });
        break;
      default:
        console.log("An error has occurred.");
        break;
    }
  };

  render() {
    return (
      <div className="container">
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
