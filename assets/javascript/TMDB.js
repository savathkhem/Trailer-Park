
$('button').on('click', function () {
  var x = $(this).data("search");
  console.log(x); //Test button, not needed for project

  var queryURL = "https://api.themoviedb.org/3/movie/now_playing?page=1&language=en-US&api_key=0c9ebd7d6e76fc10f179166f9acd0665";
  console.log(queryURL);

  $.ajax({url:queryURL, method:"GET"})
      .done(function (response){
          for (var i=0; i<response.results.length; i++){
          
          $("body").prepend("<p>Overview: " + response.results[i].overview+ "</p>");//Trying to pull release date info for index[0]
          }
          
      })

})
