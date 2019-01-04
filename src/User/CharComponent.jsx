import React from 'react'

const CharComponent = (props) =>{
  const stylesheet={
    display: 'inline-block',
    padding: '16px',
    align:'center',
    margin:'16px',
    border:'1px solid black'

  }
  return(
    <div style={stylesheet} onClick={props.clicked}>
      {props.letter}
    </div>
  )


}

export default CharComponent;