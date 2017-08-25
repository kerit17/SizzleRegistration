var express = require("express");
var bodyParser = require("body-parser");

// EXPRESS CONFIGURATION
var app = express();

var PORT = process.env.PORT || 8080;

// Requiring our models for syncing
var db = require("./models");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));
app.use(express.static('public'));

// ROUTER
require("./controller/apiRoutes")(app);
require("./controller/htmlRoutes")(app);

// Syncing our sequelize models and then starting our Express app
// =============================================================
db.sequelize.sync({ force: false }).then(function() {
    app.listen(PORT, function() {
        console.log("App listening on PORT " + PORT);
    });
});