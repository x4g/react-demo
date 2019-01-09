import React, { Component } from 'react'

class Tag extends Component {

    
  render() {
    return (
      <div>
        {this.props.tag.name}
      </div>
    )
  }
}

export default Tag
