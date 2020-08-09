import React from 'react';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import youtube from '../api/youtube';
import axios from 'axios';

const KEY = "AIzaSyAVnwBndlJaAkBhLY5rS6ryQECXxQ0XQWw";

class App extends React.Component {

    state = { videos:[], selectedVideo: null};

    getSearchResult = async (term) => {
        console.log(term);
        const response = await youtube.get("/search", {
            params: {
                q: term,
                part: "snippet",
                maxResults: 5,
                type: 'video',
                key: KEY
            }
        });
        console.log(response.data.items);
        this.setState({ 
            videos: response.data.items,
            selectedVideo: response.data.items[0]
        });
    }

    onVideoSelect = video => {
        console.log(video);
        this.setState({selectedVideo: video.video});
    }

    render(){
      return <div className="ui container" style={{marginTop:'10px'}}>
          <SearchBar onSubmit={this.getSearchResult}></SearchBar>
          <div className="ui grid">
              <div className="ui row">
                  <div className="eleven wide column">
                      <VideoDetail video={this.state.selectedVideo}></VideoDetail>
                  </div>
                  <div className="five wide column">
                      <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos}></VideoList>
                  </div>
              </div>
          </div>
      </div> 
    };
}

export default App;
