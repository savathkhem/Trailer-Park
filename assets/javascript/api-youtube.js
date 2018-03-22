$(document).ready(function () {
  var apiKey = 'AIzaSyB7BePjH92WwSeZl2wQPVJQ8ZDeoFtbeYs'

  var movieTrailersId = 'UC3gNmTGu-TTbFPpfSs5kNkg';

  var trailersPlaylistId = 'PLScC8g4bqD47o9Fw9fqQF0ToZpO5OIJ6_';

  var huluPlaylistId = "PLviBkls1C5CJAIIV5WbwZZrsYaPERbbBJ";

  $("#test1").on("click", function () {
    console.log('test2 clicked!')

    var omdbURL = "https://api.themoviedb.org/3/movie/now_playing?api_key=0c9ebd7d6e76fc10f179166f9acd0665&language=en-US&page=1";
    var titlesArr = [];
    var tmdbApiKey = 'api_key=0c9ebd7d6e76fc10f179166f9acd0665'
    var tmdbImgUrl = 'https://image.tmdb.org/t/p/w185'
    console.log(omdbURL);

    //Populates what's in theaters
    $.ajax({
      url: omdbURL,
      method: "GET"
    }).then(function (response) {
      console.log(response);
      console.log(response.results[0].poster_path)
      for (var i = 0; i < response.results.length; i++) {
        console.log(response.results[i].title)
        var posterImg =`
        <div class="poster-container">
          <div class="card">
            <div class="card-image waves-effect waves-block waves-light">
              <img class="modal-trigger movie-poster" data-title = "${response.results[i].title}" src="${tmdbImgUrl}${response.results[i].poster_path}" href="#modal1">
            </div>
            <div class="card-content">
              <span class="card-title activator grey-text text-darken-4">
                <div id="modal-btn-container">
                <a id="modal-btn" class="waves-effect waves-light btn modal-trigger" href="#modal1">${response.results[i].title}</a>
                <i id="more-vert-btn" class="material-icons right">more_vert</i>
                </div>
              </span>
            </div>
            <div id = "${response.results[i].title}" class="card-reveal">
                <span class="card-title grey-text text-darken-4">${response.results[i].title}<i class="material-icons right">close</i></span>
                <p>${response.results[i].overview}</p>
            </div>
          </div>
        </div>`;


        $("#videos-display").append(posterImg)
        titlesArr.push(response.results[i].title)
        //$("body").append(modals);
      }
    })
  })

  //Click a poster, get the trailers in a modal!
  $(document).on("click", '.movie-poster', function () {
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
        $("#modal1").append(embedVideo)
      }
    });
  })

});