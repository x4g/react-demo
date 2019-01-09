import React, { Component } from "react";
import { Route, NavLink, HashRouter } from "react-router-dom";
import Home from "./Home";
import Assets from "./Assets";
import Tags from "./Tags";
import Config from "./Config";
import TagDetail from './TagDetail'

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <h1>Demo</h1>
          <ul className="header">
            <li>
              <NavLink exact to="/">Home</NavLink>
            </li>
            <li>
              <NavLink exact to="/assets">Assets</NavLink>
            </li>
            <li>
              <NavLink exact to="/tags">Tags</NavLink>
            </li>
            <li>
              <NavLink to="/config">Config</NavLink>
            </li>
          </ul>
          <div className="content">
            <Route exact path="/" component={Home} />
            <Route path="/assets" component={Assets} />
            <Route path="/tags" exact component={Tags} />
            <Route path="/tags/:id" component={TagDetail} />
            <Route path="/config" component={Config} />
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default App;
