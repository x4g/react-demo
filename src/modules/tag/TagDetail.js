import React, { Component } from "react";
import AppConfig from "../../config.json";
import axios from "axios";
import TagCurrentValue from "./TagCurrentValue.js";

const TAG_URL = AppConfig.ASSETS_TAGS + "/tags";
const TAG_HIST_VALUE_URL = AppConfig.ASSETS_TAGS + "/tagvalues/history";
const TAG_CURRENT_VALUE_URL = AppConfig.TAGVALUES + "/gs-guide-websocket";

class TagDetail extends Component {
  constructor() {
    super();
    this.state = {
      detail: {},
      current: 0,
      history: []
    };
  }

  componentDidMount() {
    const tagId = this.props.match.params.id;


    axios
      .get(TAG_URL + "/" + tagId)
      .then(response => {
        this.setState({ detail: response.data });
      })
      .then(() => {
        // chain next promise requests only when the last one is done.
        const tagName = this.state.detail.name;

        // get tag's current value
        axios.get(TAG_CURRENT_VALUE_URL + "/" + tagName).then(response => {
          this.setState({ current: response.data });
        });

        // get the tag's historical values
        axios.get(TAG_HIST_VALUE_URL + "/" + tagName).then(response => {
          this.setState({ history: response.data });
        });
      });
  }

  render() {
    return (
      <div>
        <div>
          <h1>
            <span>{this.state.detail.name}</span>:{" "}
            <span>
              {Math.floor(this.state.current * 100) / 100}{" "}
              {this.state.detail.unit}
            </span>
          </h1>
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
        <TagCurrentValue />
      </div>
    );
  }
}

export default TagDetail;
