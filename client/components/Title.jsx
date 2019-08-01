import React from 'react'

const Title = props => {
    return(
        <div>
            <h1 style={{fontFamily:'chalkduster, fantasy', fontSize:'60px', paddingLeft:'20px', margin:'10px'}}>DUNNOW</h1>
            <h3 style={{fontFamily:'chalkduster, fantasy', paddingLeft:'20px', margin:'10px'}}></h3>
            <h3 style={{fontFamily:'fantasy', paddingLeft: '30px', paddingBottom: '10px'}}>{props.quote} <br></br> <div style={{fontFamily:'cursive', float:'right', padding:'0px 40px 0px 50px'}}>- by {props.author}</div></h3>
        </div>
    )
}

export default Title;