
// var newStudent;

$("#newStudentSubmit").on("click", function(event){
    event.preventDefault();

    var newStudent = {
    fst_nm : $("#fName").val().trim(),
    lst_nm : $("#lName").val().trim(),
    email : $("#email").val().trim(),
    contact_no : $("#phone").val().trim(),
    password : $("#password").val().trim()
	};

    // var currentURL = window.location.origin;
        console.log(newStudent)

    $.post("/api/newStudent", newStudent, function(data){
        if (data){
            window.location.href = "/registration";
        }
    });
});

$("#student-sign-in").on("click", function(event){
    event.preventDefault();
    
    var currentStudent = {
    	email : $("#email").val().trim(),
    	password : $("#password").val().trim()
    }

    var currentURL = window.location.origin;

    $.post("/api/student", currentStudent, function(data){
        if (data === true){
            window.location.href = "/registration";
        }
        else {
            alert("Incorrect email or password.")
        }
    });
});

$("#admin-sign-in").on("click", function(event){
    event.preventDefault();
    
    var currentAdmin = {
        email : $("#email").val().trim(),
        password : $("#password").val().trim()
    }

    var currentURL = window.location.origin;

    $.post("/api/admin", currentAdmin, function(data){
        if (data === true){
            window.location.href = "/admin-portal";
        }
        else {
            alert("Incorrect email or password.")
        }
    });
});

    $.get("/api/courses", function(data){
       console.log(data);
        if (data) {
            var htmlStr = "";
            for (var i = 0; i < data.length; i++) {
                htmlStr += "<fieldset> <div id='" + [i] + "'><label for='courses' class='pure-radio'>" +
                         "<input id='" + [i] + "' type='radio' name='courseRadio' value='" + data[i].crs_nm + "'>" +
                         data[i].crs_nm + "</label></div> </fieldset>"         
            }
            $("#courseData").append(htmlStr);
        }
    });

$("#removeCourseAdmin").on ("click", function(event){
    event.preventDefault();
    $("div:radio:checked").remove();
});

$("#adminAddCourse").on("click", function(event){
    event.preventDefault();
    
    var newCourse = {
        crs_nm : $("#newCourseName").val().trim(),
        crs_ds : $("#newCourseDescription").val().trim(),
        LocationId : $("#newLocation").val()
    }

    var currentURL = window.location.origin;

    $.post("/api/courses", newCourse, function(data){
        if (data){
            window.location.href = "/admin-portal";
        }
        else {
            alert("Please enter all fields.")
        }
    });
});

$.get("/api/registration", function(data){
    console.log(data);
    if (data) {
        var htmlStr = "";
        for (var i = 0; i < data.length; i++) {
            htmlStr += "<fieldset> <label for='courses' class='pure-radio'>" +
                       "<input id='' type='radio' name='courseRadio' value='" + data[i].crs_nm + "'>" +
                        data[i].crs_nm + ": " + data[i].crs_ds + "</label> </fieldset>"         
        }
        $("#stuCourseData").append(htmlStr);
    }
});