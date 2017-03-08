const router = require('express').Router();
const bodyParser = require('body-parser').json();
const request = require('superagent');
const Light = require('../models/light');

module.exports = router
  .get('/', (req, res, next) => {
    Light.find()
      .then(data => {
        if (data) res.json(data);
      })
      .catch(next);
  })
  .get('/on/:id', (req, res, next) => {
    const id = req.params.id;

  })
  .post('/', bodyParser, (req, res, next) => {

  });
