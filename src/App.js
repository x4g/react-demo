import React, { Component } from "react";
import { Route, NavLink, HashRouter } from "react-router-dom";
import HomeModule from "./modules/home/HomeModule";
import AssetModule from "./modules/asset/AssetModule";
import TagModule from "./modules/tag/TagModule";
import ConfigModule from "./modules/config/ConfigModule";
import TagDetail from './modules/tag/TagDetail'

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
            <Route exact path="/" component={HomeModule} />
            <Route path="/assets" component={AssetModule} />
            <Route path="/tags" exact component={TagModule} />
            <Route path="/tags/:id" component={TagDetail} />
            <Route path="/config" component={ConfigModule} />
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default App;
