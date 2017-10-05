//cost.js for menufunction totalcost(event){
	var java = document.getElementById("javaquan").value;
	var cafesingle = document.getElementById("cafesingle").value;
	var cafedouble = document.getElementById("cafedouble").value;
	var cappusingle = document.getElementById("cappusingle").value;
	var cappudouble = document.getElementById("cappudouble").value;
	
	document.getElementById("javasubtotal").value = javasubtotal = java*2;
	document.getElementById("cafesubtotal").value = cafesubtotal = cafesingle*2 + cafedouble*3;
	document.getElementById("cappusubtotal").value = cappusubtotal = cappusingle*4.75 + cappudouble * 5.75;
	document.getElementById("totalcost").value = totalcost = javasubtotal + cafesubtotal + cappusubtotal;
}