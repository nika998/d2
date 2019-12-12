function provera(e){
	
	var email = $("#email").val();
	var tel = $("#telefon").val();
	var datumvreme = $("#datumvreme").val();
	
	if(!telValidation(tel)){
		alert("Pogrešan format za broj telefona!");
		e.preventDefault();
	}
	if(!emailValidation(email)){
		alert("Pogrešan format email-a!");
		e.preventDefault();
	}
}

function emailValidation(email){
	var pattern = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return pattern.test(email);	
}

function telValidation(tel){
	if(tel.length > 10)
		return false;
	return true;
}