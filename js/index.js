$('#document').ready(function(){
	$('#sign_in').click(function(){
		var username = $('#username').val();
		var email = $('#email').val();
		var password =$('#password').val();

		console.log("Username" + username +", email" + email + ",password" +password);
	});

	function show() {
		$('#myIframe').css("display","block");
	}

	// Validating Empty Field
function check_empty() {
if (document.getElementById('name').value == "" || document.getElementById('email').value == "" || document.getElementById('msg').value == "") {
alert("Fill All Fields !");
} else {
document.getElementById('form').submit();
alert("Form Submitted Successfully...");
}
}
//Function To Display Popup
function div_show() {
document.getElementById('abc').style.display = "block";
}
//Function to Hide Popup
function div_hide(){
document.getElementById('abc').style.display = "none";
}

});

$(window).load(function(){
      $("#header_navigation").sticky({ topSpacing: 0 });
});

$(window).load(function(){
      $("#footer_navigation").sticky({ bottomSpacing: 0 });
});