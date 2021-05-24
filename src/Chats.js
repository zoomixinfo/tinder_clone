import React from 'react'
import './Chats.css'
import Chat from './Chat'
function Chats() {
    return (
        <div className="chats">
            <Chat name="Fahad"
            message="Ha How are you"
            timestamp="10 second ago" 
            profilePic="https://m.media-amazon.com/images/M/MV5BNGU0Y2FiODUtZmFlYi00NDgyLTlkYmItNzJlN2FkYjNkMzJjXkEyXkFqcGdeQXVyMjkxNzQ1NDI@._V1_.jpg"
            />
            <Chat name="DQ"
            message="Ha How are you"
            timestamp="10 second ago" 
            profilePic="https://static.toiimg.com/thumb/msid-81869006,imgsize-541639,width-800,height-600,resizemode-75/81869006.jpg"
            />
            <Chat name="Mammoonty"
            message="Ha How are you"
            timestamp="10 second ago" 
            profilePic="https://images.newindianexpress.com/uploads/user/imagelibrary/2020/4/5/w1200X800/Mammootty_YouTube.jpg"
            />
            <Chat name="Mohanlal"
            message="Ha How are you"
            timestamp="10 second ago" 
            profilePic="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Mohanlal_Viswanathan_Nair_BNC.jpg/1200px-Mohanlal_Viswanathan_Nair_BNC.jpg"
            />
        </div>
    )
}

export default Chats
