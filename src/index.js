"use strict";
exports.__esModule = true;
var express = require('express');
var search_controller_1 = require("./components/controller/search.controller");
var searchController = new search_controller_1.SearchController();
var app = express();
var apiRouter = express.Router();
apiRouter.get('/search', function (req, res) { return searchController.generalSearch(req, res); });
app.use(express.json());
app.use(apiRouter);
app.listen(4000);
console.log("Listening on port 4000");
console.log(searchController);
//# sourceMappingURL=index.js.map