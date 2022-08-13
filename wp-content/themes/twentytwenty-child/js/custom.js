//Add class to navbar once user starts scrolling
jQuery(window).scroll(function () {
  if (jQuery(window).scrollTop() >= 100) {
    jQuery(".site-header").addClass("navbar-fixed-top");
  } else {
    jQuery(".site-header").removeClass("navbar-fixed-top");
  }
});

//Add animate class when window reaches the fold
function isScrolledIntoView(elem) {
    var docViewTop = jQuery(window).scrollTop() * 1.5 + 50;
    var docViewBottom = docViewTop + jQuery(window).height();
    var elemTop = jQuery(elem).offset().top * 1.5;
    var elemBottom = elemTop + jQuery(elem).height();
    return ((elemTop <= docViewBottom ) && elemBottom >= docViewTop );
}

jQuery(document).ready(function () {

	setTimeout(function(){
		
		jQuery('.animate-on-load').addClass('animate-complete');
		}, 500);
			
		jQuery('.animate').addClass('out-view');	
});

jQuery(window).scroll(function () {"use strict";
	
  jQuery('.animate').each(function() {   
      if (isScrolledIntoView(this) === true) {	
      
          jQuery(this).removeClass('out-view');
          jQuery(this).addClass('animate-complete'); 
      }
   });
   
});
//Animation Ends

//Slick Sliders
$slickActive = false;
function greenSlider() {
  if (jQuery(window).width() < 1201) {
    if (!$slickActive) {
      jQuery(".product-slider").not('.slick-initialized').slick({
        dots: false,
        arrows: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
              dots: true,
            },
          },
          {
            breakpoint: 800,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: true,
            },
          },
        ],
      });
      $slickActive = true;
    } else {
      jQuery(".product-slider")[0].slick.refresh();
    }
  } else if (jQuery(window).width() > 1201) {
    if ($slickActive) {
      jQuery(".product-slider").slick("unslick");
      $slickActive = false;
    }
  }
}

jQuery(document).ready(function () {
  jQuery(".hero-slider").slick({
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    dots: true,
  });

  jQuery(".testimonials-slider").slick({
    autoplay: true,
    autoplaySpeed: 7000,
    arrows: false,
    dots: true,
  });

  jQuery(".clients-slider").slick({
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    prevArrow: '<i class="fas fa-chevron-left"></i>',
    nextArrow: '<i class="fas fa-chevron-right"></i>',
    dots: true,
    mobileFirst: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 980,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 540,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  });

  greenSlider();

});

//Open and Close the navigation menu

jQuery(document).ready(function () {
  jQuery(".toggle").change(function () {
    console.log("changed");
    if (this.checked) {
      jQuery(".nav-menu").addClass("opened animate-complete");
      jQuery("body").addClass("no-scroll");
    } else {
      closeMenu();
    }
  });

  jQuery(".menu-close").on("click", function (e) {
    e.preventDefault();
    closeMenu();
  });

  jQuery(".menu-overlay").on("click", function () {
    closeMenu();
  });

  function closeMenu() {
    jQuery(".nav-menu").removeClass("opened animate-complete");
    jQuery("body").removeClass("no-scroll");
    jQuery(".toggle").removeAttr("checked");
  }




//Transition delay menu items
$menuList = jQuery('#primary-menu li').toArray();
$delay = 0.3;
$socialDelay = $delay * ($menuList.length + 1);
for(i=0; i<$menuList.length;i++){
	$delay = 0.3;
	$delay = $delay * (i+1);
	jQuery($menuList[i]).css('transition-delay',  $delay + 's');
}

jQuery('.nav-menu .social-links').css('transition-delay', $socialDelay +'s');


//On hover add class to blog section
jQuery('.blog-card').hover(
	function(){
	jQuery(this).addClass('selected').siblings().removeClass('selected');
}, function(){
	jQuery(this).removeClass('selected').siblings().removeClass('selected');
});

});


//Create slick slider on resize

jQuery(window).on("resize", function () {
	greenSlider();
  });