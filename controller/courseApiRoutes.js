// *********************************************************************************
// course-api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our models
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

    // GET route for getting all of the courses
    // app.get("/api/courses", function(req, res) {
    //     var query = {};
    //     if (req.query.course_id) {
    //         query.CourseId = req.query.course_id;
    //     }
        // Here we add an "include" property to our options in our findAll query
        // We set the value to an array of the models we want to include in a left outer join
        // In this case, just db.Adminstrator
    //     db.Course.findAll({
    //         where: query,
    //         include: [db.Adminstrator]
    //     }).then(function(dbCourse) {
    //         res.json(dbCourse);
    //     });
    // });

    // GET route for getting all of the courses
    app.get("/api/courses", function(req, res) {
        
        // Here we add an "include" property to our options in our findAll query
        // We set the value to an array of the models we want to include in a left outer join
        // In this case, just db.Adminstrator
        db.Course.findAll({
        }).then(function(dbCourse) {
            res.json(dbCourse);
        });
    });



    // Get rotue for retrieving a single course
    app.get("/api/courses/:id", function(req, res) {
        // Here we add an "include" property to our options in our findOne query
        // We set the value to an array of the models we want to include in a left outer join
        // In this case, just db.Course
        db.Course.findOne({
            where: {
                id: req.params.id
            },
            include: [db.Adminstrator]
        }).then(function(dbCourse) {
            res.json(dbCourse);
        });
    });

    // POST route for saving a new course
    app.post("/api/courses", function(req, res) {
        db.Course.create(req.body).then(function(dbCourse) {
            res.json(dbCourse);
        });
    });

    // DELETE route for deleting courses
    app.delete("/api/courses/:id", function(req, res) {
        db.Course.destroy({
            where: {
                id: req.params.id
            }
        }).then(function(dbCourse) {
            res.json(dbCourse);
        });
    });

    // PUT route for updating courses
    app.put("/api/courses", function(req, res) {
        db.Course.update(req.body, {
            where: {
                id: req.body.id
            }
        }).then(function(dbCourse) {
            res.json(dbCourse);
        });
    });

    app.get("/api/registration", function(req, res) {
        
        // Here we add an "include" property to our options in our findAll query
        // We set the value to an array of the models we want to include in a left outer join
        // In this case, just db.Adminstrator
        db.Course.findAll({
        }).then(function(dbCourse) {
            res.send(dbCourse);
        });
    });
};
