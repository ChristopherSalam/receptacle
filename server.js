var express = require('express'),
    hostname = process.env.HOSTNAME || 'localhost',
    port = parseInt(process.env.PORT, 10) || 4567,
    publicDir = process.argv[2] || __dirname + '/client',
    app = express();

app.get("/", function (req, res) {
  res.redirect("/");
});

app.use(express.static(publicDir));

console.log("Simple static server showing %s listening at http://%s:%s", publicDir, hostname, port);
app.listen(port, hostname);







