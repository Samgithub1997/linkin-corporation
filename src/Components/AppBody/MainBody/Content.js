import React, { useState, useEffect } from 'react';

// Styles
import './Content.css';
import CreateIcon from '@material-ui/icons/Create';
import PhotoIcon from '@material-ui/icons/Photo';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import EventIcon from '@material-ui/icons/Event';
import ArtTrackIcon from '@material-ui/icons/ArtTrack';

// JS component files
import InputFormat from './InputFormat';
import Feeds from './Feeds';

// firebase
import {db} from '../../../firebase';
import firebase from 'firebase';

function Content() {
    const [inputPost, setInputPost] = useState('');

    // Populating data
    const sendPost = (e) => {
        e.preventDefault();
        // Populating database
        db.collection("ContentFeed").add({
            name: 'Sam Sharma',
            userinfo: 'SDE : Building products',
            description: inputPost,
            photoUrl: '',
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        });
        // Reset input
        setInputPost('');
    }

    const [feeds, setFeeds] = useState([]);

    useEffect(() => {
        db.collection("ContentFeed")
            .orderBy('timestamp', 'desc')
            .onSnapshot((snapshot) => {
                setFeeds(
                    snapshot.docs.map((doc) => ({
                        id: doc.id,
                        data: doc.data(),
                    }))
                )
        })
    }, []);

    return (
        <div className="content">
            <div className="content_input_container">

                {/* The Input */}
                <div className="content_input">
                    <CreateIcon />
                    <form>
                        <input type="text" value={inputPost} onChange={(e) => setInputPost(e.target.value)} />
                        <button type="submit" onClick={sendPost} >Send</button>
                    </form>
                </div>

                {/* Photo, Video, event, Write article */}
                <div className="content_inputformat">
                    <InputFormat icon = {PhotoIcon} title = "Photo" />
                    <InputFormat icon = {VideoLibraryIcon} title = "Video" />
                    <InputFormat icon = {EventIcon} title = "Event" />
                    <InputFormat icon = {ArtTrackIcon} title = "Write Article" />
                </div>

            </div>

            <div className = "content_feeds">
            {
                feeds.map((feed) => (
                    <Feeds key={feed.id}
                        name={feed.data.name}
                        userinfo={feed.data.userinfo}
                        description={feed.data.description} 
                        avatarurl={feed.data.photoUrl} />
                ))
            }
                <Feeds name="Sam Sharma" 
                    userinfo="SDE : Building products" 
                    description="Working on some new stuff. Keep on the look out!" 
                    avatarurl="http://quotivee.com/wp-content/uploads/2013/09/don-draper.jpeg" />
            </div>
        </div>
    )
}

export default Content
