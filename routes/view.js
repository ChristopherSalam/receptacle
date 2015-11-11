var express = require('express'),
  publicDir = __dirname + '/client';

module.exports = (function(){
  'use strict';
  var viewsRoute = express.Router();

  viewsRoute.get('/beta', function(req, res) {
          res.render('app/beta/beta.html');
      });

  viewsRoute.get("/", function (req, res) {
  	res.render('index');
  });

  return viewsRoute;
})();
