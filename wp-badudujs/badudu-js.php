<?php
/*
Plugin Name: Badudu JS
Plugin URI: http://github.com/lantip/badudu.js/
Description: Adding Badudu.js in wordpress blog
Version: 1.0
Author: Rony Lantip
Author URI: http://lantip.net
License: ABRMS License
*/

add_action( 'init', 'badudu_css_script' );
add_action( 'wp_enqueue_scripts', 'badudu_js_script' );
function badudu_js_script() {
    //wp_enqueue_script('jquery');

    wp_register_script( 'badudu-js', get_bloginfo('wpurl').'/wp-content/plugins/wp-badudujs' . '/badudu.min.js', array(),'version 1.0',true  );
    wp_enqueue_script( 'badudu-js' );

}
function badudu_css_script(){

    wp_register_style( 'badudujs-css', get_bloginfo('wpurl').'/wp-content/plugins/wp-badudujs' . '/badudujs.css',array(),'', 'screen' );
    wp_enqueue_style( 'badudujs-css' );
}