// *********************************************************************************
// administrator-api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our models
var db = require("../models");

//Routing 
module.exports = function(app) {

    app.get("/api/admins", function(req, res) {
        // Here we add an "include" property to our options in our findAll query
        // We set the value to an array of the models we want to include in a left outer join
        // In this case, just db.Course
        db.Administrator.findAll({
            include: [db.Course]
        }).then(function(dbAdministrator) {
            res.json(dbAdministrator);
        });
    });

    app.get("/api/admins/:id", function(req, res) {
        // Here we add an "include" property to our options in our findOne query
        // We set the value to an array of the models we want to include in a left outer join
        // In this case, just db.Course
        db.Administrator.findOne({
            where: {
                id: req.params.id
            },
            include: [db.Course]
        }).then(function(dbAdministrator) {
            res.json(dbAdministrator);
        });
    });

    app.post("/api/admins", function(req, res) {
        db.Administrator.create(req.body).then(function(dbAdministrator) {
            res.json(dbAdministrator);
        });
    });

    app.delete("/api/admins/:id", function(req, res) {
        db.Administrator.destroy({
            where: {
                id: req.params.id
            }
        }).then(function(dbAdministrator) {
            res.json(dbAdministrator);
        });
    });

    app.post("/api/admin", function(req, res) {
        db.Administrator.findOne({
            where: {
                email: req.body.email,
                password: req.body.password
            }
        }).then(function(dbAdministrator) {
            if (dbAdministrator === null) {
                res.send(false);
        }
            else{
                res.send(true); 
            }          
        });
       
    });
};