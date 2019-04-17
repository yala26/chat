import React, { Component } from 'react';
import Room from './components/room';
import logo from './logo.svg';
import './App.css';
import { Route , } from "react-router-dom";
import Messages from './components/messages';
import {getRoom} from "./components/webApi";
import {getText} from "./components/webApi";



class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      'rooms':[

        ],
        'roomsId':[

        ],
        'messages':[
            'hello',
            'hi',
            'good morning',
        ],
        'actualId':null
    }
  }


  componentDidMount(){
      let newActualId = this.state.actualId;
      getRoom()
          .then((rooms) => {
            this.setState({rooms:rooms.map(elem => elem.room_name) , roomsId:rooms.map(elem => elem.id)});
          })

  }



  getMessages = (id = null) => {
      getText(id)
          .then((messages) => {
              console.log(messages);
              this.setState({messages:messages.map((elem) => elem)});
          })
  }

  render() {
      let newArr = [...this.state.roomsId];
      // let getMessages = () => {
      //     return(
      //       <Messages allMessages={this.state.messages}  />
      //     )
      // }

      let allRoutes = newArr.map((elem , index) => {

          return (
              <Route
                key={index}
                path={`/room${elem}`}
                render={()=> <Messages id={elem} setParentState={this.setParentState}  allMessages={this.state.messages}/>}
              />)
      })

      return (
          <div className="container">

            <div className="col-xs-12 col-md-6">
                <Room rooms={this.state.rooms} id={this.state.roomsId} />
                {allRoutes}
            </div>
          </div>
    );
  }
}

export default App;
