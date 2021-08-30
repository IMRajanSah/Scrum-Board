import React from 'react'
import "../App.css"
import { useHistory } from 'react-router'

const MyHeader = () => {
    const history=useHistory();
    return (
        <div className="nav">
        <h1 onClick={()=>{history.push("/")}}>SCRUM BOARD</h1>
        
    </div>
    )
}

export default MyHeader
