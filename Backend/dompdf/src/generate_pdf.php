<?php
session_start();
if (!isset($_SESSION['user_id'])) {
    header("Location: login.html");
    exit;
}
require 'config.php';

$user_id = $_SESSION['user_id'];
$stmt = $conn->prepare("SELECT * FROM resumes WHERE user_id = ?");
$stmt->execute([$user_id]);
$resume = $stmt->fetch(PDO::FETCH_ASSOC);

if (!$resume) {
    die("No resume data found. Please save your resume first.");
}

// try local dompdf folder (no composer)
$dompdf_path = __DIR__ . '/dompdf/autoload.inc.php';
if (!file_exists($dompdf_path)) {
    die("dompdf not found. Put dompdf here: C:\\xampp\\htdocs\\lab 3\\dompdf\\");
}
require_once $dompdf_path;

use Dompdf\Dompdf;

$dompdf = new Dompdf();

$html = "
<h1>".htmlspecialchars($resume['full_name'])."</h1>
<p><strong>Phone:</strong> ".htmlspecialchars($resume['phone'])."</p>
<p><strong>Address:</strong> ".htmlspecialchars($resume['address'])."</p>
<h3>Summary</h3><p>".nl2br(htmlspecialchars($resume['summary']))."</p>
<h3>Education</h3><p>".nl2br(htmlspecialchars($resume['education']))."</p>
<h3>Experience</h3><p>".nl2br(htmlspecialchars($resume['experience']))."</p>
<h3>Skills</h3><p>".nl2br(htmlspecialchars($resume['skills']))."</p>
";

$dompdf->loadHtml($html);
$dompdf->setPaper('A4', 'portrait');
$dompdf->render();
$dompdf->stream("resume.pdf", ["Attachment" => true]);
?>
