const print = (msg, lib, response) => {
//   console.log({msg, lib, response})
  console.log();
  console.log(msg,' succeeded... library: ', lib)
  console.log('lib:', lib, 'success:', JSON.stringify(response), '\n');
  return response
}

// Axios Library
const axios = require('axios');
axios.get('http://www.example.com/')
  .then(function (response) { print('Get', 'axios', response.data) })
  .catch(function (error)   { console.log('Get lib: axios error:', {error}) })

axios.post('https://httpbin.org/post', { firstName: 'Fred', lastName: 'Flintstone' })
  .then(function (response) { print('Post', 'axios', response.data.data) })
  .catch(function (error)   { console.log('POST lib: axios failed...', error); });

// Request Promise Library
const requestPromise = require('request-promise');
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
const fetch = require('node-fetch');
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


// output still needs resolving.
// // http
// var http = require("http");
//
// var httpOptions = {
//   "method": "GET",
//   "hostname": "example.com",
//   "port": null,
//   "path": "/",
//   "headers": {
//     "connection": "keep-alive",
//     "pragma": "no-cache",
//     "cache-control": "no-cache",
//     "upgrade-insecure-requests": "1",
//     "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.157 Safari/537.36",
//     "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3",
//     "accept-encoding": "gzip, deflate",
//     "accept-language": "en-US,en;q=0.9,ja;q=0.8",
//     "postman-token": "08f0b65e-dc90-2726-4104-9ee9e3e44d75"
//   }
// };
//
// var req = http.request(httpOptions, function (res) {
//   var chunks = [];
//
//   res.on("data", function (chunk) {
//     chunks.push(chunk);
//   });
//
//   res.on("end", function () {
//     var body = Buffer.concat(chunks);
//     console.log(body.toString());
//   });
// });
//
// req.end();
//
// // Request Library
// var request = require("request");
//
// var requestOptions = { method: 'GET',
//   url: 'http://example.com/',
//   headers:
//    { 'postman-token': 'c2413bb5-5b69-1e1c-162f-b7ff644db27a',
//      'accept-language': 'en-US,en;q=0.9,ja;q=0.8',
//      'accept-encoding': 'gzip, deflate',
//      accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3',
//      'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.157 Safari/537.36',
//      'upgrade-insecure-requests': '1',
//      'cache-control': 'no-cache',
//      pragma: 'no-cache',
//      connection: 'keep-alive' } };
//
// request(requestOptions, function (error, response, body) {
//   if (error) throw new Error(error);
//
//   console.log(body);
// });
//
