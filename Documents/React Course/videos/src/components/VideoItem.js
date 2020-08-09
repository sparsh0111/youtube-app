import './VideoItem.css';
import React from 'react';

const VideoItem = video => {
    console.log(video);
    return (
        <div onClick={() => video.onVideoSelect(video)} className="video-item item">
            <img alt={video.video.snippet.title} className="ui image" src={video.video.snippet.thumbnails.high.url} ></img>
            <div className="content">
                <div className="header"><label>{video.video.snippet.title}</label></div>
            </div>
        </div>
    );
}

export default VideoItem;