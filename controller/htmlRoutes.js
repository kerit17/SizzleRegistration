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

  app.get("/admin-portal", function(req, res){ 
    res.sendFile(path.join(__dirname, "/../public/admin-portal.html")); 
  });

  app.get("/about", function(req, res){ 
    res.sendFile(path.join(__dirname, "/../public/about.html")); 
  });

  app.get("/student-sign-up", function(req, res){ 
    res.sendFile(path.join(__dirname, "/../public/student-sign-up.html")); 
  });

  app.get("/course-info", function(req, res){ 
    res.sendFile(path.join(__dirname, "/../public/course-info.html")); 
  });

  app.get("/currently-registered", function(req, res){ 
    res.sendFile(path.join(__dirname, "/../public/currently-registered.html")); 
  });

  app.get("/admin-add-course", function(req, res){ 
    res.sendFile(path.join(__dirname, "/../public/admin-add-course.html")); 
  });

  app.get("", function(req, res){ 
    res.sendFile(path.join(__dirname, "/../public/index.html")); 
  }); 
 
};