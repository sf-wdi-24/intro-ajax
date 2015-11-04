$(function() {

  // 1. create form YAY (in `index.html`)
  // 2. make AJAX request when form submits
  // 3. get user input from form to send to spotify

  $('#search').on('submit', function (event) {
    // prevent page from refreshing! very important!!
    event.preventDefault();
    console.log('form submitted!');

    // get user input from form
    var searchedArtist = $('#artist').val();
    console.log(searchedArtist);

    // make AJAX request to GET data from spotify
    // notice we're using string concatenation to put the user input into the URL
    $.get('https://api.spotify.com/v1/search?q=' + searchedArtist + '&type=artist', function (data) {
      
      // console.log data from spotify
      console.log(data);
    
      // the artists data is nested! we need to access it with the object keys!
      var artistResults = data.artists.items;

      // iterate through artist results
      artistResults.forEach(function (artist) {
        console.log(artist.name);

        // append each artist's name to the page
        $('#results').append('<p>' + artist.name + '</p>');
      });

    });
  });

});