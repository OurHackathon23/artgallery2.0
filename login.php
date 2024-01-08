<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "art_gallery";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = $_POST["username"];
    $password = $_POST["password"];

    // Validate credentials against the database
    $sql = "SELECT * FROM users WHERE username = '$username' AND password1 = '$password'";
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        echo "Login successful!";
        header("Location: profile_dashbord.html");
        exit();  // Important to prevent further execution
    } else {
        echo "Invalid username or password.";
    }
}
?>  