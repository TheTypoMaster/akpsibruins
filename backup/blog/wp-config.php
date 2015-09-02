<?php
/**
 * The base configurations of the WordPress.
 *
 * This file has the following configurations: MySQL settings, Table Prefix,
 * Secret Keys, WordPress Language, and ABSPATH. You can find more information
 * by visiting {@link http://codex.wordpress.org/Editing_wp-config.php Editing
 * wp-config.php} Codex page. You can get the MySQL settings from your web host.
 *
 * This file is used by the wp-config.php creation script during the
 * installation. You don't have to use the web site, you can just copy this file
 * to "wp-config.php" and fill in the values.
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'uclaakps_blog');

/** MySQL database username */
define('DB_USER', 'uclaakps_blog');

/** MySQL database password */
define('DB_PASSWORD', 'aupsilon');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         '%hn6?wSH#(&lSye-eBG]-{M*!&sQmGx#L2J +Nj/KSR7c8PjivUZ=DIS|U+4MEYB');
define('SECURE_AUTH_KEY',  '?+|s<mFa]3}b}oKG$6-)4p>W~cE+*#@lp&73#N7-#7d~}ua%QWFW+>QW{2_g>q`O');
define('LOGGED_IN_KEY',    '3!u,X]|%BZ>NAE.*F|g?.+$|88bt,+s9Gh!<heNA>QRp[p}kjry0py&@xd^c]rE7');
define('NONCE_KEY',        't,th>/D=6m%<A?ANn|2BGS1r51Jyv7)+~T+} |}c+v0jRr:KK>+-l-V}eu?E%Ua$');
define('AUTH_SALT',        'T~4|!q5 |)1OI&kk<L}4@SJC;:4yW$p6lexiV)|,MKQlxl?1]bzt+Y &*)W+Q2&s');
define('SECURE_AUTH_SALT', '}r#a0=&h38io,Y(97r|.h8t6gf2WCp2#AAykkr`S+r=Oj%:6}D>L>3)f[jaKhf,9');
define('LOGGED_IN_SALT',   '/?1dng+_6v#^ &EljE1z|iZW$]Q-o;4?==c3H-Wd5~ c~OOP6DYPg;v$FhZJgg8x');
define('NONCE_SALT',       'e]!-]UU8*<Pf/E^PH/M[&p|r3}_cz[-tk%3}v1$zK]O]J9RY3S.dF>Fav?Z}Vp@h');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each a unique
 * prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';

/**
 * WordPress Localized Language, defaults to English.
 *
 * Change this to localize WordPress. A corresponding MO file for the chosen
 * language must be installed to wp-content/languages. For example, install
 * de_DE.mo to wp-content/languages and set WPLANG to 'de_DE' to enable German
 * language support.
 */
define('WPLANG', '');

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
