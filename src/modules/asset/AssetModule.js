import React, { Component } from "react";
import axios from "axios";
import CardStack from "../common/CardStack";
import AppConf from '../../config.json'

const URL = AppConf.ASSETS_TAGS + '/assets'

class AssetModule extends Component {
  constructor() {
    super();
    this.state = {
      //   currentPage: "Assets",
      assetNames: []
    };
  }

  componentWillMount() {
    axios
      .get(URL)
      .then(response => {
        var mappedAssetNames = response.data.content.map(item => item.name);
        this.setState({
          assetNames: mappedAssetNames
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
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

export default AssetModule;
