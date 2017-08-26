
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