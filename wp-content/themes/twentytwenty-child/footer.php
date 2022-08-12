<?php
/**
 * The template for displaying the footer
 *
 * Contains the closing of the #content div and all content after.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package Twentytwentychild
 */

?>


<div class="footer-block">
	<div class="row-container">
		<div class="footer-grid">
<div class="footer-logo">
	<img src="/wp-content/uploads/2022/08/elation-brandmark-logo.png" alt="Elated icon"/>
</div>

<div class="footer-item footer-products">
	<p class="footer-title">Products</p>
	<ul class="footer-list">
		<li><a href="#">Growth Framework</a></li>
		<li><a href="#">Growth Academy</a></li>
		<li><a href="#">Growth Club</a></li>
	</ul>
</div>
<div class="footer-item footer-company">
	<p class="footer-title">Company</p>
	<ul class="footer-list">
		<li><a href="#">About</a></li>
		<li><a href="#">News &amp; Insights</a></li>
		<li><a href="#">Growth Club</a></li>
	</ul>
</div>
<div class="footer-item footer-help">
	<p class="footer-title">Help</p>
	<ul class="footer-list">
		<li><a href="#">FAQ</a></li>
		<li><a href="#">Contact</a></li>
		<li><a href="#">Resources</a></li>
	</ul>
</div>
<div class="footer-item footer-social">
	<div class="social-links">
	<a href="#"><i class="fab fa-facebook-f"></i></a>
	<a href="#"><i class="fab fa-twitter"></i></a>
	<a href="#"><i class="fab fa-linkedin-in"></i></a>
	<a href="#"><i class="fab fa-instagram"></i></a>
	</div>
	<p class="newsletter-para">Subscribe to our newsletter and stay in the loop.</p>
	<a href="#" class="learn-more">Sign Up <i class="fas fa-arrow-right" aria-hidden="true"></i></a>
</div>
<div class="footer-row">
			<p class="footer-copy">&copy; <?php echo date('Y'); ?> Elation. <br/> All rights reserved.</p>
			<a href="#"><span class="underline-yellow underline-green">Terms &amp; Conditions</span></a>
			<a href="#"><span class="underline-yellow underline-green">Privacy Policy</span></a>
			<a href="#"><span class="underline-yellow underline-green">Cookie Policy</span></a>
		</div>
</div>		
	</div>
</div>
<!-- #page -->

<?php wp_footer(); ?>

</body>
</html>
