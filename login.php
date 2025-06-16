<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);
// Step 1: Connect to the database (DB name = testdb)
$conn = new mysqli("localhost", "root", "", "testdb");

// Check if connection worked
if ($conn->connect_error) {
    die("❌ Connection failed: " . $conn->connect_error);
}

// Step 2: Check if form was submitted using POST
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    // Step 3: Get email and password entered by user
    $email = trim($_POST['email']);
    $password = trim($_POST['password']);

    // Step 4: Prepare SQL to check if user exists
    // Use prepared statements to prevent SQL injection
    $stmt = $conn->prepare("SELECT * FROM users WHERE email = ? AND password = ?");
    $stmt->bind_param("ss", $email, $password);  // Bind input values safely

    // Step 5: Execute SQL
    $stmt->execute();

    // Step 6: Get result of query
    $result = $stmt->get_result();

    // Step 7: Check if a matching user was found
    if ($result->num_rows === 1) {
        echo "✅ Login successful.";

        // Step 8: Insert this login event into logins table
        $logStmt = $conn->prepare("INSERT INTO logins (email, login_time) VALUES (?, NOW())");
        $logStmt->bind_param("s", $email);
        $logStmt->execute();
        $logStmt->close();

    } else {
        echo "❌ Invalid credentials.";
    }

    // Step 9: Clean up
    $stmt->close();
}

// Step 10: Close DB connection
$conn->close();
?>
