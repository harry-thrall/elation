jQuery(window).scroll(function () {
    if (jQuery(window).scrollTop() >= 100) {
		jQuery('.site-header').addClass('navbar-fixed-top');
	} else {
		jQuery('.site-header').removeClass('navbar-fixed-top');
	}
});

jQuery(document).ready(function() {

    jQuery('.hero-slider').slick({
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: false,
        dots: true,
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
        jQuery('body').addClass('no-scroll');
    } else {
        closeMenu();
    }
 });

 jQuery('.menu-close').on('click', function(){
closeMenu();
 });

 function closeMenu(){
    jQuery('.nav-menu').removeClass('opened');
    jQuery('body').removeClass('no-scroll');
    jQuery('.toggle').removeAttr('checked');
 }

});

$slickGreen = false;
    function greenSlider(){    
        if(jQuery(window).width() < 1201){
			console.log("small");
            if(!$slickGreen){
                jQuery(".product-slider").slick({
                    dots: false,
                    arrows: false,
                    slidesToShow: 3,
                    slidesToScroll: 1,
					responsive: [
						{
							breakpoint: 1200,
							settings: {
								slidesToShow: 2,
								slidesToScroll: 2,
								infinite: true,
								dots: true,
							}
						},
						{
							breakpoint: 800,
							settings: {
								slidesToShow: 1,
								slidesToScroll: 1,
								infinite: true,
								dots: true,
							}
						}
					]
                });
                $slickGreen = true;
            } else {
				jQuery(".product-slider")[0].slick.refresh();
			}
        } else if(jQuery(window).width() > 1201){
			console.log("bigger");
            if($slickGreen){
                jQuery('.product-slider').slick('unslick');
                $slickGreen = false;
            }
        }
    };

    jQuery(document).ready(function(){
        greenSlider();
    });
    jQuery(window).on('resize', function(){
         greenSlider();
    });