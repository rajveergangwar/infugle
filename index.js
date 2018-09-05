var express = require("express");
var bodyParser = require("body-parser");

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.get("/hello",function(req,res) {
    res.send("Hello Response get from api");
})