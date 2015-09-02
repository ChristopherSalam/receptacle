var express = require('express'),
    hostname = process.env.HOSTNAME || 'localhost',
    port = process.env.PORT || 4567,
    publicDir = __dirname + '/client',
    app = express();

app.use(express.static(publicDir));

app.get("/", function (req, res) {
	res.render('index');
});

app.listen(port, function(){
	console.log("Simple static server showing %s listening at http://%s:%s", publicDir, hostname, port);
});







