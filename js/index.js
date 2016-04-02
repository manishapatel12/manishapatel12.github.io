$(window).load(function(){
      $("#header_navigation").sticky({ topSpacing: 0 });
});

$(window).load(function(){
      $("#footer_navigation").sticky({ bottomSpacing: 0 });
});

$(function(){
  var $filterSelect = $('#select_cuisine'),
      $container = $('#Container_cuisine');
  
  $container.mixItUp();
  
  $filterSelect.on('change', function(){
    $container.mixItUp('filter', this.value);
  }); 
});

function modalImg(elemt){
   $('#modal_cuisine_img').attr("src", elemt.src);
   $('#myModalTitle').text(elemt.name);
   $('#myModalDesc').text(elemt.alt);
   $('#myModalLabel').text(elemt.className);
}  

//  above all working code

// $('#sign_in').click(function(){
// 		var username = $('#username').val();
// 		var email = $('#email').val();
// 		var password =$('#passwd').val();

// 		console.log("Username" + username +", email" + email + ",password" +password);
// });

// 	var formData = $(".sign_up_form").formToJSON();
// 	console.log(formData);