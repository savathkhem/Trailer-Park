$(document).ready(function () {
  var apiKey = 'AIzaSyB7BePjH92WwSeZl2wQPVJQ8ZDeoFtbeYs'

  var movieTrailersId = 'UC3gNmTGu-TTbFPpfSs5kNkg';

  var trailersPlaylistId = 'PLScC8g4bqD47o9Fw9fqQF0ToZpO5OIJ6_'

  $("#test1").on("click", function () {
    console.log('test1 clicked!')
    $.ajax({
      url: "https://www.googleapis.com/youtube/v3/playlistItems?part=snippet,contentDetails&maxResults=10&playlistId=" + trailersPlaylistId + "&key=" + apiKey,
      type: "GET",
    }).then(function (response) {
      console.log(response);
      console.log(response.items)
      for (i = 0; i < response.items.length; i++) {
        console.log(response.items[i])
        var videoId = response.items[i].contentDetails.videoId
        var baseUrl = 'https://www.youtube.com/embed/'
        var embedVideo = `<iframe id="ytplayer" type="text/html" width="640" height="360"src="${baseUrl + videoId}"></iframe>`;
        $("#videos-display").prepend(embedVideo)
      }
    });
  })

  $("#test2").on("click", function () {
    console.log('test2 clicked!')

    var omdbURL = "https://api.themoviedb.org/3/movie/now_playing?api_key=0c9ebd7d6e76fc10f179166f9acd0665&language=en-US&page=1";
    var titlesArr = [];
    var tmdbApiKey = 'api_key=0c9ebd7d6e76fc10f179166f9acd0665'
    var tmdbImgUrl = 'https://image.tmdb.org/t/p/w185'
    console.log(omdbURL);

    $.ajax({
      url: omdbURL,
      method: "GET"
    }).then(function (response) {
      console.log(response);
      console.log(response.results[0].poster_path)
      for (var i = 0; i < response.results.length; i++) {
        console.log(response.results[i].title)
        var posterImg = `<img class="responsive-img movie-poster" data-title = "${response.results[i].title}" src="${tmdbImgUrl}${response.results[i].poster_path}">`
        console.log(posterImg)
        $("#videos-display").prepend(posterImg)
        titlesArr.push(response.results[i].title)
      }
    })
  })

    $(document).on("click",'.movie-poster',function(){
      var movieTitle = $(this).data('title');
      console.log(movieTitle);
      var parsedTitle = movieTitle.replace(/\s/g, "+");
      var queryTitle = parsedTitle.toLowerCase();
      console.log(queryTitle)
      $.ajax({
        url: `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${queryTitle}+official+trailer&maxResults=3&key=${apiKey}`,
        type: "GET",
      }).then(function (response) {
        console.log(response);
        console.log(response.items)
        for (i = 0; i < response.items.length; i++) {
          console.log(response.items[i])
          var videoId = response.items[i].id.videoId
          var baseUrl = 'https://www.youtube.com/embed/'
          var embedVideo = `<iframe id="ytplayer" type="text/html" width="640" height="360"src="${baseUrl + videoId}"></iframe>`;
          $("#videos-display").prepend(embedVideo)
        }
      });
    })

});