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

function modalImg(){
  console.log("hello");
}  