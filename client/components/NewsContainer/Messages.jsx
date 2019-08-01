import React, { Component } from 'react';
import Message from './Message';

class Messages extends Component {

    componentDidUpdate() {
        // whenever the message is created, it scolls up
        const objDiv = document.getElementById('messageList');
        objDiv.scrollTop = objDiv.scrollHeight;
    }

    render() {
        const messages = this.props.messages.map((message, i) => {
            // console.log('hitting here?', message)
            return (
                <Message key={i}
                message={message.message} />
            )
        })

        return (
            <div id='messageList' style={{overflow:'scroll', objectFit:'cover', height: '520px', width: '100%',border: '2px solid gray',backgroundColor: 'lightblack', borderRadius:'6px'}}>
                { messages }
            </div>
        )
    }
}

Messages.defaultProps = {
    messages: []
};



export default Messages;