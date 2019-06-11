// TODO: Render the `App` component to the DOM
import App from './components/App.js';
import exampleVideoData from './data/exampleVideoData.js';

ReactDOM.render(<App list={exampleVideoData} />, document.getElementById('app'));