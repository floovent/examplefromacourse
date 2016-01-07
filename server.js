var express = require("express");
var app = express();

var PORT = 3000;

// app.get("/", function(req, res) {
// 	res.send("Hello Express");
// });



var middleware = {
	requireAuthentication: function(req, res, next) {
		console.log("PRIVATE ROUTE");
		next();
	},
	logger: function(req, res, next) {
		var date = new Date().toString();
		console.log(req.method + " " + req.originalUrl + " on " + date);
		next();
	}
}

app.use(middleware.logger);

app.get("/about", function(req, res) {
	res.send("About us!");
});

app.use(express.static(__dirname + "/public"));
app.listen(PORT, function() {
	console.log("It works on port " + PORT);
});