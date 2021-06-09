import React from 'react';

// Styles
import './Content.css';
import CreateIcon from '@material-ui/icons/Create';
import PhotoIcon from '@material-ui/icons/Photo';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import EventIcon from '@material-ui/icons/Event';
import ArtTrackIcon from '@material-ui/icons/ArtTrack';

// JS component files
import InputFormat from './InputFormat';

function Content() {
    return (
        <div className="content">
            <div className="content_container">

                {/* The Input */}
                <div className="content_input">
                    <CreateIcon />
                    <form>
                        <input type="text" />
                        <button type="submit">Send</button>
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

        </div>
    )
}

export default Content
