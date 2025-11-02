<?php
// Lab Task 3 - Save Resume
session_start();
if (!isset($_SESSION['user_id'])) {
    header("Location: login.html");
    exit;
}
require 'config.php';

$user_id   = $_SESSION['user_id'];
$full_name = $_POST['full_name'] ?? '';
$phone     = $_POST['phone'] ?? '';
$address   = $_POST['address'] ?? '';
$summary   = $_POST['summary'] ?? '';
$education = $_POST['education'] ?? '';
$experience= $_POST['experience'] ?? '';
$skills    = $_POST['skills'] ?? '';

// check existing
$stmt = $conn->prepare("SELECT id FROM resumes WHERE user_id = ?");
$stmt->execute([$user_id]);

if ($stmt->rowCount() > 0) {
    $upd = $conn->prepare("UPDATE resumes 
        SET full_name=?, phone=?, address=?, summary=?, education=?, experience=?, skills=? 
        WHERE user_id=?");
    $upd->execute([$full_name, $phone, $address, $summary, $education, $experience, $skills, $user_id]);
} else {
    $ins = $conn->prepare("INSERT INTO resumes (user_id, full_name, phone, address, summary, education, experience, skills) 
        VALUES (?,?,?,?,?,?,?,?)");
    $ins->execute([$user_id, $full_name, $phone, $address, $summary, $education, $experience, $skills]);
}

echo "<script>alert('Resume saved successfully.'); window.location='resume_form.php';</script>";
?>
