import VideoList from './VideoList.js';
import exampleVideoData from '../data/exampleVideoData.js';
import VideoPlayer from './VideoPlayer.js';
import searchYouTube from '../lib/searchYouTube.js';
// import storeData from '../lib/searchYouTube.js';
import Search from './Search.js';

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = { videoIndex: 0, videoData: exampleVideoData };
    this.clickVideo = this.clickVideo.bind(this);
    this.searchClick = this.searchClick.bind(this);
  }

  clickVideo (index) {
    this.setState({
      videoIndex: index
    });
  } 

  searchClick (string) {
    searchYouTube({'query': string, 'key': 'AIzaSyC4ipBzukUYIXzal8oFxqlolVH-ZEghLWA'},(data) => {
      console.log(data);
      this.setState({
        videoData: data.items
      });
      console.log(this.state);

    });

  }
  

  render () {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <Search searchClick={this.searchClick}/>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <VideoPlayer video={this.state.videoData[this.state.videoIndex]}/>
          </div>
          <div className="col-md-5">
            <VideoList videos={this.state.videoData} clickFunc={this.clickVideo}/> 
          </div>
        </div>
      </div>
    );
  }
}
// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;
