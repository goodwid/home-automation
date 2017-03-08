/* globals after */

const Temp = require('../../models/temperature');
const mongoose = require('mongoose');
const chai = require('chai');
const assert = chai.assert;

describe('Temperature model', () => {
  it('requires name', done => {
    const temp = new Temp();
    temp.validate()
      .then(() => done('expected error'))
      .catch(() => done());
  });

  it('validates with required fields', done => {
    const date = new Date();
    const temp = new Temp({temp: 22.7, timestamp: date.valueOf() , reporter: 'tester'});
    temp.validate()
    .then(done)
    .catch(done);
  });

  it('converts temp to F', () => {
    const date = new Date();
    const cTemp = 22;
    const fTemp = cTemp * (9/5) + 32;
    const temp = new Temp({temp: cTemp, timestamp: date.valueOf(), reporter: 'tester'});
    assert.equal(fTemp, temp.getF());
  });

  after('remove mongoose model', () => {
    delete mongoose.connection.models['Temp'];
  });

});
