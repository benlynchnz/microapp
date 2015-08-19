import React from "react";
import { Link, RouteHandler } from "react-router";

export default class AppHandler extends React.Component {
  constructor(props) {
    super(props);
    this.state = { datetime: "Wednesday" };
  }
  render() {
    return (
      <div>
        <div className="nav">
          <ul>
            <li><Link to="app">Home</Link></li>
            <li><Link to="about">About</Link></li>
            <li><Link to="dashboard">Dashboard</Link></li>
          </ul>
        </div>

        <RouteHandler/>
      </div>
    );
  }
}
