function login() {
    let email = document.getElementById('email').value;
    let pass = document.getElementById('password').value;

    if (email && pass) {
        // Redirect to portfolio page
        window.location.href = "portfolio.html";
    } else {
        alert("Please enter email and password");
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
                    <h3>Personal Information</h3>
                    ${name ? `<p><span class="preview-label">Name:</span> <span class="preview-value">${name}</span></p>` : ''}
                    ${photoURL ? `<img class="ImagePreview" src="${photoURL}">` : ''}
                    ${contact ? `<p><span class="preview-label">Contact:</span> <span class="preview-value">${contact}</span></p>` : ''}
                    ${bio ? `<p><span class="preview-label">Bio:</span> <span class="preview-value">${bio}</span></p>` : ''}
                </div>`;
    }

    if (soft || tech) {
        html += `<div class="preview-section">
                    <h3>Skills</h3>
                    ${soft ? `<p><span class="preview-label">Soft Skills:</span> <span class="preview-value">${soft}</span></p>` : ''}
                    ${tech ? `<p><span class="preview-label">Technical Skills:</span> <span class="preview-value">${tech}</span></p>` : ''}
                </div>`;
    }

    if (institute || degree || year) {
        html += `<div class="preview-section">
                    <h3>Academic Background</h3>
                    ${institute ? `<p><span class="preview-label">Institute:</span> <span class="preview-value">${institute}</span></p>` : ''}
                    ${degree ? `<p><span class="preview-label">Degree:</span> <span class="preview-value">${degree}</span></p>` : ''}
                    ${year ? `<p><span class="preview-label">Year:</span> <span class="preview-value">${year}</span></p>` : ''}
                </div>`;
    }

    if (company || duration || responsibility) {
        html += `<div class="preview-section">
                    <h3>Work Experience</h3>
                    ${company ? `<p><span class="preview-label">Company:</span> <span class="preview-value">${company}</span></p>` : ''}
                    ${duration ? `<p><span class="preview-label">Duration:</span> <span class="preview-value">${duration}</span></p>` : ''}
                    ${responsibility ? `<p><span class="preview-label">Responsibilities:</span> <span class="preview-value">${responsibility}</span></p>` : ''}
                </div>`;
    }

    if (projectTitle || projectDesc || projectLink) {
        html += `<div class="preview-section">
                    <h3>Projects/Publications</h3>
                    ${projectTitle ? `<p><span class="preview-label">Title:</span> <span class="preview-value">${projectTitle}</span></p>` : ''}
                    ${projectDesc ? `<p><span class="preview-label">Description:</span> <span class="preview-value">${projectDesc}</span></p>` : ''}
                    ${projectLink ? `<p><span class="preview-label">Link:</span> <span class="preview-value"><a href="${projectLink}" target="_blank">${projectLink}</a></span></p>` : ''}
                </div>`;
    }

    // If no content, show placeholder message
    if (!html) {
        html = '<h2>Portfolio Preview</h2><h3>Start filling out the form to see your portfolio preview here.</h3>';
    } else {
        html = `<h2>${name ? name + "'s Portfolio" : "Portfolio Preview"}</h2>` + html;
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
            <h2>${name}'s Portfolio</h2>
            ${photoURL ? `<img class="ImagePreview" src="${photoURL}">` : ''}
            <p><strong>Contact:</strong> ${contact}</p>
            <p><strong>Bio:</strong> ${bio}</p>
            <h3>Skills</h3>
            <p><strong>Soft Skills:</strong> ${soft}</p>
            <p><strong>Technical Skills:</strong> ${tech}</p>
            ${institute || degree || year ? `
            <h3>Academic Background</h3>
            <p><strong>Institute:</strong> ${institute}</p>
            <p><strong>Degree:</strong> ${degree}</p>
            <p><strong>Year:</strong> ${year}</p>` : ''}
            <h3>Work Experience</h3>
            <p><strong>Company:</strong> ${company}</p>
            <p><strong>Duration:</strong> ${duration}</p>
            <p><strong>Responsibilities:</strong> ${responsibility}</p>
            ${projectTitle || projectDesc || projectLink ? `
            <h3>Projects/Publications</h3>
            <p><strong>Title:</strong> ${projectTitle}</p>
            <p><strong>Description:</strong> ${projectDesc}</p>
            <p><strong>Link:</strong> <a href="${projectLink}" target="_blank">${projectLink}</a></p>` : ''}
            `;

    document.getElementById('portfolioPreview').innerHTML = html;

    // Show a confirmation message
    alert("Final portfolio generated! You can now print or save this page.");
}


function printPortfolio() {
    // Get the portfolio preview content
    const previewContent = document.getElementById('portfolioPreview').innerHTML;

    // Create a new window for printing
    const printWindow = window.open('', '_blank');

    // Write the HTML content for the print page
    printWindow.document.write(`
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">

    <meta name="my_web" content="this is my website">
    <meta name="robots" content="index, follow">

    <link rel="stylesheet" href="../CSS/main.css">
    

    <title>Portfolio page</title>
</head>
        <body>
        <header class="heading">
        <div class="container">
            <div class="left">
                <img class="icon" src="../SRC/ScienceMe_profilE.png" alt="Science Tasin">
            </div>
            <div class="right">
                <span>Universal Programming Knowledge of Tasin (UPKT)</span>
            </div>
        </div>
    </header>
            ${previewContent}
            <div class="no-print" style="margin-top: 30px; text-align: center; padding: 20px; border-top: 1px solid #ccc;">
                <p>Generated by Universal Programming Knowledge of Tasin (UPKT)</p>
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
