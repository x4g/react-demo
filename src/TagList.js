import React, { Component } from "react";
import ClickableTag from './ClickableTag';

class TagList extends Component {
  render() {
    return (
      <div>
        {this.props.tags.map(function(tag, idx) {
          return (
            <div key={idx}>
              <ClickableTag tag={tag} />
            </div>
          );
        })}
      </div>
    );
  }
}

export default TagList;
