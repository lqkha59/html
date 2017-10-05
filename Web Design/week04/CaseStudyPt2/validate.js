//validate js for Job Form
function validateName (event){
	var myName = event.currentTarget;
	var checkName = /^([A-Z][a-z]+\s?)+$/;
	var check = checkName.test(myName.value);
	if (!check){
		alert("The name you entered: " + myName.value + " is not in the correct form.\n" +
			"Name should contain alphabet characters and character spaces.\n" +
			"The first character of the word should be uppercase.");
	}
}

function validateEmail(event){
	var myEmail = event.currentTarget;
	var checkEmail = /^[\w.-]+@(\w+.){1,3}(\w+)$/;
	var check = checkEmail.test(myEmail.value);
	if (!check){
		alert("The email you enter: " + myEmail.value + " is not in the correct form.\n");
	}
}

function validateStartdate (event){
	var myStartdate = event.currentTarget.value;
	var now = new Date();
	var today = now.getFullYear +"-"+now.getMonth+"-"+now.getDate;
	if(myStartdate <= today)
		alert("The Start Date is not valid.\n Please try again.");
}

function validateExperience (event){
	var myExperience = event.currentTarget;
	if (!(myExperience.value.length>0))
		alert("Please fill in your experience.");
}