//AJAX request to get lastest movie info from TMDB example
var settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://api.themoviedb.org/3/movie/latest?language=en-US&api_key=0c9ebd7d6e76fc10f179166f9acd0665",
    "method": "GET",
    "headers": {},
    "data": "{}"
  }
  
  $.ajax(settings).done(function (response) {
    console.log(response);