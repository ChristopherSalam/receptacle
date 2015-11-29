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
    apiRoute = require('./routes/api');

app.use('/', viewRoute);
app.use('/api', apiRoute);

// app.get("/", function (req, res) {
// 	// res.render('index');
// });

app.listen(port, function(){
	console.log("Simple static server showing %s listening at http://%s:%s", publicDir, hostname, port);
});
