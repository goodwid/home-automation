const router = require('express').Router();
const request = require('superagent');
const fp = process.env.FIREPLACE_URI;
const fpAPI = process.env.FIREPLACE_API_KEY;
console.log('fpAPI: ', fpAPI);

module.exports = router
  .get('/on', (req, res, next) => {
    request
      .get(`${fp}/on`)
      .set('Authorization', fpAPI)
      .end((err, response) => {
        console.log('*** ERR: ', err);
        if (err) next(err);
        console.log(response);
        res.send('response.text');
      });
  })
  .get('/off', (req, res, next) => {
    request
      .get(`${fp}/off`)
      .set('Authorization', fpAPI)
      .end((err, response) => {
        if (err) next(err);
        res.send(response.text);
      });
  });
