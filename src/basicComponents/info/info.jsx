import React from "react";
import './info.css'


class Info extends React.Component {

    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return (
            <div 
                className={this.props.className ? this.props.className : "info"}
                belongto= {this.props.belongTo}
            >
                <p >{this.props.text}</p>
                { this.props.data && <p>{this.props.data}</p> }

            </div>
        );
    }


}

    export default Info;
