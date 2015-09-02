<?php

get_header();
?>

<?php if (have_posts()) : while (have_posts()) : the_post(); ?>

<div <?php post_class() ?> id="post-<?php the_ID(); ?>">
	 <h2><a href="<?php the_permalink() ?>" rel="bookmark"><?php the_title(); ?></a></h2>

	<div class="storycontent">
		<?php the_content(__('(more...)')); ?>
	</div>
	
<div class="meta"><br /><?php _e("Filed under:"); ?> <?php the_category(',') ?> &#8212; <?php the_tags(__('Tags: '), ', ', ' &#8212; '); ?> <?php the_author() ?> @ <?php the_date(); ?> <?php the_time() ?> <?php edit_post_link(__('Edit This')); ?></div>

	<div class="feedback">
		<?php wp_link_pages(); ?>
		<?php //comments_popup_link(__('Comments (0)'), __('Comments (1)'), __('Comments (%)')); ?>
	</div>

</div>

<?php comments_template(); // Get wp-comments.php template ?>

<?php endwhile; else: ?>
<p><?php _e('Sorry, no posts matched your criteria.'); ?></p>
<?php endif; ?>

<?php posts_nav_link(' &#8212; ', __('&laquo; Newer Posts'), __('Older Posts &raquo;')); ?>

<?php get_footer(); ?>
