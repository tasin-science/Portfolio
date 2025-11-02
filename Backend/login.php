<?php
// Lab Task 3 - Login
session_start();
require 'config.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $email = trim($_POST['email'] ?? '');
    $pass  = $_POST['password'] ?? '';

    $stmt = $conn->prepare("SELECT * FROM users WHERE email = ?");
    $stmt->execute([$email]);
    $user = $stmt->fetch(PDO::FETCH_ASSOC);

    if ($user && password_verify($pass, $user['password'])) {
      $_SESSION['user_id'] = $user['id'];
      $_SESSION['user_name'] = $user['name'];
      header("Location: resume_form.php");
      exit;
    } else {
      echo "<script>alert('Wrong email or password!'); window.location='login.html';</script>";
      exit;
    }
} else {
    header("Location: login.html");
    exit;
}
?>
