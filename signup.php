<?php
$servername = "localhost";
$username = "root"; // Your MySQL username
$password = ""; // Your MySQL password
$dbname = "art_gallery"; // Your database name

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = $_POST['username'];
    $password = $_POST['password'];
    $mobile = $_POST['mobile'];
    $email = $_POST['email'];

    $sql = "INSERT INTO users (username, password1, mobile, email) VALUES ('$username', '$password', '$mobile', '$email')";

    if ($conn->query($sql) === TRUE) {
        header('Location: confirmation_page.php'); // or 'signup.php' if you want to redirect back to the same page
        exit();
        
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
}

$conn->close();
?>



