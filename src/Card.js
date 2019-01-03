import React, {Component} from 'react';
import no_image from './images/noimage.jpg'

class Card extends Component {

    constructor() {
        super();
        this.state = { image:  no_image };
    }

    static defaultProps = {
        caption: "SAMPLE TEXT",
    };


    render() {
        return (
            <div className="Card">
                <img src={this.state.image} alt=""/>
                <br/>
                {this.props.caption}
            </div>
        );
    }
}

export default Card;
