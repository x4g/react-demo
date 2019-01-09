import React, { Component } from "react";
import AppConfig from "../../config.json";
import axios from "axios";

const TAG_URL = AppConfig.ASSETS_TAGS + "/tags";
const TAG_VALUE_URL = AppConfig.TAGVALUES + "/tagvalues"

class TagDetail extends Component {
  constructor() {
    super();
    this.state = { 
      detail: {},
      values: []
    };
  }

  componentDidMount() {
    const tagId = this.props.match.params.id;
    const tagName = this.props.match.params.name;

    axios.get(TAG_URL + "/" + tagId).then(response => {
      this.setState({ detail: response.data });
    });

    axios.get(TAG_VALUE_URL + "/" + tagName).then(response => {
      this.setState({values: response.data});
      console.log("this.state.values: " + this.state.values);
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
                <b>MAX VALUE:</b>
              </th>
              <th>{this.state.detail.max}</th>
            </tr>
            <tr>
              <th>
                <b>MIN VALUE:</b>
              </th>
              <th>{this.state.detail.min}</th>
            </tr>
            <tr>
              <th>
                <b>FREQUENCE:</b>
              </th>
              <th>{this.state.detail.frequence}s</th>
            </tr>
            <tr>
              <th>
                <b>TEMP VALUE:</b>
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
