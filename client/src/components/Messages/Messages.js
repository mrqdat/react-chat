import React from 'react';
import SrollToBottom from 'react-scroll-to-bottom';
import './Messages.css';
import Message from './Message/Message'
const Messages = ({ messages, name }) => (
    <SrollToBottom classname="messages">
        {messages.map((message, index) => <div key={index}><Message messages={message} name={name} /></div>)}
    </SrollToBottom>
)

export default Messages ;