import React, { Component } from "react";
import axios from "axios";
import TagList from "./TagList";
import AppConfig from '../../config.json';

const URL = AppConfig.ASSETS_TAGS + '/tags';

class TagModule extends Component {
  constructor() {
    super();
    this.state = {
      tags: []
    };
  }

  componentWillMount() {
    axios
      .get(URL)
      .then(response => {
        this.setState({
          tags: response.data.content
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        <TagList tags={this.state.tags} />

      </div>
    );
  }
}

export default TagModule;
