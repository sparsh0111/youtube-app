import React from 'react';
import VideoItem from './VideoItem';

const VideoList = props => {

    console.log(props);
    const videos = props.videos.map(video => {
        return <VideoItem onVideoSelect={props.onVideoSelect} key={video.id.videoId} video={video} />;
    });

    return <div className="video-list ui relaxed divided list">{videos}</div>;
}

export default VideoList;