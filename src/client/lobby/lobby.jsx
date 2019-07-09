import React from 'react';
import './lobby.css';
import PlayersList from './playersList/playersList.jsx';
import GamesList from './gamesList/gamesList.jsx';
import Menu from './menu/menu.jsx';
import AddRoom from './addRoom/addRoom.jsx';

let gamesDB = [
    {
        name:"Noys Game",
        admin:"Noy",
        numReq:3,
        numSigned:0,
        status: "waiting"
    }
    ,
    {
        name:"Oz Game",
        admin:"Oz",
        numReq:2,
        numSigned:0,
        status: "waiting"
    }


];

let playersDB = [
    {
            name: "Noy's Game",
            admin: "Noy",
            numReq:2,
            numSigned: 0,
            status: "waiting"
    },
    {
        name: "Oz's Game",
        admin: "Oz",
        numReq:3,
        numSigned: 0,
        status: "waiting"
    }
];


class Lobby extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            screen: "Lobby",
            games: gamesDB,
            players: playersDB,
            myRoom: null,
        };

    }

    addRoomPopUp() {

        this.setState({
            screen: "addRoom",
        });
    }

    addRoom() {
        let myRoom = null;
        let games = this.state.games;
        let gameName = document.getElementById("roomName").value;
        let playersNum = document.getElementById("playerNum").value
        console.log("addRoom:\n", "\troom name: ", gameName, "\n\tplayers num: ", playersNum);
        
        myRoom = {
            name: gameName,
            admin: this.props.name,
            numReq:playersNum,
            numSigned: 0,
            status: "waiting"
        };

        games.unshift(myRoom);

        this.setState({
            screen: "Lobby",
            games: games,
            myRoom: myRoom
        });
    }

    
    goLobby() {
        this.setState({
            screen: "Lobby",
        });

    }

    deleteRoom(){
        let games = this.state.games;

        games.splice(0, 1) ;
        this.setState({
            games: games,
            myRoom: null,
        });
    }

    render() {
        let screen = this.state.screen;
        return (
            <div className= {"lobby-container"}>
                {screen === "addRoom" && 
                    <AddRoom
                        game = {this}
                        addRoom = {this.addRoom}
                        goLobby = {this.goLobby}
                    />
                }
                <PlayersList
                    players = {this.state.players}
                />

                <div className={"menu-gamesList-container"}>
                    <Menu
                       name = {this.props.name}
                       game = {this.props.game}
                       lobby = {this}
                       addRoomPopUp = {this.addRoomPopUp}
                       logOut = {this.props.logOut}
                       myRoom = {this.state.myRoom}

                    />
                    <GamesList
                        games = {this.state.games}
                        enterGame = {this.props.enterGame}
                        game = {this.props.game}
                        lobby = {this}
                        name = {this.props.name}
                        deleteRoom = {this.deleteRoom}
                    />
                </div >
                    
            </div>
        );
    }
}

export default Lobby;