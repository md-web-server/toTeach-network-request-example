const axios = require('axios');
var rp = require('request-promise');

// Make a request for a user with a given ID
axios.get('http://www.example.com/')
  .then(function (response) {
    // handle success
    //    console.log(response.data);
  })
  .catch(function (error) {
    // handle error
    //
    console.log('error');
  })
  .then(function () {
    // always executed
  });

rp('http://www.example.com')
    .then(function (htmlString) {
      // Process html...
      //      console.log(htmlString)
    })
  .catch(function (err) {
    console.log('err')
        // Crawling failed...
  });

