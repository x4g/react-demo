import React, { Component } from "react";
import { Route, NavLink, HashRouter } from "react-router-dom";
import Home from "./Home";
import Assets from "./Assets";
import Tags from "./Tags";
import Config from "./Config";

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <h1>Demo</h1>
          <ul className="header">
            <li>
              <NavLink exact to="/">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/assets">Assets</NavLink>
            </li>
            <li>
              <NavLink to="/tags">Tags</NavLink>
            </li>
            <li>
              <NavLink to="/config">Config</NavLink>
            </li>
          </ul>
          <div className="content">
            <Route exact path="/" component={Home} />
            <Route path="/assets" component={Assets} />
            <Route path="/tags" component={Tags} />
            <Route path="/config" component={Config} />
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default App;
