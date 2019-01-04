import React, { Component } from "react";
import axios from "axios";
import TagList from "./TagList";

class Tags extends Component {
  constructor() {
    super();
    this.state = {
      tags: []
    };
  }

  componentWillMount() {
    axios
      .get("http://10.189.184.144:8080/tags")
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

export default Tags;
