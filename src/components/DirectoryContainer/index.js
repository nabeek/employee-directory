import React, { Component } from "react";
import API from "../../utils/API";
import Search from "../Search";
import Table from "../Table";

class DirectoryContainer extends Component {
  state = {
    employees: [],
    filteredEmployees: [],
    sort: "default",
  };

  // const sorting = {
  //   ascending: {
  //     fn: (a, b) => a.net_worth - b.net_worth
  //   },
  //   descending: {
  //     fn: (a, b) => b.net_worth - a.net_worth
  //   },
  //   default: {
  //     fn: (a, b) => a
  //   }
  // };

  componentDidMount() {
    this.loadEmployees();
  }

  loadEmployees = () => {
    API.getEmployees().then(res => {
      this.setState({ employees: res.data.results });
    });
  };

  handleInputChange = event => {
    const filter = event.target.value;
    const filteredList = this.state.employees.filter(employee => {
      let values =
        employee.name.first.toLowerCase() +
        " " +
        employee.name.last.toLowerCase();

      // The API responses for first and last name are searched using the input value
      // Any match is returned, regardless of value length
      if (values.indexOf(filter.toLowerCase()) !== -1) {
        return employee;
      }
    });

    // Replace the array of filteredEmployees (initially empty) with the list above
    this.setState({
      filteredEmployees: filteredList,
    });
  };

  handleSort = () => {
    const currentSort = this.state.sort;
    let nextSort;
  };

  render() {
    return (
      <div className="container">
        <h1 className="title is-1 has-text-centered">Employee Directory</h1>
        <Search handleInputChange={this.handleInputChange} />
        <Table
          employees={this.state.employees}
          filteredEmployees={this.state.filteredEmployees}
        />
      </div>
    );
  }
}

export default DirectoryContainer;
