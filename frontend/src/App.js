import React from 'react';

import Chat from './components/chat/Chat.js';
import Join from './components/join/Join.js';

import {Routes, Route } from "react-router-dom";

function App(){
  return (
    <div className='app'>
        <Routes>
            <Route path="/" element={<Join/>} />
            <Route path="/chat" element={<Chat/>} />
        </Routes>
    </div>
  );
}

export default App;