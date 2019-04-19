import React, {Component, PureComponent} from 'react';
import {getText} from "./webApi";
import PostMessages from "./postMessages";

class Messages extends Component {
    constructor(props) {
        super(props);
        this.state = {
            'messages': [],

        }
    }

    componentWillMount() {
        console.log(this.props.id);
        getText(this.props.id)
            .then((messages) => {
                this.setState({messages: messages.map(elem => elem)});
            })
    }

    changeState = (newMessage) => {
        let newArr = [...this.state.messages , newMessage];
        this.setState({messages:newArr.map(elem => elem)});
    }

    render() {
        let newArr = [...this.state.messages];
        let getMessages = newArr.map((elem, index) => {
            return (
                <li className="list-group-item" key={index}>{elem}</li>
            )
        })
        return (
            <div className="col-xs-12">
                <ul className="list-group">
                    {getMessages}
                </ul>
                <PostMessages room={this.props.room} id={this.props.id} changeState={this.changeState} />
            </div>

        )
    }
}

export default Messages;


