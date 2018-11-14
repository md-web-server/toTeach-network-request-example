const axios = require('axios');
var requestPromise = require('request-promise');

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

const result = requestPromise('http://www.example.com')
    .then(function (htmlString) {
      // Process html...
      return htmlString
    })
   .catch(function (err) {
      return 'err'
      // Crawling failed...
   });
result.then(x => {
  console.log(x)
})

// python example from: http://docs.python-requests.org/en/master/user/quickstart/
// r = requests.post('https://httpbin.org/post', data = {'key':'value'})

var options = {
    method: 'POST',
    uri: 'https://httpbin.org/post',
    body: {
        'key': 'value'
    },
    json: true // Automatically stringifies the body to JSON
};

requestPromise(options)
    .then(function (parsedBody) {
      console.log(' POST succeeded...')
      console.log(parsedBody)
    })
    .catch(function (err) {
        console.log('POST failed...')
    });

