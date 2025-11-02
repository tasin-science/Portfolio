<?php
// Lab Task 3 - Register
require 'config.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $name  = trim($_POST['name'] ?? '');
    $email = trim($_POST['email'] ?? '');
    $pass  = $_POST['password'] ?? '';

    // check duplicate email
    $check = $conn->prepare("SELECT id FROM users WHERE email = ?");
    $check->execute([$email]);

    if ($check->rowCount() > 0) {
        echo "<script>alert('This email is already registered!'); window.location='registration.html';</script>";
        exit;
    }

    $hash = password_hash($pass, PASSWORD_BCRYPT);

    $stmt = $conn->prepare("INSERT INTO users (name, email, password) VALUES (?, ?, ?)");
    $stmt->execute([$name, $email, $hash]);

    echo "<script>alert('Registration successful. Please login now.'); window.location='login.html';</script>";
} else {
    header("Location: registration.html");
    exit;
}
?>
