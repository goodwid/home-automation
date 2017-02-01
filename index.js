#!/usr/bin/env node
require ('dotenv').config();
const app = require('./lib/app');
const port = 9000;
require ('./lib/setup-mongoose');

app.listen(port);

// const approveDomains = require('./lib/approveDomains');
// const securePort = 443;
// var lex = require('letsencrypt-express').create({
//   // set to https://acme-v01.api.letsencrypt.org/directory in production
//   // server: 'staging',
//   server: 'https://acme-v01.api.letsencrypt.org/directory',
//
//   // If you wish to replace the default plugins, you may do so here
//   //
//   challenges: { 'http-01': require('le-challenge-fs').create({ webrootPath: '/tmp/acme-challenges' }) },
//   store: require('le-store-certbot').create({ webrootPath: '/tmp/acme-challenges' }),
//
//   // You probably wouldn't need to replace the default sni handler
//   // See https://github.com/Daplie/le-sni-auto if you think you do
//   //, sni: require('le-sni-auto').create({})
//
//   approveDomains
// });
//
// require('http').createServer(lex.middleware(require('redirect-https')())).listen(port, function () {
//   console.log('Listening for ACME http-01 challenges on', this.address());
// });
//
// require('https').createServer(lex.httpsOptions, lex.middleware(app)).listen(securePort, function () {
//   console.log('Listening for ACME tls-sni-01 challenges and serve app on', this.address());
// });
