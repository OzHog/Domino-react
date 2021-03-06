import React from "react";
import './zoom.css';
import Button from '../button/button.jsx';
import Info from '../info/info.jsx';


class Zoom extends React.Component {

    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
         return(  
                <div  className={"zoom"}>
                    <Info 
                        text = {`Zoom: ${this.props.zoom}%`}
                        belongTo = "zoom"/>

                    <div className = "buttons-container">
                        <Button
                            text="+"
                            buttonFunc = {this.props.zoomIn}
                            game = {this.props.game}
                            disabled = { this.props.zoom === 120 }
                        />
                        <Button
                            text="-"
                            buttonFunc = {this.props.zoomOut}
                            game = {this.props.game}
                            disabled = { this.props.zoom === 30 }
                        />
                    </div>

                </div>

        );


    }
}

    export default Zoom;
