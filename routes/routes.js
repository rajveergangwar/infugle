var express = require("express");
var app = express();

var appRouter = function (app) {
    app.get("/",function(req,res) {
        res.send("Welcome to my app");
    })
}

module.exports = appRouter;