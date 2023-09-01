import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    console.log(this.props.name + "constructor rendered");
  }

  componentDidMount() {
    console.log(this.props.name + "componentDidMount rendered");
  }

  render() {
    console.log(this.props.name + "render rendered");
    const { name, location } = this.props;
    const { count } = this.state;
    return (
      <div className="user-card">
        <h1>Count: {count}</h1>
        <button
          onClick={() =>
            this.setState({
              count: this.state.count + 1,
            })
          }
        >
          Increase
        </button>
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact: @cristimanolescu</h4>
      </div>
    );
  }
}

export default UserClass;
