import React from 'react'

const UserInput = (props) => {
    const inputstyle = {
        border: '2px solid blue'
    }
    return (
        <div>
        <p>Digite:</p>
        <input style={inputstyle} onChange={props.onChange} value ={props.username}></input>
        </div>
    )
}

export default UserInput;