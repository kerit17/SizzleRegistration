//Dependencies 
var path = require("path"); 
 
//Routing 
module.exports = function(app) { 
  //HTML GET request 
  app.get("/student", function(req, res){ 
    res.sendFile(path.join(__dirname, "/../public/student.html")); 
  }); 
 
  app.get("/admin", function(req, res){ 
    res.sendFile(path.join(__dirname, "/../public/admin.html")); 
  }); 

  app.get("/registration", function(req, res){ 
    res.sendFile(path.join(__dirname, "/../public/registration.html")); 
  }); 

  app.get("/index", function(req, res){ 
    res.sendFile(path.join(__dirname, "/../public/index.html")); 
  }); 

  app.get("", function(req, res){ 
    res.sendFile(path.join(__dirname, "/../public/index.html")); 
  }); 
 
};