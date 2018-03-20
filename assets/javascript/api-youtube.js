$(document).ready(function(){
    var apiKey = 'AIzaSyB7BePjH92WwSeZl2wQPVJQ8ZDeoFtbeYs'

    var movieTrailersId = 'UC3gNmTGu-TTbFPpfSs5kNkg';

    var testPlaylistId = 'PLBCF2DAC6FFB574DE'

    var trailersPlaylistId = 'PLScC8g4bqD47o9Fw9fqQF0ToZpO5OIJ6_'

    $("#test1").on("click",function(){
      console.log('test1 clicked!')
      $.ajax({
        url: "https://www.googleapis.com/youtube/v3/playlistItems?part=snippet,contentDetails&maxResults=10&playlistId="+trailersPlaylistId+"&key="+apiKey,
        type: "GET",
      }).then(function(response) {
        console.log(response);
        console.log(response.items)
        for (i = 0; i < response.items.length; i++){
          console.log(response.items[i])
          var videoId = response.items[i].contentDetails.videoId
          var baseUrl = 'https://www.youtube.com/embed/'
          var embedVideo = `<iframe id="ytplayer" type="text/html" width="640" height="360"src="${baseUrl + videoId}"></iframe>`;
          $("#videos-display").append(embedVideo)
        }
      });
    })

});