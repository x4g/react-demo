import React, { Component } from "react";

class TagList extends Component {



  render() {
      console.log(this.props.tags);
    return (
    <div>
        {this.props.tags.map(function(tag, idx) {
            return (
                <div key={idx}>
                    <p>{tag}</p>
                </div>
            );
        })}
    </div>
    );
  }
}

export default TagList;
