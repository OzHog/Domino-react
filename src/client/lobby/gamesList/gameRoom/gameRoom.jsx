import React from "react";
import './gameRoom.css'
import Button from "../../../../basicComponents/button/button.jsx";


class GameRoom extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const canDelete = this.props.admin === this.props.playerName && this.props.numSigned === 0;
        return (
            <>
            <tr
                key={`room-${this.props.id}`}
                className="gameroom-container"
                belongto={this.props.id}
            >
                <td onClick={this.props.status !== "playing" ? function (e) {
                    clearTimeout(this.props.lobby.state.dataTimeOut);
                    this.props.enterGame.bind(this.props.game)(e);
                }.bind(this) : null}
                    belongto={this.props.id}> {this.props.name} </td>

                <td onClick={this.props.status !== "playing" ? function (e) {
                    clearTimeout(this.props.lobby.state.dataTimeOut);
                    this.props.enterGame.bind(this.props.game)(e);
                }.bind(this) : null}
                    belongto={this.props.id}> {this.props.admin} </td>

                <td onClick={this.props.status !== "playing" ? function (e) {
                    clearTimeout(this.props.lobby.state.dataTimeOut);
                    this.props.enterGame.bind(this.props.game)(e);
                }.bind(this) : null}
                    belongto={this.props.id}>
                    {`${this.props.numSigned} / ${this.props.numReq}`}</td>

                <td onClick={this.props.status !== "playing" ? function (e) {
                    clearTimeout(this.props.lobby.state.dataTimeOut);
                    this.props.enterGame.bind(this.props.game)(e);
                }.bind(this) : null}
                    belongto={this.props.id}>
                    {this.props.status}</td>

                {
                    canDelete ?
                        (
                            <td className={"table-close-button"}>
                                <Button
                                    belongto={this.props.id}
                                    className={"close_btn"}
                                    text="✖"
                                    buttonFunc={this.props.deleteRoom}
                                    game={this.props.lobby}/>
                            </td>
                        ) : <td className='empty-td' />
                }
            </tr>
            </>)

    }
}


export default GameRoom;

