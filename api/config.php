<?php
/**
 * Database Configurations for LXG Events Partner Portal
 */

define('DB_HOST', 'localhost');
define('DB_NAME', 'lxg_events_db');
define('DB_USER', 'lxg_db_user');
define('DB_PASS', 'DB_PASSWORD_HERE');

// Error reporting settings
error_reporting(E_ALL);
ini_set('display_errors', 0);
ini_set('log_errors', 1);

// Optional Email settings (if you want to be notified on submit)
define('NOTIFICATION_EMAIL', 'admin@yourdomain.com');
define('EMAIL_SUBJECT', 'New Partner Submission - LXG Events');
