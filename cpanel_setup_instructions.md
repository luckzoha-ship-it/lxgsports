# cPanel Deployment & Database Setup Guide

Follow these steps to deploy your LXG Events Web application and connect it to a MySQL database on your cPanel hosting.

---

## Part 1: Deploying the Front-end Code

1. Log in to your **cPanel**.
2. Open the **File Manager** and navigate to your domain's root folder (usually `public_html` or a subdirectory).
3. Upload the generated `dist.zip` package (or the full workspace build).
4. Select the uploaded ZIP file and click **Extract** in the top menu.
5. Move the extracted files into the target folder so that `index.html` sits directly inside `public_html`.

---

## Part 2: Creating a MySQL Database in cPanel

1. In the cPanel dashboard, search for and open the **MySQL Database Wizard**.
2. **Step 1: Create A Database**
   * Enter a database name (e.g. `lxg_db`) and click *Next Step*.
3. **Step 2: Create Database Users**
   * Enter a username (e.g. `lxg_user`).
   * Generate a secure password. **Copy this password**; you will need it shortly.
   * Click *Create User*.
4. **Step 3: Add User to the Database**
   * Check the box for **ALL PRIVILEGES**.
   * Click *Make Changes* / *Next Step* to complete user setup.

---

## Part 3: Importing the Database Schema

1. Go back to your cPanel dashboard and open **phpMyAdmin**.
2. In the left-hand sidebar, click on your newly created database (e.g., `username_lxg_db`).
3. Click on the **Import** tab in the top navigation bar.
4. Click *Choose File* and select the `database/database.sql` file from your computer.
5. Scroll to the bottom and click **Import** (or **Go**).
6. Verify that the table `partner_submissions` appears under your database.

---

## Part 4: Configuring Connection Credentials

1. Open the **File Manager** in cPanel.
2. Go to the `api/` directory and edit the `config.php` file.
3. Replace the placeholder database settings with your active credentials:
   ```php
   define('DB_HOST', 'localhost'); // Usually localhost
   define('DB_NAME', 'yourcpaneluser_lxg_db'); // Prefixed database name
   define('DB_USER', 'yourcpaneluser_lxg_user'); // Prefixed user name
   define('DB_PASS', 'YOUR_COPIED_SECURE_PASSWORD'); // Copied password
   ```
4. Save the changes. Your contact form is now fully functional!
