const axios = require('axios');
var requestPromise = require('request-promise');

// Make a request for a user with a given ID
axios.get('http://www.example.com/')
  .then(function (response) { console.log(response.data);
  })
  .catch(function (error) {  // handle error
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
    .then(function (response) {
      console.log('\nPOST succeeded...')
      console.log('library: requestPromise');
      console.log('parsedBody.data', response.data, '\n')
    })
    .catch(function (err) {
        console.log('POST failed...')
    });

axios.post('https://httpbin.org/post', {
    firstName: 'Fred',
    lastName: 'Flintstone'
  })
  .then(function (response) {
    console.log('\nPOST 2 succeeded...')
    console.log('library: axios');
    console.log('response.data.data', response.data.data, '\n');
  })
  .catch(function (error) {
    console.log('POST 2 failed...')
    console.log(error);
  });
