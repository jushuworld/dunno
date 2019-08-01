import React, { Component } from 'react';
import ChatApp from './ChatApp'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Moment from 'react-moment';

const Feed = props => {

    let youtubeUrl = `https://www.youtube.com/results?search_query=${props.title}`;


    let feed;
    if(props.tab === 'football'){
        feed = <a href={youtubeUrl} target="_blank"><img style={{width:'100%', height: '500px'}} src={props.thumbnail}/></a>
    } else {
        feed = <a href={props.url} target="_blank"><img style={{width:'100%', height: '500px'}} id={props.id} src={props.img}/></a>
    }

    return (

    <div style={{display:'flex', margin: '10px', border:'1px solid gray', backgroundColor: 'lightgray', borderRadius: '6px'}}>
        <div className="box" style={{flex:2 , margin:'5px'}}>
            <Moment>{props.date}</Moment>
            <div>{props.competition}</div>
            <p style={{margin:'10px', fontsize:'50px'}}>{props.title}</p>
            {feed}
            <p style={{margin:'10px', fontsize:'50px'}}>{props.description}</p>
        </div>
        <div style={{flex:1, margin:'5px', height: '500px'}}>
            <ChatApp/>
        </div>
    </div>
        
            
    )
}





export default Feed;