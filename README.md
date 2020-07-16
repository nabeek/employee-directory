# Employee Directory

## Motivation

This application is a simple, React-based employee directory. The application utilizes an API call to populate employees, tabulates their non-sensitive data, and then allows a user to view, sort, and search through the dataset.

## Usage

Employee Directory is live [here](#).

## Screenshot

![employee-directory](https://user-images.githubusercontent.com/4752937/87613364-592c7280-c6ca-11ea-892d-344324cade52.png)

## Tech Used

[Bulma](https://bulma.io/)\
[React](https://reactjs.org/)\
[React Icons](https://react-icons.github.io/react-icons/)\
[Random User Generator](https://randomuser.me/)

## Example Code

```js
let employees;
props.filteredEmployees[0] !== undefined
  ? (employees = props.filteredEmployees)
  : (employees = props.employees);
```

This simple ternary operator was utilized in two places. Essentially, the code will look for items in the filteredEmployees array and if there are any the application will sort or search based on the fileterdEmployees array, not the full employee array. Given that the filteredEmployees array is modified from the full employee list (from the API call), the full list continues to persist through all of the searching and sorting. Again, while simple, this was critical to the applications fluid use of both functions.

```js
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
```

Additionally, I used a switch statement to alternate between ascending and descending alphabetical orders. It's pretty straight-forward but essentially uses an initial value in `this.state.sort` to run the first case "ascending". Continuing to click on the sort icon will alternate between the two sorting methods, and set the state to the opposite method.

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

MIT © [nabeek](https://github.com/nabeek)
