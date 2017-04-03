var routes = require("express").Router();

routes.post("/", function(req, res) {
    res.send("Hello world!");
});

module.exports = routes;
