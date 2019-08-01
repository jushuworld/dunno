import React, { Component } from 'react';
import Search from './NewsContainer/Search';
import Feed from './NewsContainer/Feed';



class NewsContainer extends Component {
    constructor(props){
        super(props)
    }

    render() {
        let feed;
        let description
       // console.log(this.props.feeds);
        if(this.props.feeds.length !== 0 && this.props.tab === 'football'){
            feed = this.props.feeds.map(art => 
                <Feed 
                competition={art.competition.name} 
                title={art.title} 
                date={art.date} 
                thumbnail={art.thumbnail}
                feeds={this.props.feeds}
                tab={this.props.tab}
                comments={this.props.comments}
                />)
        }
        else if(this.props.feeds.length !== 0){
            feed = this.props.feeds.articles.map( (art,index) => 
                <Feed 
                id={index} 
                date={art.publishedAt}
                img={art.urlToImage} 
                description={art.description} 
                url={art.url}
                title={art.title}
                feeds={this.props.feeds}
                tab={this.props.tab}
                comments={this.props.comments}
                />)
        }
        return (
                <div style={{padding:'0px'}}>
                    <Search style={{padding:'0px 0px 10px 0px'}}/>
                    {feed}
                </div>
        )
    }
}

export default NewsContainer;