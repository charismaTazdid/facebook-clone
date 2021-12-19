import { InsertEmoticon, PhotoLibrary, Videocam } from '@mui/icons-material';
import { Avatar } from '@mui/material';
import React, {useState} from 'react';
import './MessageSander.css'
const MessageSander = () => {
    const [input, setInput] = useState("");
    const [imgUrl, setImgurl] = useState("")


const handleSubmit = (event) => {
    event.preventDefault();


    setInput("")
    setImgurl("")
}

    return (
        <div className="messageSander">
            <div className="messageSanderTop">
                <Avatar/>
                <form>
                    <input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                     className="messageSander-input" 
                     placeholder="What's on your mind"
                     />
                     <input 
                     value={imgUrl}
                     onChange={(e) => setImgurl(e.target.value)}
                     placeholder="image URL (optional)"
                      />
                   
                    <button onClick={handleSubmit} type="submit">
                        Hidden Submit
                    </button>
                
                </form>
            </div>
            <div className="messageSanderBottom">
                <div className="messageSander-option">
                    <Videocam style={{color: 'red'}} />
                    <h3> Live video </h3>
                </div>
                <div className="messageSander-option">
                    <PhotoLibrary style={{color: 'green'}} />
                    <h3> Photo/Video </h3>
                </div>
                <div className="messageSander-option">
                    <InsertEmoticon style={{color: 'orange'}} />
                    <h3> Feeling/Activity </h3>
                </div>
                
            </div>
        </div>
    );
};

export default MessageSander;