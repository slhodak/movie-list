import API_KEY from '../config/tmdb.config';
import $ from 'jquery';
// import headers from '../cors';

const searchForVideos = (query, success, error) => {
  $.get({
    url: 'https://api.themoviedb.org/search/movie',
    api_key: API_KEY,
    query: query,
    success: success,
    error: function() { console.log('no!') }
  });
};

export default searchForVideos;