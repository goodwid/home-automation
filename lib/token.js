const jwt = require('jsonwebtoken');
const appSecret = process.env.APP_SECRET;
if (!appSecret) {
  console.log('env variable APP_SECRET not set in token.js!');
  process.exit(1);
}

module.exports = {
  sign (user) {
    return new Promise((resolve, reject) => {
      jwt.sign({
        id:user.id,
        roles: user.roles,
        username: user.username
      }, appSecret, null, (err, token) => {
        if(err) return reject(err);
        resolve(token);
      });

    });
  },

  verify(token) {
    if (!token) {
      return Promise.reject('No token provided!');
    }
    return new Promise((resolve, reject) => {
      jwt.verify(token, appSecret, (err, payload) => {
        if(err) return reject(err);
        resolve(payload);
      });
    });
  }
};
