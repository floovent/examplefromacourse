var express = require("express");

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

module.exports = middleware;