const axios = require('axios');
var requestPromise = require('request-promise');

// Make a request for a user with a given ID
axios.get('http://www.example.com/')
  .then(function (response) {
    console.log('\nGET succeeded... library: axios')
    console.log('path for accessing the response: "response.data"\n');
    console.log(JSON.stringify(response.data), '\n');
    return response.data;
  })
  .catch(function (error) {  // handle error
    console.log('error');
  })

const result = requestPromise('http://www.example.com')
    .then(function (response) {
      // Process html...
      console.log('\nGET succeeded... library: requestPromise')
      console.log('path for accessing the response: "response"\n');
      console.log(JSON.stringify(response), '\n')
      return response.data
    })
   .catch(function (err) {
      return 'err'
      // Crawling failed...
   });
result.then(x => {
  // console.log(x);
  ;
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

axios.post('https://httpbin.org/post', {
    firstName: 'Fred',
    lastName: 'Flintstone'
  })
  .then(function (response) {
    console.log('\nPOST 2 succeeded... library: axios');
    console.log('path for accessing the response: "response.data.data"\n');
    console.log('response.data.data', response.data.data, '\n');
  })
  .catch(function (error) {
    console.log('POST 2 failed...')
    console.log(error);
  });

requestPromise(options)
    .then(function (response) {
      console.log('\nPOST succeeded... library: requestPromise');
      console.log('path for accessing the response: "response.data"\n');
      console.log('response.data', response.data, '\n')
    })
    .catch(function (err) {
        console.log('POST failed...')
    });

