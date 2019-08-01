import React from 'react';

const Nav = props => {
    let btnStyle = {
        padding: "10px 150px",
        borderRadius: '6px',
        fontSize: '1.0em',
        fontWeight: 'bold',
        fontFamily: 'serif',
        color: 'rgb(80,80,80)',
        backgroundColor: 'rgb(200,200,200)'
        // marginTop: '10px'
    }
    return(
        <div style={{display:'flex', margin:'20px', justifyContent:'space-around', paddingTop:'20px'}}>
            <button id="latest" onClick={props.handleClick} style={btnStyle}>Latest</button>
            <button id="tech" onClick={props.handleClick} style={btnStyle}>Tech</button>
            <button id="football" onClick={props.handleClick} style={btnStyle}>Football</button>
        </div> 
    )
};

export default Nav;

