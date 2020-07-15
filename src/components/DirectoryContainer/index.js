import React, { Component } from "react";
import API from "../../utils/API";
import Search from "../Search";
import Table from "../Table";

class DirectoryContainer extends Component {
  state = {
    search: "",
    results: [],
  };

  componentDidMount() {
    this.loadEmployees();
  }

  loadEmployees = () => {
    API.getEmployees().then(res => {
      this.setState({ results: res.data.results });
    });
  };

  handleInputChange = event => {
    const value = event.target.value;
    this.setState({
      search: value,
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    this.loadEmployees(this.state.search);
  };

  render() {
    return (
      <section className="hero is-fullheight">
        <div className="hero-body">
          <div className="container">
            <h1 className="title is-1 has-text-centered">Employee Directory</h1>
            <Search
              value={this.state.search}
              handleInputChange={this.handleInputChange}
              handleFormSubmit={this.handleFormSubmit}
            />
            <Table results={this.state.results} search={this.state.search} />
          </div>
        </div>
      </section>
    );
  }
}

export default DirectoryContainer;
