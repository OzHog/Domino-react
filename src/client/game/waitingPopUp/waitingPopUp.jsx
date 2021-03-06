import React from 'react';
import './waitingPopUp.css';
import Button from "../../../basicComponents/button/button.jsx";
import Info from "../../../basicComponents/info/info.jsx";


class WaitingPopUp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};

    }

    render() {
        return (
            <div className={"popup-background"}>
                <div className={"popup-container"}>
                    <Info
                        text={`${this.props.status}........`}
                        data={null}
                    />
                    <Info
                        text={"Number Of Players In the Game "}
                        data={`${this.props.numSigned} / ${this.props.numReq}`}
                    />
                    <Button
                        className={"square_btn"}
                        text="Exit Room"
                        buttonFunc={this.props.exitRoom}
                        game={this.props.game}
                    />
                </div>

            </div>
        );
    }
}

export default WaitingPopUp;
