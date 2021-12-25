import { InsertEmoticon, PhotoLibrary, Videocam } from '@mui/icons-material';
import { Avatar, Button } from '@mui/material';
import React, { useContext, useState } from 'react';
import { UserContext } from './App';
import './MessageSander.css';
import { db } from './FbLogin';
import { firebase } from './FbLogin';
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import SendIcon from '@mui/icons-material/Send';


const MessageSander = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)

    const [input, setInput] = useState("");
    const [imgUrl, setImgurl] = useState("")


    const handleSubmit = (event) => {
        event.preventDefault();
        addDoc(collection(db, "posts"), {

            profilePic: loggedInUser.image,
            message: input,
            timestamp: serverTimestamp(),
            username: loggedInUser.name,
            image: imgUrl
        })

        setInput("")
        setImgurl("")
    }

    return (
        <div className="messageSander ">
            <div className="messageSanderTop">
                <Avatar src={loggedInUser.image} />
                <form>
                    <input
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        className="messageSander-input"
                        placeholder={`What's on your mind, ${loggedInUser.name}`}
                    />
                    <input
                        value={imgUrl}
                        onChange={(e) => setImgurl(e.target.value)}
                        
                        placeholder="image URL"
                    />
                    <Button variant="outlined" endIcon={<SendIcon />} onClick={handleSubmit} type="submit" className='postButton'>
                        Post
                    </Button>

                </form>
            </div>
            <div className="messageSanderBottom">
                <div className="messageSander-option">
                    <Videocam style={{ color: 'red' }} />
                    <h3> Live video </h3>
                </div>
                <div className="messageSander-option">
                    <PhotoLibrary style={{ color: 'green' }} />
                    <h3> Photo/Video </h3>
                    {/* <input type="file" /> */}
                </div>
                <div className="messageSander-option">
                    <InsertEmoticon style={{ color: 'orange' }} />
                    <h3> Feeling/Activity </h3>
                </div>

            </div>
        </div>
    );
};

export default MessageSander;