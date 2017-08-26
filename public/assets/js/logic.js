
var newStudent;

$("#student-sign-up").on("click", function(event){
    event.preventDefault();

    newStudent = {
    fName : $("#fName").val().trim(),
    lName : $("#lName").val().trim(),
    email : $("#email").val().trim(),
    phone : $("#phone").val().trim(),
    password : $("#password").val().trim()
	};

    var currentURL = window.location.origin;

//     $.post(currentURL + "/api/student");
//     // .done(function(data){
//     	console.log(data);
//     });)
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