import React, { Component } from "react";
import Tag from './Tag';

class TagList extends Component {
  render() {
    return (
      <div>
        {this.props.tags.map(function(tag, idx) {
          return (
            <div key={idx}>
              <a href={"/#/tags/" + tag.id} ><Tag tag={tag} /></a>
            </div>
          );
        })}
      </div>
    );
  }
}

export default TagList;
