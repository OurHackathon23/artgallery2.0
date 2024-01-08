
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Confirmation</title>
<link rel="stylesheet" href="assest/css/signup2.css">
</head>
<body>

<div class="box">
    <h1>Signup Successful!</h1>
</div>

</body>
</html>
<?php
session_start();

if(isset($_SESSION['signup_success'])) {
    unset($_SESSION['signup_success']); // clear the session variable
} else {
    header('Location: login.html'); // Redirect to login page if accessed without successful signup
    exit();
}
?>
