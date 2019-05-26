const axios = require('axios');
var requestPromise = require('request-promise');

const printAxios = (msg) => {
  console.log('\n',msg,' succeeded... library: axios')
  console.log('path for accessing the response: "response.data"\n');
  console.log(JSON.stringify(response.data), '\n');
}

const printRequestPromise = (msg, response) => {
  // Process html...
  console.log('\n',msg, ' succeeded... library: requestPromise')
  console.log('path for accessing the response: "response"\n');
  console.log(JSON.stringify(response), '\n')
  return response.data
}

var options = {
    method: 'POST', uri: 'https://httpbin.org/post',
    body: { 'key': 'value' },
    json: true // Automatically stringifies the body to JSON
};

// Make a request for a user with a given ID
axios.get('http://www.example.com/')
  .then(function (response) { printAxios('Get', response) })
  .catch(function (error)   { console.log('error'); })

const result = requestPromise('http://www.example.com')
  .then(function (response) { printRequestPromise('Get', response) })
  .catch(function (err)     { return 'err' });

axios.post('https://httpbin.org/post', { firstName: 'Fred', lastName: 'Flintstone' })
  .then(function (response) { printAxios('Get', response) })
  .catch(function (error)   { console.log('POST failed...', error); });

requestPromise(options)
    .then(function (response) { printRequestPromise('Get', response) })
    .catch(function (err) { console.log('POST failed...') });

