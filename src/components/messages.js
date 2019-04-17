import React from 'react';
import {getText} from "./webApi";

let Messages = ({id, allMessages}) => {


    let buff = getText(id)
        .then((messages) => {
           return messages;
        })

    console.log(buff);

    let getMessages = allMessages.map((elem, index) => {
        return (
            <li key={index}>{elem}</li>
        )
    })

    return (
        <ul>
            {getMessages}
        </ul>
    )
}

export default Messages;