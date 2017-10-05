//validate register
function init(){
	var getname = document.getElementById("fullname");
	var getemail = document.getElementById("email");
	var getstartdate = document.getElementById("startdate");
	var getexperience = document.getElementById("experience");

	getname.addEventListener("change", validateName, false);
	getemail.addEventListener("change", validateEmail, false);
	getstartdate.addEventListener("change", validateStartdate, false);
	getexperience.addEventListener("change", validateExperience, false);
	getexperience.addEventListener("click", validateExperience, false);	
}

window.onload = init;