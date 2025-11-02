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

// try to load dompdf ONLY if the files really exist
$dompdf_loaded = false;
$autoload_file = __DIR__ . '/dompdf/autoload.inc.php';
$autoloader_php = __DIR__ . '/dompdf/src/Autoloader.php';

if (file_exists($autoload_file) && file_exists($autoloader_php)) {
    require_once $autoload_file;
    if (class_exists('Dompdf\\Dompdf')) {
        $dompdf_loaded = true;
    }
}

$html = "
<h1>".htmlspecialchars($resume['full_name'])."</h1>
<p><strong>Phone:</strong> ".htmlspecialchars($resume['phone'])."</p>
<p><strong>Address:</strong> ".htmlspecialchars($resume['address'])."</p>
<h3>Summary</h3><p>".nl2br(htmlspecialchars($resume['summary']))."</p>
<h3>Education</h3><p>".nl2br(htmlspecialchars($resume['education']))."</p>
<h3>Experience</h3><p>".nl2br(htmlspecialchars($resume['experience']))."</p>
<h3>Skills</h3><p>".nl2br(htmlspecialchars($resume['skills']))."</p>
";

if ($dompdf_loaded) {
    $dompdf = new Dompdf\Dompdf();
    $dompdf->loadHtml($html);
    $dompdf->setPaper('A4', 'portrait');
    $dompdf->render();
    $dompdf->stream("resume.pdf", ["Attachment" => true]);
    exit;
}

// fallback: show printable HTML
?>
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Resume (Print to PDF)</title>
  <style>
    body { font-family: Arial, sans-serif; max-width: 700px; margin: 30px auto; }
    .note { background: #fee2e2; border: 1px solid #f43f5e; padding: 10px; margin-bottom: 15px; }
    @media print { .note, .print-btn { display: none; } }
  </style>
</head>
<body>
  <div class="note">
    dompdf is not fully installed.<br>
    Click the button below → choose <b>Print</b> → <b>Save as PDF</b>.
  </div>
  <button class="print-btn" onclick="window.print()">Print / Save as PDF</button>
  <?php echo $html; ?>
</body>
</html>
