const axios = require('axios');
const fetch = require('node-fetch');
const requestPromise = require('request-promise');

const print = (msg, lib, response) => {
//   console.log({msg, lib, response})
  console.log();
  console.log(msg,' succeeded... library: ', lib)
  console.log('lib:', lib, 'success:', JSON.stringify(response), '\n');
  return response
}

// Axios Library
axios.get('http://www.example.com/')
  .then(function (response) { print('Get', 'axios', response.data) })
  .catch(function (error)   { console.log('Get lib: axios error:', {error}) })

axios.post('https://httpbin.org/post', { firstName: 'Fred', lastName: 'Flintstone' })
  .then(function (response) { print('Post', 'axios', response.data.data) })
  .catch(function (error)   { console.log('POST lib: axios failed...', error); });

// Request Library
const options = {
  method: 'POST', uri: 'https://httpbin.org/post',
  body: { 'key': 'value' },
  json: true // Automatically stringifies the body to JSON
};

const result = requestPromise('http://www.example.com')
  .then(function (response) { print('Get', 'request', response) })
  .catch(function (err)     { return 'err' });

requestPromise(options)
  .then(function (response) { print('Get', 'request', response.data) })
  .catch(function (err) { console.log('POST lib: request failed...') });

// // Fetch Library
const postOptions = (data = {}) => {
  const options = {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, cors, *same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
        'Content-Type': 'application/json',
        // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: 'follow', // manual, *follow, error
    referrer: 'no-referrer', // no-referrer, *client
    body: JSON.stringify(data), // body data type must match "Content-Type" header
  };
  return options;
}

fetch('http://www.example.com/')
  .then(function(response) { return response.text(); })
  .then(function(response) { print('Get', 'fetch', response) })
  .catch(function (error)   { console.log({error}) })

fetch('https://httpbin.org/post', postOptions({answer: 42}) )
  .then(response => response.json() )
  .then(response => { print('Post', 'fetch', response.data) })

