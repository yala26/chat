import React from 'react';
import {Link} from "react-router-dom";


let Room = ({rooms , id}) => {
    let getRoom = rooms.map((elem , index) => {
        return(
                <li  className="list-group-item" key={id[index]}>
                    <Link  to = {`/room${id[index]}`} >
                        {elem}
                    </Link>
                </li>
            )

    })

    return(
        <div className="col-xs-12">
            <ul className="list-group">
                <li className="list-group-item">
                    <h3 className="list-group-item-heading">Messages in room</h3>
                </li>
                {getRoom}
            </ul>

        </div>
    )
}

export default Room;