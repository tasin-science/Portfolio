function login() {
    let email = document.getElementById('email').value;
    let pass = document.getElementById('password').value;

    if (email && pass) {
        // Redirect to portfolio page
        window.location.href = "portfolio_ar.html";
    } else {
        alert("يرجى إدخال البريد الإلكتروني وكلمة المرور");
    }
}

// Get all input elements
const inputs = document.querySelectorAll('input, textarea');

// Add event listeners for real-time updates
inputs.forEach(input => {
    input.addEventListener('input', updatePreview);
});

// Handle photo upload separately
document.getElementById('photo').addEventListener('change', updatePreview);

// Function to update preview in real-time
function updatePreview() {
    let name = document.getElementById('name').value;
    let contact = document.getElementById('contact').value;
    let bio = document.getElementById('bio').value;
    let soft = document.getElementById('softSkills').value;
    let tech = document.getElementById('techSkills').value;
    let institute = document.getElementById('institute').value;
    let degree = document.getElementById('degree').value;
    let year = document.getElementById('year').value;
    let company = document.getElementById('company').value;
    let duration = document.getElementById('duration').value;
    let responsibility = document.getElementById('responsibility').value;
    let projectTitle = document.getElementById('projectTitle').value;
    let projectDesc = document.getElementById('projectDesc').value;
    let projectLink = document.getElementById('projectLink').value;
    let photo = document.getElementById('photo').files[0];
    let photoURL = photo ? URL.createObjectURL(photo) : '';

    let html = '';

    // Only show sections with content
    if (name || contact || bio || photoURL) {
        html += `<div class="preview-section">
                    <h3>المعلومات الشخصية</h3>
                    ${name ? `<p><span class="preview-label">الاسم:</span> <span class="preview-value">${name}</span></p>` : ''}
                    ${photoURL ? `<img class="ImagePreview" src="${photoURL}">` : ''}
                    ${contact ? `<p><span class="preview-label">معلومات الاتصال:</span> <span class="preview-value">${contact}</span></p>` : ''}
                    ${bio ? `<p><span class="preview-label">نبذة مختصرة:</span> <span class="preview-value">${bio}</span></p>` : ''}
                </div>`;
    }

    if (soft || tech) {
        html += `<div class="preview-section">
                    <h3>المهارات</h3>
                    ${soft ? `<p><span class="preview-label">المهارات الشخصية:</span> <span class="preview-value">${soft}</span></p>` : ''}
                    ${tech ? `<p><span class="preview-label">المهارات التقنية:</span> <span class="preview-value">${tech}</span></p>` : ''}
                </div>`;
    }

    if (institute || degree || year) {
        html += `<div class="preview-section">
                    <h3>الخلفية الأكاديمية</h3>
                    ${institute ? `<p><span class="preview-label">المؤسسة:</span> <span class="preview-value">${institute}</span></p>` : ''}
                    ${degree ? `<p><span class="preview-label">الدرجة:</span> <span class="preview-value">${degree}</span></p>` : ''}
                    ${year ? `<p><span class="preview-label">السنة:</span> <span class="preview-value">${year}</span></p>` : ''}
                </div>`;
    }

    if (company || duration || responsibility) {
        html += `<div class="preview-section">
                    <h3>الخبرة العملية</h3>
                    ${company ? `<p><span class="preview-label">الشركة:</span> <span class="preview-value">${company}</span></p>` : ''}
                    ${duration ? `<p><span class="preview-label">المدة:</span> <span class="preview-value">${duration}</span></p>` : ''}
                    ${responsibility ? `<p><span class="preview-label">المسؤوليات:</span> <span class="preview-value">${responsibility}</span></p>` : ''}
                </div>`;
    }

    if (projectTitle || projectDesc || projectLink) {
        html += `<div class="preview-section">
                    <h3>المشاريع/المنشورات</h3>
                    ${projectTitle ? `<p><span class="preview-label">العنوان:</span> <span class="preview-value">${projectTitle}</span></p>` : ''}
                    ${projectDesc ? `<p><span class="preview-label">الوصف:</span> <span class="preview-value">${projectDesc}</span></p>` : ''}
                    ${projectLink ? `<p><span class="preview-label">الرابط:</span> <span class="preview-value"><a href="${projectLink}" target="_blank">${projectLink}</a></span></p>` : ''}
                </div>`;
    }

    // If no content, show placeholder message
    if (!html) {
        html = '<h2>معاينة السيرة الذاتية</h2><h3>ابدأ بملء النموذج لرؤية معاينة سيرتك الذاتية هنا.</h3>';
    } else {
        html = `<h2>${name ? "سيرة " + name + " الذاتية" : "معاينة السيرة الذاتية"}</h2>` + html;
    }

    document.getElementById('portfolioPreview').innerHTML = html;
}

// Original function for final portfolio generation
function generatePortfolio() {
    let name = document.getElementById('name').value;
    let contact = document.getElementById('contact').value;
    let bio = document.getElementById('bio').value;
    let soft = document.getElementById('softSkills').value;
    let tech = document.getElementById('techSkills').value;
    let institute = document.getElementById('institute').value;
    let degree = document.getElementById('degree').value;
    let year = document.getElementById('year').value;
    let company = document.getElementById('company').value;
    let duration = document.getElementById('duration').value;
    let responsibility = document.getElementById('responsibility').value;
    let projectTitle = document.getElementById('projectTitle').value;
    let projectDesc = document.getElementById('projectDesc').value;
    let projectLink = document.getElementById('projectLink').value;
    let photo = document.getElementById('photo').files[0];
    let photoURL = photo ? URL.createObjectURL(photo) : '';

    let html = `
            <h2>سيرة ${name} الذاتية</h2>
            ${photoURL ? `<img class="ImagePreview" src="${photoURL}" style="max-width: 150px; border-radius: 5px; margin: 10px 0;">` : ''}
            <p><strong>معلومات الاتصال:</strong> ${contact}</p>
            <p><strong>نبذة مختصرة:</strong> ${bio}</p>
            <h3>المهارات</h3>
            <p><strong>المهارات الشخصية:</strong> ${soft}</p>
            <p><strong>المهارات التقنية:</strong> ${tech}</p>
            ${institute || degree || year ? `
            <h3>الخلفية الأكاديمية</h3>
            <p><strong>المؤسسة:</strong> ${institute}</p>
            <p><strong>الدرجة:</strong> ${degree}</p>
            <p><strong>السنة:</strong> ${year}</p>` : ''}
            <h3>الخبرة العملية</h3>
            <p><strong>الشركة:</strong> ${company}</p>
            <p><strong>المدة:</strong> ${duration}</p>
            <p><strong>المسؤوليات:</strong> ${responsibility}</p>
            ${projectTitle || projectDesc || projectLink ? `
            <h3>المشاريع/المنشورات</h3>
            <p><strong>العنوان:</strong> ${projectTitle}</p>
            <p><strong>الوصف:</strong> ${projectDesc}</p>
            <p><strong>الرابط:</strong> <a href="${projectLink}" target="_blank">${projectLink}</a></p>` : ''}
            `;

    document.getElementById('portfolioPreview').innerHTML = html;

    // Show a confirmation message
    alert("تم إنشاء السيرة الذاتية النهائية! يمكنك الآن طباعة هذه الصفحة أو حفظها.");
}

function printPortfolio() {
    // Get the portfolio preview content
    const previewContent = document.getElementById('portfolioPreview').innerHTML;

    // Create a new window for printing
    const printWindow = window.open('', '_blank');

    // Write the HTML content for the print page
    printWindow.document.write(`
<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">

    <meta name="my_web" content="this is my website">
    <meta name="robots" content="index, follow">

    <link rel="stylesheet" href="../CSS/main.css">
    <title>سيرة ذاتية</title>
</head>
<body>
<header class="heading">
        <div class="container">
            <div class="left">
                <img class="icon" src="../SRC/ScienceMe_profilE.png" alt="Science Tasin">
            </div>
            <div class="right">
                <span>المعرفة البرمجية العالمية لتاسين (UPKT)</span>
            </div>
        </div>
    </header>
    ${previewContent}
    <div class="no-print">
        <p>تم الإنشاء بواسطة المعرفة البرمجية العالمية لتاسين (UPKT)</p>
    </div>

    <script>
                // Auto-print when the window loads
                window.onload = function() {
                    window.print();
                };
                
                // Close window after printing
                window.onafterprint = function() {
                    window.close();
                };
            <\/script>

</body>
</html>
    `);

    printWindow.document.close();
}

// Initialize preview on page load
document.addEventListener('DOMContentLoaded', function() {
    updatePreview();
});