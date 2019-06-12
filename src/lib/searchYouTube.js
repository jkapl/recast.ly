import YOUTUBE_API_KEY from '../config/youtube.js';

var searchYouTube = (options, callback) => {
  options.max = options.max || '5';
  //$.get('https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=' + options.max + '&q=' + options.query + '&videoEmbeddable=true&key=' + options.key, {}, function () {callback()})
  $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=' + options.max + '&q=' + options.query + '&key=' + options.key + '&videoEmbeddable=true&type=video',
    type: 'GET',
    success: callback,
    error: function(error) { console.log(error);}
  });
};

export default searchYouTube;


