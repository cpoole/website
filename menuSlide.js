var main= function() {
  /* Push the body and the nav over by 285px over */
  var opened = false; 
  $('.icon-menu').click(function() {
    if(opened==false){
      opened = true; 
      $('.menu').animate({
        top: "0px"
      }, 200);

      $('body').animate({
        top: "315px"
      }, 200);
    }
    else{
      opened = false;
      $('.menu').animate({
        top: "-315px"
      }, 200);

      $('body').animate({
        top: "0px"
      }, 200);
    }
  });
 
  /* Then push them back */
  $('.icon-close').click(function() {
    opened = false; 
    $('.menu').animate({
      top: "-315px"
    }, 200);

    $('body').animate({
      top: "0px"
   }, 200);
 });
};

$(document).ready(main);
