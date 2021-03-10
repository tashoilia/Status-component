import * as React from "react";
const UserContext = React.createContext();

class UserProvider extends React.Component {
  constructor() {
    super();
    this.getName = this.getName.bind(this);
    this.getCategories = this.getCategories.bind(this);

    this.state = {
      name: "",
      categories: [],
    };
  }

  getName(name) {
    this.setState({
      name: name,
    });
  }

  getCategories(list) {
    let newList = [...list];
    this.setState({ categories: newList });
  }

  render() {
    return (
      <UserContext.Provider
        value={{
          name: this.state.name,
          categories: this.state.categories,
          getName: this.getName,
          getCategories: this.getCategories,
        }}
      >
        {" "}
        {this.props.children}{" "}
      </UserContext.Provider>
    );
  }
}
const UserConsumer = UserContext.Consumer;

export { UserProvider, UserConsumer, UserContext };
