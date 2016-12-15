const router = require('express').Router();
const bodyParser = require('body-parser').json();
const Temp = require('../models/temperature');

router
  .get('/', (req, res, next) => {
    Temp.find()
      .lean()
      .then(data => res.send(data))
      .catch(err => next(err));
  })
  .get('/latest', (req, res, next) => {
    Temp.find()
      .lean()
      .sort({timestamp: -1})
      .limit(1)
      .then(data => res.send(data))
      .catch(err => next(err));
  })
  .post('/', bodyParser, (req, res, next) => {
    const data = req.body;
    data.timestamp = new Date().valueOf();
    console.log(data);
    new Temp(data).save()
      .then(data => res.send(data))
      .catch(err => next(err));
  });
