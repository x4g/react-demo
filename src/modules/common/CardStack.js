import React, { Component } from "react";
import Card from "./Card";

class CardStack extends Component {
  static defaultProps = {
    cards: []
  };

  render() {
    return (
      <div className="CardStack">
        {this.props.cards.map(function(asset_name, idx) {
          return (
            <div key={idx} className="c33">
              <Card caption={asset_name} />
            </div>
          );
        })}
        <div className="clear" />
      </div>
    );
  }
}

export default CardStack;
