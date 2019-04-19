import React, {Component, PureComponent} from 'react';
import {addMessage} from './webApi';


class PostMessages extends Component {

    constructor(props) {
        super(props);
        this.state = {
            'message': '',
            'room':'',
        }
    }

    changeInput = (e) => {
        this.setState({message:e.target.value});
    }

    render() {
        // let link = React.createRef();
        return (
            <div className="input-group">
                <input
                    value={this.state.message}
                    onChange={this.changeInput}
                    className="form-control"
                    type="text"/>
                <span className="input-group-btn">
                <button onClick={() =>{
                    this.props.changeState(this.state.message);
                    addMessage(this.state.message , this.props.room , this.props.id)
                }} className="btn btn-success">Add new message</button>
            </span>
            </div>
        )
    }
}

export default PostMessages;


