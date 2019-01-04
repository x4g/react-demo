import React, { Component } from 'react'

class ClickableTag extends Component {

    
  render() {
    return (
      <div>
        <a href={"/#/tags/" + this.props.tag.id} >{this.props.tag.name}</a>
      </div>
    )
  }
}

export default ClickableTag
