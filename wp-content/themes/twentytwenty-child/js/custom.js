jQuery(window).scroll(function () {
    if (jQuery(window).scrollTop() >= 100) {
		jQuery('.site-header').addClass('navbar-fixed-top');
	} else {
		jQuery('.site-header').removeClass('navbar-fixed-top');
	}
});

jQuery(document).ready(function() {

    jQuery('.owl-carousel.hero-slider').owlCarousel({
         loop:true,
         autoplay:true,
         autoplaySpeed:100,
         autoplayTimeout:7000,
         autoplayHoverPause:true,
         stagePadding:0,
         dots:true,
         responsiveClass:true,
         responsive:{
 
         300:{
         items:1,
         },
 
         }
     });

     jQuery('.owl-carousel.clients-slider').owlCarousel({
		loop:true,
		autoplay:true,
		autoplaySpeed:100,
		autoplayTimeout:7000,
		autoplayHoverPause:true,
		stagePadding:0,
		dots:true,
        nav: true,
		navText: ['<i class="fas fa-chevron-left"></i>','<i class="fas fa-chevron-right"></i>'],
		responsiveClass:true,
		responsive:{

		300:{
		items:1,
		},
		
		540:{
		    items:2,
		},
		
		768:{
		    items: 2,
		},
			
			980:{
				items:3,
			},
		
		1200:{
		    items: 4,
		}

		}
	});
 });

 jQuery(document).ready(function() {
 jQuery('.toggle').change(function(){
    console.log('changed');
    if(this.checked){
        jQuery('.nav-menu').addClass('opened');
    } else {
        closeMenu();
    }
 });

 jQuery('.menu-close').on('click', function(){
closeMenu();
 });

 function closeMenu(){
    jQuery('.nav-menu').removeClass('opened');
    jQuery('.toggle').removeAttr('checked');
 }

});
 