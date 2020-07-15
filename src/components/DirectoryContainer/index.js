import React, { Component } from "react";
import API from "../../utils/API";
import Container from "../Container";
import SearchForm from "../SearchForm";
import SearchResults from "../SearchResults";

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
      console.log(res.data.results);
      this.setState({ results: res.data.results });
    });
  };

  render() {
    return (
      <div>
        <Container style={{ minHeight: "80%" }}>
          <h1 className="text-center">Employee Directory</h1>
          <SearchResults results={this.state.results} />
        </Container>
      </div>
    );
  }
}

export default DirectoryContainer;
