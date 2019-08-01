import React, { Component } from "react";
import Title from "./components/Title";
import Nav from "./components/Nav";
import NewsContainer from "./components/NewsContainer";
// import Comment from './components/NewsContainer/Comment'
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";

let api;
const defaultApi = "https://newsapi.org/v2/top-headlines?sources=google-news&apiKey=d14f73deb8974c9386f4c91fec185b1c";
const techApi = "https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=d14f73deb8974c9386f4c91fec185b1c";
const footballApi = "https://www.scorebat.com/video-api/v1/";
const quoteApi = "http://quotes.stormconsultancy.co.uk/random.json";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      feeds: [],
      quotes: "",
      tab: "latest",
    };
    this.handleClick = this.handleClick.bind(this);
  }

  //componentDidMount triggers only once when all components are mounted
  componentDidMount() {
    if (this.state.tab === "latest") {
      api = defaultApi;
    }
    if (this.state.tab === "tech") {
      api = techApi;
    }
    if (this.state.tab === "football") {
      api = footballApi;
    }

    fetch(api)
      .then(res => res.json())
      .then(feeds => this.setState({ feeds: feeds }));

    fetch(quoteApi)
      .then(res => res.json())
      .then(json => this.setState({ quotes: json }));

    // fetch('/comments')
    // .then(res => res.json())
    // .then(json => this.setState({ comments: json}))
  }

  //this is for tab click
  //once 'click' is happended, the state is updated and all descending components got affected by the new State
  handleClick(e) {
    const tab = e.target.id;
    if (tab === "latest") {
      api = defaultApi;
    }
    if (tab === "tech") {
      api = techApi;
    }
    if (tab === "football") {
      api = footballApi;
    }
    if (tab === "mine") {
    }

    //fetch is "asynchronous".
    fetch(api)
      .then(res => res.json())
      .then(feeds => {
        fetch(quoteApi)
          .then(res => res.json())
          .then(quotes => {
            this.setState({ tab, feeds, quotes });
          });
      });
  }

  render() {
    let quote;
    let author;
    if (this.state.quotes) {
      quote = this.state.quotes.quote;
      author = this.state.quotes.author;
    }

    return (
        <div style={{margin: 0, backgroundColor:'rgb(235,235,235)', borderRadius:'8px'}}>
          <Title quote={quote} author={author} />
          <Nav handleClick={this.handleClick} tab={this.state.tab} />
          <NewsContainer feeds={this.state.feeds} tab={this.state.tab} comments={this.state.comments}/>
        </div>
    );
  }
}

export default App;
