import React, { Component } from "react";
import AppConfig from "./config.json";
import axios from "axios";

const URL = AppConfig.DOMAIN + "/tags";

class TagDetail extends Component {
  constructor() {
    super();
    this.state = { detail: {} };
  }
  componentDidMount() {
    const tagId = this.props.match.params.id;
    console.log("tag id for http request: " + tagId + " type: " + typeof tagId);

    axios.get(URL + "/" + tagId).then(response => {
      console.log("tag response: " + response.data);
      console.log(response.data.id);
      this.setState({ detail: response.data });
    });
  }

  render() {
    return (
      <div>
        <div>
          <h1>{this.state.detail.name}</h1>
        </div>
        <table>
          <tbody>
            <tr>
              <th>
                <b>ID:</b>
              </th>
              <th>{this.state.detail.id}</th>
            </tr>
            <tr>
              <th>
                <b>NAME:</b>
              </th>
              <th>{this.state.detail.name}</th>
            </tr>
            <tr>
              <th>
                <b>DESC:</b>
              </th>
              <th>{this.state.detail.description}</th>
            </tr>
            <tr>
              <th>
                <b>UNIT:</b>
              </th>
              <th>{this.state.detail.unit}</th>
            </tr>
            <tr>
              <th>
                <b>MAX:</b>
              </th>
              <th>{this.state.detail.max}</th>
            </tr>
            <tr>
              <th>
                <b>MIN:</b>
              </th>
              <th>{this.state.detail.min}</th>
            </tr>
            <tr>
              <th>
                <b>FREQ:</b>
              </th>
              <th>{this.state.detail.frequence}</th>
            </tr>
            <tr>
              <th>
                <b>TEMP:</b>
              </th>
              <th>{this.state.detail.temp_value}</th>
            </tr>
            <tr>
              <th>
                <b>ASSET ID:</b>
              </th>
              <th>{this.state.detail.asset_id}</th>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default TagDetail;
