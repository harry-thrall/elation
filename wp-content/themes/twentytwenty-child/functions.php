<?php
    function ht_enqueue_styles() { 
      wp_enqueue_script('jquery');
      wp_enqueue_style( 'child-style', get_stylesheet_directory_uri() . '/style.css' );
      wp_enqueue_style( 'home-style', get_stylesheet_directory_uri() . '/css/home.css' );
      wp_enqueue_style( 'owl-style', get_stylesheet_directory_uri() . '/scss/owl.carousel.min.css' );
      wp_enqueue_script( 'owl-script', get_stylesheet_directory_uri() . '/js/owl.carousel.min.js' );
      wp_enqueue_script( 'custom-js', get_stylesheet_directory_uri() . '/js/custom.js' );
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