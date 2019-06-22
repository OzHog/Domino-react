import React from './node_modules/react';
import './lobbyPlayer.css';
import Info from '../../../basicComponents/info/info.jsx';

class LobbyPlayer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            
        };

    }

   render() {
        return (
            <div className= {"lobbyPlayer-container"}>
                <Info
                    text = {this.props.name}
                    data = {null}
                />

                <Info
                    text = "Status: "
                    data = {this.props.status}
                />
            </div>
        );
   }
}

export default LobbyPlayer;