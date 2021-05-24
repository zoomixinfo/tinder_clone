import { Avatar } from '@material-ui/core'
import React, { useState } from 'react'
import './ChatScreen.css'

function ChatScreen() {
    const [input, setInput] = useState('')
    const [messages, setMessages] = useState([
        {
            name: "Fahad",
            image:"https://m.media-amazon.com/images/M/MV5BNGU0Y2FiODUtZmFlYi00NDgyLTlkYmItNzJlN2FkYjNkMzJjXkEyXkFqcGdeQXVyMjkxNzQ1NDI@._V1_.jpg",
            messages:"Hello"
        },
        {
            name: "Fahad",
            image:"https://m.media-amazon.com/images/M/MV5BNGU0Y2FiODUtZmFlYi00NDgyLTlkYmItNzJlN2FkYjNkMzJjXkEyXkFqcGdeQXVyMjkxNzQ1NDI@._V1_.jpg",
            messages:"Hello"
        },
        {
            name: "Fahad",
            image:"https://m.media-amazon.com/images/M/MV5BNGU0Y2FiODUtZmFlYi00NDgyLTlkYmItNzJlN2FkYjNkMzJjXkEyXkFqcGdeQXVyMjkxNzQ1NDI@._V1_.jpg",
            messages:"Hello"
        },
        {
            messages:"Hello How are"
        }
    ])
    const handleSend = e => {
        e.preventDefault()
        setMessages([...messages,{messages: input}])
        setInput('')
    }
    return (
        <div className="chatScreen">
            <p className="chatScreen__timestamp">YOU MATCH TO DQ 10/02/2021</p>
            {
                messages.map(message=>(
                    message.name ? (
                    <div className="chatScreen__message">
                    <Avatar className="chatScreen__"
                    alt="" src={message.image}
                    />
                    <p className="chatScreen__text">{message.messages}</p>
                    </div>
                    ) : (
                        <p className="chatScreen__textUser">{message.messages}</p>
                    )
                ))
            }
            <form className="chatScreen__input">
            <input value={input} onChange={e => setInput(e.target.value)} className="chatName__inputField" type="text" placeholder="Type Message here..."/>
            <button onClick={handleSend} type="submit" className="chatName__inputButton">SEND</button>
            </form>
        </div>
    )
}

export default ChatScreen
