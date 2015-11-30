    'use strict';

var express = require('express'),
    mongoose = require('mongoose'),
    uriUtil = require('mongodb-uri'),

    /*
     * Mongoose by default sets the auto_reconnect option to true.
     * We recommend setting socket options at both the server and replica set level.
     * We recommend a 30 second connection timeout because it allows for
     * plenty of time in most operating environments.
     * From: https://gist.github.com/mongolab-org/9959376
     */

    options = { server: { socketOptions: { keepAlive: 1, connectTimeoutMS: 30000 } },
                    replset: { socketOptions: { keepAlive: 1, connectTimeoutMS : 30000 } } },

//mongoose to mongolab connection info

    mongodbUri = 'mongodb://ChrisSalam:e2HL6VdAqVZ7@ds061454.mongolab.com:61454/rcpt',
    mongooseUri = uriUtil.formatMongoose(mongodbUri);

    mongoose.connect(mongooseUri, options);
    var conn = mongoose.connection;

//Schema

    var wasteSchema = new mongoose.Schema({
      type: {
        type: String,
        trim: true
      },
      receptacle: {
        type: String,
        trim: true
      }
    });
    var Waste = mongoose.model('rcpt1', wasteSchema);
    var query = {};

//mongo api interface

    module.exports = (function(){

    var mongoApi = express.Router();

    mongoApi.get('/mongo',function(req,res){

      conn.on('error', console.error.bind(console, 'connection error:'));
      conn.once('open', function() {

        console.log("Let's get this party started.")
        Waste.findOneAndUpdate(query, {}, function(err, waste) {
          // console.log(waste["_doc"].rcpt);
          if (err) return res.send(500, { error: err });
          res.json(waste["_doc"].rcpt);
        });

      });
    });

      return mongoApi;

    }) ();
