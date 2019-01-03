import React, { Component } from "react";
import axios from "axios";
import CardStack from "./CardStack";

class Assets extends Component {
  constructor() {
    super();
    this.state = {
      //   currentPage: "Assets",
      assetNames: []
    };
  }

  render() {
    axios.get("http://10.189.184.144:8080/assets").then(response => {
      var mappedAssetNames = response.data.content.map(item => item.name);
      this.setState({
        // title: "Response from: " + response.request.responseURL,
        assetNames: mappedAssetNames
      });
    });

    return (
      <div className="App">
        <div className="main">
          <div className="asset-table-zone">
            <CardStack cards={this.state.assetNames} />
          </div>
        </div>
      </div>
    );
  }
}

export default Assets;
