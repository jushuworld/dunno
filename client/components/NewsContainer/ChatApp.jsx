import React, { Component } from 'react';
import Messages from './Messages'
import ChatInput from './ChatInput'

class ChatApp extends Component {
    constructor(props){
        super(props)

        this.state = { messages: [] };
        this.sendHandler = this.sendHandler.bind(this);
    }

    //sendHandler makes the 'inputChat' into the object and pass it to addMessage function
    sendHandler(message) {
        const messageObject = {
            message
        };
        this.addMessage(messageObject);
    }

    // then addMessage receive the 'messageObj' and change the 'state' to state in array'
    addMessage(message) {
        const messages = this.state.messages;
        messages.push(message);
        this.setState({ messages });
    }

    componentDidMount(){
        let url = 'http://localhost:3000/comments'
        let messages = [];
        fetch(url)
        .then(res => res.json())
        .then(json => json.map(message => {
            messages.push(message)
            this.setState({ messages })
            console.log(this.state.messages)
        }))
    }

    componentDidUpdate(){
        if(this.state.messages){
            
        }
    }


    render() {
        return (
            <div className="container">
                <h3 style={{margin:'0', fontFamily:'cursive', paddingLeft:'10px', fontSize: '30px'}}> Comments </h3>
                <Messages messages={this.state.messages}/>
                <ChatInput onSend={this.sendHandler}/>
            </div>
        )
    }
}

export default ChatApp;