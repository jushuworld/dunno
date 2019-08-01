import React, { Component } from "react";

class ChatInput extends Component {
  constructor(props) {
    super(props);

    this.state = { chatInput: "" };

    this.submitHandler = this.submitHandler.bind(this);
    this.textChangeHandler = this.textChangeHandler.bind(this);
  }

  textChangeHandler(e) {
    this.setState({ chatInput: e.target.value });
    // console.log(e.target.value)
    // console.log(this.state)
  }

  submitHandler(e) {
    // Stop the form from refreshing the page on submit
    e.preventDefault();
    // console.log("hitting server");
    const url = "http://localhost:3000/comments";
    const data = this.state
    fetch(url, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, cors, *same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "same-origin", // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json"
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: "follow", // manual, *follow, error
      referrer: "no-referrer", // no-referrer, *client
      body: JSON.stringify(data) // body data type must match "Content-Type" header
    })
      .then(response => response.json())
      // .then(data => console.log(data));

    // this setState changes only frontend's text box's status. not state it self. chatInput still has the value
    this.setState({ chatInput: "" });

    // Call the onSend callback with the chatInput message
    this.props.onSend(this.state.chatInput);
  }

  render() {
    return (
      <form onSubmit={this.submitHandler}>
        <input
          type="text"
          onChange={this.textChangeHandler}
          value={this.state.chatInput}
          placeholder="Your thought(s).."
          required
          style={{height:'30px', width:'80%'}}
        />
        <button type="submit" style={{padding:'10px 10px', fontSize:'0.7em'}}>Submit</button>
      </form>
    );
  }
}

ChatInput.defaultProps = {};

export default ChatInput;
