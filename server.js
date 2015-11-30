var express = require('express'),
    hostname = process.env.HOSTNAME || 'localhost',
    port = process.env.PORT || 4567,
    publicDir = __dirname + '/client',
    nodeModules = __dirname +'/node_modules',
    firebase = require('firebase'),
    app = express();

app.use(express.static(publicDir));
app.use(express.static(nodeModules));

var viewRoute = require('./routes/view'),
    mongoApi = require('./routes/mongoApi');
    // redisApi = require('./routes/redisApi');

app.use('/', viewRoute);
app.use('/mongo', mongoApi);
// app.use('/redis', redisApi);

app.listen(port, function(){
	console.log("Simple static server showing %s listening at http://%s:%s", publicDir, hostname, port);
});
