const router = require('express').Router();
const bodyParser = require('body-parser').json();
const request = require('superagent');
const fp = process.env.FIREPLACE_URI;
const fpAPI = process.env.FIREPLACE_API_KEY;

module.exports = router
  .get('/on', (req, res, next) => {
    request
      .get(`${fp}/on`)
      .set('Authorization', fpAPI)
      .end((err, response) => {
        if (err) return next(err);
        res.send(response.text);
      });
  })
  .get('/off', (req, res, next) => {
    request
      .get(`${fp}/off`)
      .set('Authorization', fpAPI)
      .end((err, response) => {
        if (err) return next(err);
        res.send(response.text);
      });
  })
  .get('/status', (req, res, next) => {
    request
      .get(`${fp}/status`)
      .set('Authorization', fpAPI)
      .end((err, response) => {
        if (err) return next(err);
        res.send(response.text);
      });
  })
  .post('/timer', bodyParser, (req, res, next) => {
    request
      .post(`${fp}/timer`)
      .query({timeout: req.body.timeout})
      .set('Authorization', fpAPI)
      .end((err, response) => {
        if (err) return next(err);
        res.send(response.text);
      });
  });
