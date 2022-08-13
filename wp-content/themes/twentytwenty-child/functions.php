<?php
    function ht_enqueue_styles() { 
      wp_enqueue_script('jquery');
      wp_enqueue_style( 'owl-style', get_stylesheet_directory_uri() . '/scss/owl.carousel.min.css' );
      wp_enqueue_script( 'owl-script', get_stylesheet_directory_uri() . '/js/owl.carousel.min.js' );
      wp_enqueue_script( 'custom-js', get_stylesheet_directory_uri() . '/js/custom.js' );
      wp_enqueue_style( 'child-style', get_stylesheet_directory_uri() . '/style.css' );
      wp_enqueue_style( 'home-style', get_stylesheet_directory_uri() . '/css/home.css' );
      wp_enqueue_style( 'responsive-style', get_stylesheet_directory_uri() . '/css/responsive.css' );

      wp_register_script('slick', 'https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.js', array('jquery'), '1.0.0'); // Custom scripts
wp_enqueue_script('slick'); // Enqueue it!
wp_register_script('slicknav', 'https://cdnjs.cloudflare.com/ajax/libs/SlickNav/1.0.10/jquery.slicknav.min.js', array('jquery'), '1.0.0'); // Custom scripts
wp_enqueue_script('slicknav'); // Enqueue it!
    }

    add_action( 'wp_enqueue_scripts', 'ht_enqueue_styles' );

    remove_filter( 'the_content', 'wpautop' );
remove_filter( 'the_excerpt', 'wpautop' );

register_nav_menus(
  array(
    'menu-1' => esc_html__( 'Primary', 'elation' ),
  )
);
?>