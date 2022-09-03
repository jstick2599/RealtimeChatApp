import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import './Join.css';
function Join() {
  //initialize user name state and room state to be nothing
  const [name, setName]= useState('');
  const [room, setRoom]= useState('');
  return (
    <div className='joinOuterContainer'>
      <div className='joinInnerContainer'>
        <h1 className='heading'>join</h1>
        <div><input placeholder='Name' className='joinInput mt-20' onChange={(event)=>setName(event.target.value)} />a</div>
        <div><input placeholder='Room' className='joinInput mt-20' onChange={(event)=>setRoom(event.target.value)}/>a</div>
        {/*when clicked it sends to chat route if name and room has been set. If name or route haven't been set then it prevents default from occuring*/}
        <Link onClick={event=> (!name || !room) ? event.preventDefault() : null} to={`/chat?name=${name} &room=${room}`}>
          <button className='button' type='submit'>Sign In</button>
        </Link>
      </div>
      
    </div>
  )
}

export default Join