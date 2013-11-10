
/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var https = require('https');
var path = require('path');
var Firebase = require('firebase');

var myRootRef = new Firebase('https://myprojectname.firebaseIO-demo.com/');
var app = express();

myRootRef.set("hello world!");

app.configure(function(){
  app.set('port', 50000);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'ejs');
  app.use(express.logger('dev'));
  app.use(express.cookieParser());
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(path.join(__dirname, 'public')));
});

app.configure('development', function(){
  app.use(express.errorHandler());
});

app.get('/launch', function(req, res){
  res.render('home',{});
});

// app.get('/launch/add', function(req, res){


//   res.render('app', {
//     isException    : req.query.isException,
//     url            : req.query.url,
//     title          : req.query.title,
//     og_title       : req.query.og_title,
//     og_url         : req.query.og_url,
//     og_site_name   : req.query.og_site_name,
//     og_locale      : req.query.og_locale,
//     og_description : description,
//     og_image       : imageUrl
//   });
// });

http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});
