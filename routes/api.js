var express = require('express'),
  redis = require('redis'),
  client = redis.createClient();

module.exports = (function(){
  'use strict';
  var api = express.Router();

  client.set('framework', 'AngularJS');

  // api.get('/', function(req, res){
  //   res.json({'key':'value'});
  // });
  // api.use(function(req,res,next){
  //   client.set("string key","string val", redis.print);
  //   next();
  // });
  // api.get('/',function(req,res){
  //     client.lrange('mylist','0','-1',function(err,reply){
  //       console.log("gettrigger");
  //         res.json(reply);
  //     });
  // });
  //
  // api.post('/',function(req,res){
  //     client.lpush('mylist',req.body.item);
  //     console.log("posttrigger");
  //     res.json({"result":"received"});
  // });

  return api;
})();
