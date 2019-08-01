import React, { Component } from 'react';

class Message extends Component {

    render() {
        return (
            <div style={{margin:'5px'}}>
                {this.props.message }
            </div>
        )
    }
}

Message.defaultProps = {
    meesage: '',
}

export default Message;