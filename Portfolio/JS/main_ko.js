function login() {
    let email = document.getElementById('email').value;
    let pass = document.getElementById('password').value;

    if (email && pass) {
        // 포트폴리오 페이지로 리다이렉트
        window.location.href = "portfolio_ko.html";
    } else {
        alert("이메일과 비밀번호를 입력해주세요");
    }
}

// 모든 입력 요소 가져오기
const inputs = document.querySelectorAll('input, textarea');

// 실시간 업데이트를 위한 이벤트 리스너 추가
inputs.forEach(input => {
    input.addEventListener('input', updatePreview);
});

// 사진 업로드 별도 처리
document.getElementById('photo').addEventListener('change', updatePreview);

// 실시간으로 미리보기를 업데이트하는 함수
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

    // 내용이 있는 섹션만 표시
    if (name || contact || bio || photoURL) {
        html += `<div class="preview-section">
                    <h3>개인 정보</h3>
                    ${name ? `<p><span class="preview-label">이름:</span> <span class="preview-value">${name}</span></p>` : ''}
                    ${photoURL ? `<img class="ImagePreview" src="${photoURL}">` : ''}
                    ${contact ? `<p><span class="preview-label">연락처:</span> <span class="preview-value">${contact}</span></p>` : ''}
                    ${bio ? `<p><span class="preview-label">자기소개:</span> <span class="preview-value">${bio}</span></p>` : ''}
                </div>`;
    }

    if (soft || tech) {
        html += `<div class="preview-section">
                    <h3>스킬</h3>
                    ${soft ? `<p><span class="preview-label">소프트 스킬:</span> <span class="preview-value">${soft}</span></p>` : ''}
                    ${tech ? `<p><span class="preview-label">기술 스킬:</span> <span class="preview-value">${tech}</span></p>` : ''}
                </div>`;
    }

    if (institute || degree || year) {
        html += `<div class="preview-section">
                    <h3>학력</h3>
                    ${institute ? `<p><span class="preview-label">학교명:</span> <span class="preview-value">${institute}</span></p>` : ''}
                    ${degree ? `<p><span class="preview-label">학위:</span> <span class="preview-value">${degree}</span></p>` : ''}
                    ${year ? `<p><span class="preview-label">년도:</span> <span class="preview-value">${year}</span></p>` : ''}
                </div>`;
    }

    if (company || duration || responsibility) {
        html += `<div class="preview-section">
                    <h3>경력</h3>
                    ${company ? `<p><span class="preview-label">회사명:</span> <span class="preview-value">${company}</span></p>` : ''}
                    ${duration ? `<p><span class="preview-label">기간:</span> <span class="preview-value">${duration}</span></p>` : ''}
                    ${responsibility ? `<p><span class="preview-label">담당 업무:</span> <span class="preview-value">${responsibility}</span></p>` : ''}
                </div>`;
    }

    if (projectTitle || projectDesc || projectLink) {
        html += `<div class="preview-section">
                    <h3>프로젝트/출판물</h3>
                    ${projectTitle ? `<p><span class="preview-label">제목:</span> <span class="preview-value">${projectTitle}</span></p>` : ''}
                    ${projectDesc ? `<p><span class="preview-label">설명:</span> <span class="preview-value">${projectDesc}</span></p>` : ''}
                    ${projectLink ? `<p><span class="preview-label">링크:</span> <span class="preview-value"><a href="${projectLink}" target="_blank">${projectLink}</a></span></p>` : ''}
                </div>`;
    }

    // 내용이 없으면 안내 메시지 표시
    if (!html) {
        html = '<h2>포트폴리오 미리보기</h2><h3>폼을 작성하면 여기에 포트폴리오 미리보기가 표시됩니다.</h3>';
    } else {
        html = `<h2>${name ? name + '의 포트폴리오' : "포트폴리오 미리보기"}</h2>` + html;
    }

    document.getElementById('portfolioPreview').innerHTML = html;
}

// 최종 포트폴리오 생성을 위한 원본 함수
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
            <h2>${name}의 포트폴리오</h2>
            ${photoURL ? `<img class="ImagePreview" src="${photoURL}">` : ''}
            <p><strong>연락처:</strong> ${contact}</p>
            <p><strong>자기소개:</strong> ${bio}</p>
            <h3>스킬</h3>
            <p><strong>소프트 스킬:</strong> ${soft}</p>
            <p><strong>기술 스킬:</strong> ${tech}</p>
            ${institute || degree || year ? `
            <h3>학력</h3>
            <p><strong>학교명:</strong> ${institute}</p>
            <p><strong>학위:</strong> ${degree}</p>
            <p><strong>년도:</strong> ${year}</p>` : ''}
            <h3>경력</h3>
            <p><strong>회사명:</strong> ${company}</p>
            <p><strong>기간:</strong> ${duration}</p>
            <p><strong>담당 업무:</strong> ${responsibility}</p>
            ${projectTitle || projectDesc || projectLink ? `
            <h3>프로젝트/출판물</h3>
            <p><strong>제목:</strong> ${projectTitle}</p>
            <p><strong>설명:</strong> ${projectDesc}</p>
            <p><strong>링크:</strong> <a href="${projectLink}" target="_blank">${projectLink}</a></p>` : ''}
            `;

    document.getElementById('portfolioPreview').innerHTML = html;

    // 확인 메시지 표시
    alert("최종 포트폴리오가 생성되었습니다! 이제 이 페이지를 인쇄하거나 저장할 수 있습니다.");
}

function printPortfolio() {
    // 포트폴리오 미리보기 내용 가져오기
    const previewContent = document.getElementById('portfolioPreview').innerHTML;

    // 인쇄를 위한 새 창 생성
    const printWindow = window.open('', '_blank');

    // 인쇄 페이지의 HTML 내용 작성
    printWindow.document.write(`
<!DOCTYPE html>
<html lang="ko">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">

    <meta name="my_web" content="this is my website">
    <meta name="robots" content="index, follow">

    <link rel="stylesheet" href="../CSS/main.css">
    

    <title>포트폴리오 페이지</title>
</head>
        <body>
        <header class="heading">
        <div class="container">
            <div class="left">
                <img class="icon" src="../SRC/ScienceMe_profilE.png" alt="Science Tasin">
            </div>
            <div class="right">
                <span>타신의 범용 프로그래밍 지식 (UPKT)</span>
            </div>
        </div>
    </header>
            ${previewContent}
            <div class="no-print" style="margin-top: 30px; text-align: center; padding: 20px; border-top: 1px solid #ccc;">
                <p>타신의 범용 프로그래밍 지식 (UPKT)에 의해 생성됨</p>
            </div>
            
            <script>
                // 창 로드 시 자동 인쇄
                window.onload = function() {
                    window.print();
                };
                
                // 인쇄 후 창 닫기
                window.onafterprint = function() {
                    window.close();
                };
            <\/script>
        </body>
        </html>
    `);

    printWindow.document.close();
}