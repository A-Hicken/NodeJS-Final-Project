const routes = require("express").Router();
const myController = require("../controllers");

routes.get("/", myController.firstFunction);
//books route
routes.get("/books", require("./books"));

module.exports = routes;
