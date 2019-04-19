export function getRoom(){
    return new Promise((resolve,reject) => {
        let req = new XMLHttpRequest();
        req.onload = () => {resolve(req.response)} ;
        req.responseType = "json";
        req.open('GET' , "http://yii2/basic/web/chat");
        req.setRequestHeader('Content-Type' , 'application/json');
        req.send();
    })
}

export function getText(id){
    return new Promise((resolve,reject) => {
        let req = new XMLHttpRequest();
        // let jsonText = JSON.stringify(
        //     {
        //         id:id
        //     }
        // )
        req.onload = () => {resolve(req.response)};
        req.responseType = "json";
        req.open('get' , `http://yii2/basic/web/chat/get_text?id=${id}`);
        req.setRequestHeader('Content-Type' , 'application/json');
        req.send();
    })
}

export function addMessage(message , room , id){
    return new Promise((resolve,reject) => {

        let jsonText = JSON.stringify(
            {
                message:message,
                room:room,
                id:id,
            }
        )
        let req = new XMLHttpRequest();
        req.onload = () => {resolve()};
        req.responseType = "json";
        req.open('post' , `http://yii2/basic/web/chat/add_message`);
        req.setRequestHeader('Content-Type' , 'application/json');
        req.send(jsonText);

    })
}

// addNotes = () => {
//     let jsonFile = JSON.stringify(
//         {
//             text:this.state.text,
//         }
//     )
//     let req = new XMLHttpRequest();
//     req.onload = () => {
//         let text = JSON.parse(req.response);
//         let arrCopy = [...this.state.arr];
//         arrCopy.push(text);
//         this.setState({arr:arrCopy});
//         this.setState({text:''});
//     }
//     req.open('post' , "http://localhost:80/server.php");
//     req.setRequestHeader('Content-Type' , 'application/json');
//     req.send(jsonFile);
// }