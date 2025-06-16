<?php
// 1. Connect to MySQL
$host = 'localhost';       // This is usually fine
$db   = 'jewelry_shop';    // Your database name
$user = 'root';            // Your MySQL username (often "root")
$pass = '';                // Your MySQL password (empty if using XAMPP default)

// Connect to MySQL
$conn = new mysqli($host, $user, $pass, $db);

// Check if connection failed
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// 2. Get the form values safely
$orderId = $conn->real_escape_string(trim($_POST['orderId']));
$email = $conn->real_escape_string(trim($_POST['email']));
$message = $conn->real_escape_string(trim($_POST['message']));

// 3. Save the data into the database
$sql = "INSERT INTO order_requests (order_id, email, message) 
        VALUES ('$orderId', '$email', '$message')";

// 4. Show message to the user
if ($conn->query($sql) === TRUE) {
    echo "<h2>✅ Thank you!</h2>";
    echo "<p>We got your request. We'll reply to <strong>$email</strong> soon.</p>";
} else {
    echo "❌ Error: " . $conn->error;
}

// Close connection
$conn->close();
?>
