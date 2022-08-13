<?php
    function ht_enqueue_styles() { 
      wp_enqueue_script('jquery');
      wp_enqueue_style( 'owl-style', get_stylesheet_directory_uri() . '/scss/owl.carousel.min.css' );
      wp_enqueue_script( 'owl-script', get_stylesheet_directory_uri() . '/js/owl.carousel.min.js' );
      wp_enqueue_script( 'custom-js', get_stylesheet_directory_uri() . '/js/custom.js' );
      wp_enqueue_style( 'child-style', get_stylesheet_directory_uri() . '/style.css' );
      wp_enqueue_style( 'home-style', get_stylesheet_directory_uri() . '/css/home.css' );
      wp_enqueue_style( 'responsive-style', get_stylesheet_directory_uri() . '/css/responsive.css' );
      wp_enqueue_style( 'animation-style', get_stylesheet_directory_uri() . '/css/animate.css' );

      wp_register_script('slick', 'https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.js', array('jquery'), '1.0.0'); // Custom scripts
wp_enqueue_script('slick'); 
wp_register_script('slicknav', 'https://cdnjs.cloudflare.com/ajax/libs/SlickNav/1.0.10/jquery.slicknav.min.js', array('jquery'), '1.0.0'); // Custom scripts
wp_enqueue_script('slicknav'); 
    }

    add_action( 'wp_enqueue_scripts', 'ht_enqueue_styles' );

    remove_filter( 'the_content', 'wpautop' );
remove_filter( 'the_excerpt', 'wpautop' );

register_nav_menus(
  array(
    'menu-1' => esc_html__( 'Primary', 'elation' ),
  )
);

//Display latest 3 posts
function get_latest_news(){
  global $post;

  $args = array(
    'posts_per_page' => 3, /* how many post you need to display */
    'orderby' => 'post_date',
    'post_type' => 'post', /* your post type name */
    'post_status' => 'publish'
);

$content = '';

$query = new WP_Query($args);
$postCount = 0;
if ($query->have_posts()) :
  while ($query->have_posts()) : $query->the_post();

      if($postCount == 0){
        $content .= '<div class="blog-card blog-left selected">';
        $postCount++;
      } else if($postCount == 1){
        $content .= '<div class="blog-card blog-middle">';
        $postCount++;
      }else if($postCount == 2){
        $content .= '<div class="blog-card blog-right">';
        $postCount = 0;
      }
      $content .= '<a href="#">';
      $content .= '<div class="blog-img">';
      $image = wp_get_attachment_image_src( get_post_thumbnail_id( $post->ID ), 'single-post-thumbnail' );
      $content .= '<img src="'.$image[0].'" alt="Paper resources on a desk" />';
      $content .= '</div>';
      $content .= '<div class="blog-content">';
      $categories = get_the_category();
      $content .= '<p class="blog-category heading3"><span class="underline-yellow">' . esc_html( $categories[0]->name) . '</span></p>';
      $content .= '<h3 class="blog-title heading2">' . get_the_title() . '</h3>';
      $content .= '<p class="blog-date heading4">'. get_the_date('d.m.y').'</p>';
      $content .= '</div></a></div>';
    endwhile;
    wp_reset_postdata();
  endif; 
      return $content;

    }


add_shortcode('latest-news', 'get_latest_news');

   
?>