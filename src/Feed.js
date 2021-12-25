import React, { useEffect, useState } from 'react';
import './Feed.css'
import MessageSander from './MessageSander';
import Post from './Post';
import StoryReel from './StoryReel';
import { db } from './FbLogin';
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';

const Feed = () => {

    let [like, setLike] = useState(0);

    const handleLike = (like) => {
        const newLike = like+ 1;
        setLike(newLike)
    }

    const [posts, setPosts] = useState([])
    useEffect(() => {
        const collectionRef = collection(db, "posts");
        const qu = query(collectionRef, orderBy("timestamp", "desc"));

        const loadPost = onSnapshot( qu, (snapshot) =>
        setPosts(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() })))
    );

    return loadPost;
    },
      
        [])
    return (
        <div className="feed">
            <StoryReel />
            <MessageSander />
            {
                posts.map((post) => (
                    <Post
                        key={post.id}
                        profilePic={post.data.profilePic}
                        message={post.data.message}
                         timestamp={post.data.timestamp}
                        username={post.data.username}
                        image={post.data.image}
                        like = {like}
                        handleLike={handleLike}
                    />
                ))
            }

        </div>
    );
};

export default Feed;