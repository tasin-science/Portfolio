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
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Lab Task 3 | Resume Form</title>
  <style>
    :root{
      --bg: #0f172a;
      --panel: rgba(15,23,42,.35);
      --accent: #38bdf8;
      --accent-soft: rgba(56,189,248,.15);
    }
    *{ box-sizing: border-box; font-family: "Segoe UI", sans-serif; }
    body{
      margin:0;
      min-height:100vh;
      background: radial-gradient(circle at top, #020617 0%, #0f172a 50%, #020617 100%);
      color: #e2e8f0;
      display:flex;
      flex-direction:column;
    }
    header{
      padding: 14px 40px;
      display:flex;
      align-items:center;
      justify-content:space-between;
      background: rgba(2,6,23,.15);
      backdrop-filter: blur(4px);
      border-bottom: 1px solid rgba(148,163,184,.22);
    }
    .brand{
      font-weight: 700;
      letter-spacing: .05em;
    }
    .brand small{ font-weight:400; opacity:.5; font-size:.68rem; }
    .user{ font-size:.8rem; opacity:.85; }
    .wrap{
      display:flex;
      gap:22px;
      padding: 22px 40px 35px;
      flex:1;
    }
    .form-card{
      background: rgba(15,23,42,.35);
      border: 1px solid rgba(148,163,184,.15);
      border-radius: 16px;
      padding: 18px 18px 18px;
      flex: 1.4;
      animation: slide .5s ease;
    }
    .preview-card{
      background: rgba(15,23,42,.12);
      border: 1px solid rgba(148,163,184,.05);
      border-radius: 16px;
      padding: 16px;
      flex: .8;
    }
    @keyframes slide {
      from { opacity: 0; transform: translateY(25px); }
      to { opacity: 1; transform: translateY(0); }
    }
    h2{ margin-top:0; font-size:1rem; }
    label{ font-size:.72rem; display:block; margin-bottom:4px; }
    input, textarea{
      width:100%;
      background: rgba(2,6,23,.3);
      border: 1px solid rgba(148,163,184,.15);
      border-radius: 10px;
      color: #e2e8f0;
      margin-bottom: 12px;
      padding: 8px 10px;
      outline:none;
      transition: .15s;
    }
    input:focus, textarea:focus{
      border: 1px solid rgba(56,189,248,.7);
      box-shadow: 0 0 0 1px rgba(56,189,248,.12);
    }
    textarea{ min-height: 80px; resize: vertical; }
    .btn-row{
      display:flex;
      gap:10px;
      margin-top:8px;
    }
    .btn{
      background: linear-gradient(130deg, #38bdf8, #0ea5e9);
      border: none;
      padding: 8px 14px;
      border-radius: 999px;
      color: #020617;
      font-weight: 600;
      cursor:pointer;
      transition: .1s;
    }
    .btn:hover{ transform: translateY(-1px); }
    .btn-secondary{
      background: rgba(15,23,42,.4);
      border: 1px solid rgba(148,163,184,.3);
      color: #e2e8f0;
    }
    .preview-block{
      background: rgba(15,23,42,.15);
      border: 1px solid rgba(148,163,184,.05);
      border-radius: 12px;
      padding: 8px 10px 10px;
      margin-bottom: 8px;
    }
    .title-sm{ font-size:.7rem; text-transform:uppercase; letter-spacing:.04em; opacity:.6; }
    .logout{
      font-size:.7rem;
      color:#f43f5e;
      text-decoration:none;
    }
  </style>
</head>
<body>
  <header>
    <div class="brand">
      Lab Task 3
      <small> • Portfolio / Resume Generator</small>
    </div>
    <div class="user">
      Logged in as: <strong><?php echo htmlspecialchars($_SESSION['user_name'] ?? 'User'); ?></strong>
      &nbsp; | &nbsp;
      <a class="logout" href="login.html" onclick="return confirm('Logout?')">Logout</a>
    </div>
  </header>

  <div class="wrap">
    <div class="form-card">
      <h2>Resume information</h2>
      <form action="save_resume.php" method="POST">
        <label>Full Name</label>
        <input type="text" name="full_name" value="<?php echo htmlspecialchars($resume['full_name'] ?? ''); ?>">

        <label>Phone</label>
        <input type="text" name="phone" value="<?php echo htmlspecialchars($resume['phone'] ?? ''); ?>">

        <label>Address</label>
        <input type="text" name="address" value="<?php echo htmlspecialchars($resume['address'] ?? ''); ?>">

        <label>Summary</label>
        <textarea name="summary"><?php echo htmlspecialchars($resume['summary'] ?? ''); ?></textarea>

        <label>Education</label>
        <textarea name="education"><?php echo htmlspecialchars($resume['education'] ?? ''); ?></textarea>

        <label>Experience</label>
        <textarea name="experience"><?php echo htmlspecialchars($resume['experience'] ?? ''); ?></textarea>

        <label>Skills (comma separated)</label>
        <textarea name="skills"><?php echo htmlspecialchars($resume['skills'] ?? ''); ?></textarea>

        <div class="btn-row">
          <button type="submit" class="btn">Save</button>
          <a class="btn btn-secondary" href="generate_pdf.php" target="_blank">Download PDF</a>
        </div>
      </form>
    </div>

    <div class="preview-card">
      <p class="title-sm">Live Preview</p>
      <div class="preview-block">
        <h3 style="margin:0;"><?php echo htmlspecialchars($resume['full_name'] ?? 'Your Name'); ?></h3>
        <p style="margin:2px 0 0;"><?php echo htmlspecialchars($resume['phone'] ?? 'Phone'); ?> • <?php echo htmlspecialchars($resume['address'] ?? 'Address'); ?></p>
      </div>
      <div class="preview-block">
        <strong>Summary</strong>
        <p style="margin:5px 0 0; font-size:.75rem;"><?php echo nl2br(htmlspecialchars($resume['summary'] ?? 'Write a short professional summary...')); ?></p>
      </div>
      <div class="preview-block">
        <strong>Education</strong>
        <p style="margin:5px 0 0; font-size:.75rem;"><?php echo nl2br(htmlspecialchars($resume['education'] ?? 'Your education details...')); ?></p>
      </div>
      <div class="preview-block">
        <strong>Experience</strong>
        <p style="margin:5px 0 0; font-size:.75rem;"><?php echo nl2br(htmlspecialchars($resume['experience'] ?? 'Your experience...')); ?></p>
      </div>
      <div class="preview-block">
        <strong>Skills</strong>
        <p style="margin:5px 0 0; font-size:.75rem;"><?php echo nl2br(htmlspecialchars($resume['skills'] ?? 'Skill 1, Skill 2, Skill 3')); ?></p>
      </div>
    </div>
  </div>

</body>
</html>
