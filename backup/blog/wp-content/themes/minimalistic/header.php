<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" <?php language_attributes(); ?>>

<head profile="http://gmpg.org/xfn/11">
	<meta http-equiv="Content-Type" content="<?php bloginfo('html_type'); ?>; charset=<?php bloginfo('charset'); ?>" />

	<title><?php wp_title('&laquo;', true, 'right'); ?> <?php bloginfo('name'); ?></title>

	<style type="text/css" media="screen">
		@import url( <?php bloginfo('stylesheet_url'); ?> );
	</style>
	
	<link rel="shortcut icon" href="favicon.ico" />


	<link rel="pingback" href="<?php bloginfo('pingback_url'); ?>" />
	<?php wp_get_archives('type=monthly&format=link'); ?>
	<?php //comments_popup_script(); // off by default ?>
	<?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>


<div id="header">
<h1><?php bloginfo('name'); ?></h1>


<div id="header_ad">
	<?php bloginfo('description'); ?>	
</div>

<div id="menu">
  <ul id="nav">
   <li><a href="<?php echo get_settings('home'); ?>/" title="Home">Home</a></li>
<?php wp_list_pages('title_li=' . __('')); ?>
   
  </ul>
 </div>
</div>

<div id="content">
<div id="left">

