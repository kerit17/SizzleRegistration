// *********************************************************************************
// location-api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our models
var db = require("../models");

//Routing 
module.exports = function(app) {

    app.get("/api/locs", function(req, res) {
        // Here we add an "include" property to our options in our findAll query
        // We set the value to an array of the models we want to include in a left outer join
        // In this case, just db.Course
        db.Location.findAll({
            include: [db.Course]
        }).then(function(dbLocation) {
            res.json(dbLocation);
        });
    });

    // app.get("/api/locs/:id", function(req, res) {
    //     // Here we add an "include" property to our options in our findOne query
    //     // We set the value to an array of the models we want to include in a left outer join
    //     // In this case, just db.Course
    //     db.Location.findOne({
    //         where: {
    //             id: req.params.id
    //         },
    //         include: [db.Course]
    //     }).then(function(dbLocation) {
    //         res.json(dbLocation);
    //     });
    // });

    app.get("/api/locs/:loc_nm", function(req, res) {
        console.log(req.params.loc_nm);
        // Here we add an "include" property to our options in our findOne query
        // We set the value to an array of the models we want to include in a left outer join
        // In this case, just db.Course
        db.Location.findOne({
            where: {
                loc_nm: req.params.loc_nm
            },
            include: [db.Course]
        }).then(function(dbLocation) {
            console.log(dbLocation);
            res.send({ id: dbLocation.dataValues.id });
        });
    });

    app.post("/api/locs", function(req, res) {
        db.Location.create(req.body).then(function(dbLocation) {
            res.json(dbLocation);
        });
    });

    app.delete("/api/locs/:id", function(req, res) {
        db.Location.destroy({
            where: {
                id: req.params.id
            }
        }).then(function(dbLocation) {
            res.json(dbLocation);
        });
    });
};