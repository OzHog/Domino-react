import React from 'react';
import './brick.css';
import DotsContainer from '../dotsContainer/dotsContainer.jsx';

class Brick extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            direction: this.props.direction,
            num1: this.props.num1,
            num2: this.props.num2,

        };
    }

   render() {
        return (
            <div direction={this.state.direction} className={'brick'}>
                <DotsContainer num={this.props.num1}/>
                <hr/>
                <DotsContainer num={this.props.num2}/>
            </div>

        );
   }
}

export default Brick;
