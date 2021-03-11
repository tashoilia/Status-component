import * as React from "react";
const UserContext = React.createContext();

class UserProvider extends React.Component {
  constructor() {
    super();
    this.getStatuses = this.getStatuses.bind(this);

    this.state = {
      statuses: [
        {
          value: "Pending",
          backgroundColor: "3fc5203",
          textColor: "#e7bbbb",
          order: "1",
        },
        {
          value: "Completed",
          backgroundColor: "#fc5223",
          textColor: "#fff",
          order: "1",
        },
        {
          value: "Due",
          backgroundColor: "#fc8203",
          textColor: "#fff",
          order: "1",
        },
        {
          value: "Cancelled",
          backgroundColor: "#fd5203",
          textColor: "#fff",
          order: "1",
        },
      ],
    };
  }

  getStatuses(list) {
    let newList = [...this.state.statuses];
    newList.push(list);
    this.setState({ statuses: [...newList] });
  }

  render() {
    console.log(this.state.statuses);
    return (
      <UserContext.Provider
        value={{
          statuses: this.state.statuses,

          getStatuses: this.getStatuses,
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
