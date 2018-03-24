$(document).ready(function () {
  var apiKey = 'AIzaSyB7BePjH92WwSeZl2wQPVJQ8ZDeoFtbeYs';

  var movieTrailersId = 'UC3gNmTGu-TTbFPpfSs5kNkg';

  var trailersPlaylistId = 'PLScC8g4bqD47o9Fw9fqQF0ToZpO5OIJ6_';

  var huluPlaylistId = "PLviBkls1C5CJAIIV5WbwZZrsYaPERbbBJ";

<<<<<<< HEAD
  var googleMaps = `<iframe width="700" height="550" src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBCEE2nzor1sZUz0mC6-wKUXjQEEdEORbU&q=Movie+theaters+near+me" allowfullscreen></iframe>`;

  $("#test1").on("click", function () {
    console.log('test2 clicked!');
=======
  uTellyKey = "QnaLbSwHjRmsh0e5QANPxCLNN3wPp16dkM2jsnqXMkveQwmkxF"

  var tmdbApiKey = 'api_key=0c9ebd7d6e76fc10f179166f9acd0665'

  var tmdbImgUrl = 'https://image.tmdb.org/t/p/w185'

  var topTvURL = "https://api.themoviedb.org/3/tv/popular?api_key=0c9ebd7d6e76fc10f179166f9acd0665&language=en-US"

  var moviesURL = "https://api.themoviedb.org/3/movie/now_playing?api_key=0c9ebd7d6e76fc10f179166f9acd0665&language=en-US&page=1";
>>>>>>> 7260f0e92110eb4c96dd50964025da3216ab25be

  var topMoviesUrl = "https://api.themoviedb.org/3/discover/movie?api_key=0c9ebd7d6e76fc10f179166f9acd0665&language=en-US&region=us&vote_count.gte=5000&sort_by=vote_average.desc&include_adult=false&include_video=false&page=1"

  var uTellyURL = "https://utelly-tv-shows-and-movies-availability-v1.p.mashape.com/lookup?&country=us&term="

  //In Theaters Now
  $("#test1").on("click", function () {
    console.log('clicked!')
    $("#videos-display").empty();
    var tmdbApiKey = 'api_key=0c9ebd7d6e76fc10f179166f9acd0665';
    var tmdbImgUrl = 'https://image.tmdb.org/t/p/w185';

    //Populates what's in theaters
    $.ajax({
      url: moviesURL,
      method: "GET"
    }).then(function (response) {
      console.log(response);
      console.log(response.results[0].poster_path);
      for (var i = 0; i < response.results.length; i++) {
        console.log(response.results[i].title);
        var posterImg = `
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
                <br>
                <a id="maps" class="btn modal-trigger waves-effect waves-light" href="#modal1">Theaters Nearby</a>
            </div>
          </div>
        </div>`;

<<<<<<< HEAD
        $("#maps").on("click", function() {
          $("#modal1").empty();
          $("#modal1").html(googleMaps);
        });


        $("#videos-display").append(posterImg);
        titlesArr.push(response.results[i].title);
        //$("body").append(modals);
=======
        $("#videos-display").append(posterImg)
>>>>>>> 7260f0e92110eb4c96dd50964025da3216ab25be
      }
    });
  });

//Top Movies
$("#test2").on("click", function () {
  console.log('clicked!')
  $("#videos-display").empty();
  var tmdbApiKey = 'api_key=0c9ebd7d6e76fc10f179166f9acd0665';
  var tmdbImgUrl = 'https://image.tmdb.org/t/p/w185';

  //Populates top movies
  $.ajax({
    url: topMoviesUrl,
    method: "GET"
  }).then(function (response) {
    console.log(response);
    console.log(response.results[0].poster_path);
    for (var i = 0; i < response.results.length; i++) {
      console.log(response.results[i].title);
      var posterImg = `
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
              <a class = "streamable" data-title = "${response.results[i].title}">Can I stream this?</a>
              <div id = "streaming-services-${response.results[i].title}"></div>
          </div>
        </div>
      </div>`;

      $("#videos-display").append(posterImg)
    }
  });
});

  //Popular on TV
  $("#test3").on("click", function () {
    console.log('test3 clicked!')
    $("#videos-display").empty();
    //Populates TV shows on screen
    $.ajax({
      url: topTvURL,
      method: "GET"
    }).then(function (response) {
      console.log(response);
      console.log(response.results[0].poster_path)
      for (var i = 0; i < response.results.length; i++) {
        console.log(response.results[i].title)
        var posterImg = `
          <div class="poster-container">
            <div class="card">
              <div class="card-image waves-effect waves-block waves-light">
                <img class="modal-trigger movie-poster" data-title = "${response.results[i].name}" src="${tmdbImgUrl}${response.results[i].poster_path}" href="#modal1">
              </div>
              <div class="card-content">
                <span class="card-title activator grey-text text-darken-4">
                  <div id="modal-btn-container">
                  <a id="modal-btn" class="waves-effect waves-light btn modal-trigger" href="#modal1">${response.results[i].name}</a>
                  <i id="more-vert-btn" class="material-icons right">more_vert</i>
                  </div>
                </span>
              </div>
              <div id = "${response.results[i].name}" class="card-reveal">
                  <span class="card-title grey-text text-darken-4">${response.results[i].name}<i class="material-icons right">close</i></span>
                  <p>${response.results[i].overview}</p>
                  <a class = "streamable" data-title = "${response.results[i].name}">Can I stream this?</a>
                  <div id = "streaming-services-${response.results[i].name}"></div>
              </div>
            </div>
          </div>`;

        $("#videos-display").append(posterImg)
      }
    })
  })



  //Click a poster, get the trailers in a modal!
  $(document).on("click", '.movie-poster', function () {
    $("#modal1").empty();
    var movieTitle = $(this).data('title');
    $('#modal1').empty();
    console.log(movieTitle);
    var parsedTitle = movieTitle.replace(/\s/g, "+");
    var queryTitle = parsedTitle.toLowerCase();
    console.log(queryTitle);
    $.ajax({
      url: `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${queryTitle}+official+trailer&maxResults=3&key=${apiKey}`,
      type: "GET",
    }).then(function (response) {
      console.log(response);
      console.log(response.items);
      for (i = 0; i < response.items.length; i++) {
        console.log(response.items[i]);
        var videoId = response.items[i].id.videoId;
        var baseUrl = 'https://www.youtube.com/embed/';
        var embedVideo = `<iframe id="ytplayer" type="text/html" width="640" height="360"src="${baseUrl + videoId}"></iframe>`;
        $("#modal1").append(embedVideo);
      }
    });
  });

  //Click 'can I stream this?'
  $(document).on("click", '.streamable', function () {
    var unparsedTitle = $(this).data('title');
    var parsedShowTitle = unparsedTitle.replace(/\s/g, "+");
    var queryShowTitle = parsedShowTitle.toLowerCase();
    var divId = document.getElementById('streaming-services-' + unparsedTitle)
    $(divId).empty();

    $.ajax({
      url: uTellyURL + queryShowTitle,
      method: "GET",
      headers: {
        'X-Mashape-Key': uTellyKey,
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }).then(function (response) {
      console.log(response)
      if (response.results.length > 0){
      $(divId).append("<p>Available on: </p>")      
      for (var i = 0; i < response.results[0].locations.length; i++) {
        var streamIcon = `
        <img class = "responsive-img stream-icon" src="${response.results[0].locations[i].icon}">`
        $(divId).append(streamIcon)
      }
    }
    if (response.results.length === 0) {
      $(divId).append("<p>Unfortunately, this isn't available on any streaming platforms at this time. </p>")
    }


    })
  });



});