import User from "./User";
import UserClass from "./UserClass";
import { Component } from "react";

class About extends Component {
  constructor(props) {
    super(props);
    console.log("Parent constructor");
  }

  componentDidMount() {
    console.log("Parent componentDidMount");
  }

  render() {
    console.log("Parent render");
    return (
      <div>
        <h1>This is about page</h1>
        <h2>This is a page created for the Routing</h2>

        <UserClass name={"First Child"} location={"Bucharest"} />
        <UserClass name={"Second Child"} location={"USA"} />
      </div>
    );
  }
}

export default About;
