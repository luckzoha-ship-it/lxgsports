-- LXG Events Partner Submissions Table Schema

CREATE DATABASE IF NOT EXISTS `lxg_events_db` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE `lxg_events_db`;

CREATE TABLE IF NOT EXISTS `partner_submissions` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `full_name` VARCHAR(100) NOT NULL,
  `email` VARCHAR(150) NOT NULL,
  `company_name` VARCHAR(150) NOT NULL,
  `country` VARCHAR(100) NOT NULL,
  `interest` VARCHAR(100) NOT NULL,
  `message` TEXT NOT NULL,
  `created_at` DATETIME NOT NULL,
  INDEX (`email`),
  INDEX (`created_at`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
