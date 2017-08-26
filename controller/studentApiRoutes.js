// *********************************************************************************
// student-api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our models
var db = require("../models");

//Routing 
module.exports = function(app) {

    app.get("/api/students", function(req, res) {
        db.Student.findAll({}).then(function(dbStudent) {
            res.json(dbStudent);
        });
    });

    app.get("/api/students/:id", function(req, res) {
        db.Student.findOne({
            where: {
                id: req.params.id
            }
        }).then(function(dbStudent) {
            res.json(dbStudent);
        });
    });

    app.post("/api/students", function(req, res) {
        db.Student.create(req.body).then(function(dbStudent) {
            res.json(dbStudent);
        });
    });

    app.delete("/api/students/:id", function(req, res) {
        db.Student.destroy({
            where: {
                id: req.params.id
            }
        }).then(function(dbStudent) {
            res.json(dbStudent);
        });
    });
};