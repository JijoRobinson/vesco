/*======================
        SERVICES
======================*/

$(function(){
	//animate on scroll
	new WOW().init();
});

/*======================
        WORK
======================*/
$(function(){
	$('#work').magnificPopup({
  delegate: 'a', // child items selector, by clicking on it popup will open
  type: 'image',
  gallery:{
  	enabled:true
  }
});

  // other options
});


/*======================
        TEAM
======================*/

$(function(){
  $('#team-members').owlCarousel(
  {
    items:3,
    autoplay:true,
    smartSpeed:700,
    loop:true,
    autoplayHoverPause:true
  });
});


/*======================
        TESTIMONIALS
======================*/

$(function(){
  $('#customers-testimonials').owlCarousel(
    {
    items:1,
    autoplay:true,
    smartSpeed:700,
    loop:true,
    autoplayHoverPause:true
  });
});


/*======================
        COUNTER
======================*/

$(function(){
  $('.counter').counterUp({
    delay:10,
    time:2000
  });
});



/*======================
        NAVIGATION
======================*/

$(function(){
  $(window).scroll(function(){

    if($(this).scrollTop()<50){
      //hide nav
      $("nav").removeClass("vesco-top-nav");
    }
    else{
      //show nav
       $("nav").addClass("vesco-top-nav");
    }
  });
});


// Smooth scrolling

// $(function(){
//   $("a.smooth-scroll").click(function(event){

//     event.preventDefault();

//     //get/reurn id like #about, #work
//     var section=$(this).att("href");

//     $("html, body").animate({
//       scrollTop: $(section).offset().top - 64
//     },1250);
//   });
// });

//Close mobile menu on click

$(function(){
  $(".navbar-collapse ul li a").on("click touch", function(){
    $(".navbar-toggle").click();
});
  });
