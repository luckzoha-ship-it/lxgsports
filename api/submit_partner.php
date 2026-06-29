<?php
/**
 * Partner Application Submission Handler
 */

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *'); // Allow CORS for testing
header('Access-Control-Allow-Methods: POST');

require_once 'config.php';

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed.']);
    exit;
}

// Extract and sanitize inputs
$fullName = isset($_POST['fullName']) ? trim(strip_tags($_POST['fullName'])) : '';
$email = isset($_POST['email']) ? filter_var(trim($_POST['email']), FILTER_SANITIZE_EMAIL) : '';
$companyName = isset($_POST['companyName']) ? trim(strip_tags($_POST['companyName'])) : '';
$country = isset($_POST['country']) ? trim(strip_tags($_POST['country'])) : '';
$interest = isset($_POST['interest']) ? trim(strip_tags($_POST['interest'])) : '';
$message = isset($_POST['message']) ? trim(strip_tags($_POST['message'])) : '';
$agree = isset($_POST['agree']) ? filter_var($_POST['agree'], FILTER_VALIDATE_BOOLEAN) : false;

// Basic validation
if (empty($fullName) || empty($email) || empty($companyName) || empty($country) || empty($_POST['message'])) {
    http_response_code(400);
    echo json_encode(['error' => 'All fields are required.']);
    exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['error' => 'Invalid email address.']);
    exit;
}

if (!$agree) {
    http_response_code(400);
    echo json_encode(['error' => 'You must agree to the terms.']);
    exit;
}

try {
    // Database connection using PDO
    $dsn = "mysql:host=" . DB_HOST . ";dbname=" . DB_NAME . ";charset=utf8mb4";
    $options = [
        PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
        PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
        PDO::ATTR_EMULATE_PREPARES   => false,
    ];
    
    $pdo = new PDO($dsn, DB_USER, DB_PASS, $options);
    
    // Insert statement using prepared queries to prevent SQL injections
    $sql = "INSERT INTO partner_submissions (full_name, email, company_name, country, interest, message, created_at) 
            VALUES (:fullName, :email, :companyName, :country, :interest, :message, NOW())";
            
    $stmt = $pdo->prepare($sql);
    $stmt->execute([
        ':fullName' => $fullName,
        ':email' => $email,
        ':companyName' => $companyName,
        ':country' => $country,
        ':interest' => $interest,
        ':message' => $message
    ]);

    // Send email alert (optional)
    if (defined('NOTIFICATION_EMAIL') && filter_var(NOTIFICATION_EMAIL, FILTER_VALIDATE_EMAIL)) {
        $to = NOTIFICATION_EMAIL;
        $subject = EMAIL_SUBJECT;
        
        $emailContent = "New Partner Application Received:\n\n";
        $emailContent .= "Full Name: $fullName\n";
        $emailContent .= "Email: $email\n";
        $emailContent .= "Company: $companyName\n";
        $emailContent .= "Country: $country\n";
        $emailContent .= "Topic: $interest\n\n";
        $emailContent .= "Message:\n$message\n";
        
        $headers = "From: no-reply@" . $_SERVER['HTTP_HOST'] . "\r\n";
        $headers .= "Reply-To: $email\r\n";
        $headers .= "X-Mailer: PHP/" . phpversion();
        
        @mail($to, $subject, $emailContent, $headers);
    }
    
    echo json_encode(['success' => true, 'message' => 'Application submitted successfully.']);
    
} catch (PDOException $e) {
    // Log error details privately and return a generic error message to client
    error_log("Database Insertion Error: " . $e->getMessage());
    
    // If the table doesn't exist, we notify the user they need to run the SQL migration
    if ($e->getCode() == '42S02') {
        http_response_code(500);
        echo json_encode(['error' => 'Database table partner_submissions not found. Please import the SQL schema.']);
    } else {
        http_response_code(500);
        echo json_encode(['error' => 'Internal server error occurred. Please try again later.']);
    }
}
