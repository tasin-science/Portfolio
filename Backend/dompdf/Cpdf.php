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

// -----------------------------
// try to load dompdf SAFELY
// -----------------------------
$dompdf_ready = false;
$base = __DIR__ . '/dompdf';
$autoload = $base . '/autoload.inc.php';

if (file_exists($autoload)) {
    require_once $autoload;
    // we only continue if BOTH classes exist
    if (class_exists('Dompdf\\Dompdf') && class_exists('Dompdf\\Cpdf')) {
        $dompdf_ready = true;
    }
}

// -----------------------------
// build HTML (used in both cases)
// -----------------------------
$html = "
<h1>".htmlspecialchars($resume['full_name'])."</h1>
<p><strong>Phone:</strong> ".htmlspecialchars($resume['phone'])."</p>
<p><strong>Address:</strong> ".htmlspecialchars($resume['address'])."</p>
<h3>Summary</h3><p>".nl2br(htmlspecialchars($resume['summary']))."</p>
<h3>Education</h3><p>".nl2br(htmlspecialchars($resume['education']))."</p>
<h3>Experience</h3><p>".nl2br(htmlspecialchars($resume['experience']))."</p>
<h3>Skills</h3><p>".nl2br(htmlspecialchars($resume['skills']))."</p>
";

// -----------------------------
// if dompdf is complete → make real PDF
// -----------------------------
if ($dompdf_ready) {
    $dompdf = new Dompdf\Dompdf();
    $dompdf->loadHtml($html);
    $dompdf->setPaper('A4', 'portrait');
    $dompdf->render();
    $dompdf->stream("resume.pdf", ["Attachment" => true]);
    exit;
}

// -----------------------------
// fallback: show printable page
// -----------------------------
?>
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Resume (Print to PDF)</title>
  <style>
    body { font-family: Arial, sans-serif; max-width: 720px; margin: 25px auto; }
    .warn { background: #fee2e2; border:1px solid #f87171; padding:10px 12px; margin-bottom:15px; border-radius:6px; }
    @media print { .warn, .print-btn { display:none; } }
  </style>
</head>
<body>
  <div class="warn">
    Your dompdf folder is incomplete (class <code>Dompdf\Cpdf</code> is missing), so we can’t generate a real PDF right now.<br>
    Click the button → choose <b>Print</b> → <b>Save as PDF</b>.
  </div>
  <button class="print-btn" onclick="window.print()">Print / Save as PDF</button>
  <?php echo $html; ?>
</body>
</html>
