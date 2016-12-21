const router = require('express').Router();
const bodyParser = require('body-parser').json();
const request = require('superagent');
const fp = process.env.FIREPLACE_URI;
const fpAPI = process.env.FIREPLACE_API_KEY;
let response = {
  message: ''
};

module.exports = router
  .get('/on', (req, res, next) => {
    response.message = 'On triggered';
    res.send(response);
  })
  .get('/off', (req, res, next) => {
    response.message = 'Off triggered';
    res.send(response);
  })
  .get('/status', (req, res, next) => {
    response.message = 'Status triggered';
    res.send(response);
  })
  .post('/timer', bodyParser, (req, res, next) => {
    response.message = 'timer triggered, time: ' + req.body.timeout;
    res.send(response);
  });
