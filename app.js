
/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');
var handlebars = require('express3-handlebars')

var index = require('./routes/index');
var play = require('./routes/play');
var info = require('./routes/info');
var web = require('./routes/web');
var browse = require('./routes/browse');
var right = require('./routes/right');
var left = require('./routes/left');
var share = require('./routes/share');
var send = require('./routes/send');
var preference = require('./routes/preference');
var profile = require('./routes/profile');
var search = require('./routes/search');

// var user = require('./routes/user');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser('IxD secret key'));
app.use(express.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', index.view);
app.get('/play/:categoryTitle', play.view);
app.get('/play/:categoryTitle/right', right.view);
app.get('/play/:categoryTitle/left', left.view);
app.get('/play/:categoryTitle/:itemId', play.view);
app.get('/play/:categoryTitle/:itemId/share', share.view);
app.get('/play/:categoryTitle/:itemId/share/send', send.view);
app.get('/play/:categoryTitle/:itemId/info', info.view);
app.get('/play/:categoryTitle/:itemId/info/:web', web.view);
app.get('/browse', browse.view);
app.get('/preference', preference.view);
app.get('/profile', profile.view);
app.get('/search', search.view);
app.get('/profile_register', profile.register);


// Example route
// app.get('/users', user.list);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
