import React, {Component , PureComponent} from 'react';
import Room from './components/room';
import logo from './logo.svg';
import './App.css';
import {Route,} from "react-router-dom";
import Messages from './components/messages';
import {getRoom} from "./components/webApi";
import {getText} from "./components/webApi";



class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            'rooms': [],
            'roomsId': [],
            'messages': [],

        }
    }


    componentWillMount() {
        getRoom()
            .then((rooms) => {
                this.setState({rooms: rooms.map(elem => elem.room_name), roomsId: rooms.map(elem => elem.id)});
            })


    }

// shouldComponentUpdate(nextProps , nextState){
//
//        return this.state.messages !== nextState.messages;
//
// }

componentWillUpdate(nextProps, nextState){
        // console.log(nextState);
        // this.setState({messages:nextState.messages});
}

componentDidUpdate(prevProps, prevState, prevContext){
        prevState = 10;
        // console.log(prevState);


    getText(this.state.actualId)
        .then((messages) => {
        return messages;

        })
}

    getMessages = (id = null) => {
        getText(this.state.actualId)
            .then((messages) => {
                this.setState({messages: messages.map(elem => elem)});
                console.log('dfgdfg');
            })
    }

    render() {
        let newArr = [...this.state.roomsId];
        let allRoutes = newArr.map((elem, index) => {
            return (
                <Route
                    key={index}
                    path={`/room${elem}`}
                    render={() => {
                        return (
                            <Messages id={elem} room={`room${elem}`} />
                        )
                    }
                    }/>)

        })

        return (
            <div className="container">

                <div className="col-xs-12 col-md-6">
                    <Room rooms={this.state.rooms} id={this.state.roomsId}/>
                    {allRoutes}
                </div>
            </div>
        );
    }
}

export default App;
