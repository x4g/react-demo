import React, { Component } from "react";
import axios from "axios";
import TagList from "./TagList";

class Tags extends Component {
  constructor() {
    super();
    this.state = {
      tags: ['g1', 'g2']
    };
  }

  render() {
    // axios
    //   .get("http://10.189.184.144:8080/tags")
    //   .then(response => {
    //     var mappedTagNames = response.data.content.map(item => item.name);
    //     this.setState({
    //       tags: mappedTagNames
    //     });
    //   })
    //   .catch(error => {
    //     console.log(error);
    //   });

    return (
      <div>
        <TagList tags={this.state.tags} />
      </div>
    );
  }
}

export default Tags;
