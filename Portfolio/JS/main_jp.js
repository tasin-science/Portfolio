// Adobe font HOT-Soshokk license 
    // main_jp.js - Simple OFL License Link
(function() {
    'use strict';
    
    function createOFLLink() {
        const licenseContainer = document.createElement('div');
        licenseContainer.style.cssText = `
            margin: 20px 0;
            padding: 15px;
            background-color: #f8f9fa;
            border-radius: 8px;
            border-left: 4px solid #3498db;
            font-family: Arial, sans-serif;
        `;
        
        const header = document.createElement('h3');
        header.textContent = 'Font License Information';
        header.style.margin = '0 0 10px 0';
        header.style.color = '#2c3e50';
        
        const description = document.createElement('p');
        description.textContent = 'This website uses the HOT-Soshokk font under the SIL Open Font License.';
        description.style.margin = '0 0 10px 0';
        
        const licenseLink = document.createElement('a');
        licenseLink.href = './License/HOT-Soshokk OFL.txt';
        licenseLink.textContent = 'View SIL Open Font License (OFL)';
        licenseLink.target = '_blank';
        licenseLink.rel = 'noopener noreferrer';
        licenseLink.style.cssText = `
            display: inline-block;
            padding: 8px 15px;
            background-color: #3498db;
            color: white;
            text-decoration: none;
            border-radius: 4px;
            transition: background-color 0.3s;
        `;
        
        licenseLink.addEventListener('mouseenter', function() {
            this.style.backgroundColor = '#2980b9';
        });
        
        licenseLink.addEventListener('mouseleave', function() {
            this.style.backgroundColor = '#3498db';
        });
        
        licenseContainer.appendChild(header);
        licenseContainer.appendChild(description);
        licenseContainer.appendChild(licenseLink);
        
        // Add to page
        document.body.appendChild(licenseContainer);
    }
    
    // Auto-initialize
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', createOFLLink);
    } else {
        createOFLLink();
    }
})();
  
  
  
// Adobe HOT-Soshokk font implementation
  (function(d) {
    var config = {
      kitId: 'cwy0doe',
      scriptTimeout: 3000,
      async: true
    },
    h=d.documentElement,t=setTimeout(function(){h.className=h.className.replace(/\bwf-loading\b/g,"")+" wf-inactive";},config.scriptTimeout),tk=d.createElement("script"),f=false,s=d.getElementsByTagName("script")[0],a;h.className+=" wf-loading";tk.src='https://use.typekit.net/'+config.kitId+'.js';tk.async=true;tk.onload=tk.onreadystatechange=function(){a=this.readyState;if(f||a&&a!="complete"&&a!="loaded")return;f=true;clearTimeout(t);try{Typekit.load(config)}catch(e){}};s.parentNode.insertBefore(tk,s)
  })(document);

  function login() {
    let email = document.getElementById('email').value;
    let pass = document.getElementById('password').value;

    if (email && pass) {
        // ポートフォリオページにリダイレクト
        window.location.href = "portfolio_jp.html";
    } else {
        alert("メールアドレスとパスワードを入力してください");
    }
}

// 全ての入力要素を取得
const inputs = document.querySelectorAll('input, textarea');

// リアルタイム更新のためのイベントリスナーを追加
inputs.forEach(input => {
    input.addEventListener('input', updatePreview);
});

// 写真アップロードを個別に処理
document.getElementById('photo').addEventListener('change', updatePreview);

// リアルタイムでプレビューを更新する関数
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

    // 内容があるセクションのみ表示
    if (name || contact || bio || photoURL) {
        html += `<div class="preview-section">
                    <h3>個人情報</h3>
                    ${name ? `<p><span class="preview-label">名前:</span> <span class="preview-value">${name}</span></p>` : ''}
                    ${photoURL ? `<img class="ImagePreview" src="${photoURL}">` : ''}
                    ${contact ? `<p><span class="preview-label">連絡先:</span> <span class="preview-value">${contact}</span></p>` : ''}
                    ${bio ? `<p><span class="preview-label">自己紹介:</span> <span class="preview-value">${bio}</span></p>` : ''}
                </div>`;
    }

    if (soft || tech) {
        html += `<div class="preview-section">
                    <h3>スキル</h3>
                    ${soft ? `<p><span class="preview-label">ソフトスキル:</span> <span class="preview-value">${soft}</span></p>` : ''}
                    ${tech ? `<p><span class="preview-label">技術スキル:</span> <span class="preview-value">${tech}</span></p>` : ''}
                </div>`;
    }

    if (institute || degree || year) {
        html += `<div class="preview-section">
                    <h3>学歴</h3>
                    ${institute ? `<p><span class="preview-label">学校名:</span> <span class="preview-value">${institute}</span></p>` : ''}
                    ${degree ? `<p><span class="preview-label">学位:</span> <span class="preview-value">${degree}</span></p>` : ''}
                    ${year ? `<p><span class="preview-label">年度:</span> <span class="preview-value">${year}</span></p>` : ''}
                </div>`;
    }

    if (company || duration || responsibility) {
        html += `<div class="preview-section">
                    <h3>職務経験</h3>
                    ${company ? `<p><span class="preview-label">会社名:</span> <span class="preview-value">${company}</span></p>` : ''}
                    ${duration ? `<p><span class="preview-label">期間:</span> <span class="preview-value">${duration}</span></p>` : ''}
                    ${responsibility ? `<p><span class="preview-label">担当業務:</span> <span class="preview-value">${responsibility}</span></p>` : ''}
                </div>`;
    }

    if (projectTitle || projectDesc || projectLink) {
        html += `<div class="preview-section">
                    <h3>プロジェクト/出版物</h3>
                    ${projectTitle ? `<p><span class="preview-label">タイトル:</span> <span class="preview-value">${projectTitle}</span></p>` : ''}
                    ${projectDesc ? `<p><span class="preview-label">説明:</span> <span class="preview-value">${projectDesc}</span></p>` : ''}
                    ${projectLink ? `<p><span class="preview-label">リンク:</span> <span class="preview-value"><a href="${projectLink}" target="_blank">${projectLink}</a></span></p>` : ''}
                </div>`;
    }

    // 内容がない場合、プレースホルダーメッセージを表示
    if (!html) {
        html = '<h2>ポートフォリオプレビュー</h2><h3>フォームに入力すると、ここにポートフォリオのプレビューが表示されます。</h3>';
    } else {
        html = `<h2>${name ? name + 'のポートフォリオ' : "ポートフォリオプレビュー"}</h2>` + html;
    }

    document.getElementById('portfolioPreview').innerHTML = html;
}

// 最終的なポートフォリオ生成のための元の関数
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
            <h2>${name}のポートフォリオ</h2>
            ${photoURL ? `<img class="ImagePreview" src="${photoURL}">` : ''}
            <p><strong>連絡先:</strong> ${contact}</p>
            <p><strong>自己紹介:</strong> ${bio}</p>
            <h3>スキル</h3>
            <p><strong>ソフトスキル:</strong> ${soft}</p>
            <p><strong>技術スキル:</strong> ${tech}</p>
            ${institute || degree || year ? `
            <h3>学歴</h3>
            <p><strong>学校名:</strong> ${institute}</p>
            <p><strong>学位:</strong> ${degree}</p>
            <p><strong>年度:</strong> ${year}</p>` : ''}
            <h3>職務経験</h3>
            <p><strong>会社名:</strong> ${company}</p>
            <p><strong>期間:</strong> ${duration}</p>
            <p><strong>担当業務:</strong> ${responsibility}</p>
            ${projectTitle || projectDesc || projectLink ? `
            <h3>プロジェクト/出版物</h3>
            <p><strong>タイトル:</strong> ${projectTitle}</p>
            <p><strong>説明:</strong> ${projectDesc}</p>
            <p><strong>リンク:</strong> <a href="${projectLink}" target="_blank">${projectLink}</a></p>` : ''}
            `;

    document.getElementById('portfolioPreview').innerHTML = html;

    // 確認メッセージを表示
    alert("最終的なポートフォリオが生成されました！このページを印刷または保存できます。");
}

function printPortfolio() {
    // ポートフォリオプレビューの内容を取得
    const previewContent = document.getElementById('portfolioPreview').innerHTML;

    // 印刷用の新しいウィンドウを作成
    const printWindow = window.open('', '_blank');

    // 印刷ページのHTMLコンテンツを書き込む
    printWindow.document.write(`
<!DOCTYPE html>
<html lang="ja">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">

    <meta name="my_web" content="this is my website">
    <meta name="robots" content="index, follow">

    <link rel="stylesheet" href="../CSS/main.css">
    

    <title>ポートフォリオページ</title>
</head>
        <body>
        <header class="heading">
        <div class="container">
            <div class="left">
                <img class="icon" src="../SRC/ScienceMe_profilE.png" alt="Science Tasin">
            </div>
            <div class="right">
                <span>タシンのユニバーサルプログラミング知識 (UPKT)</span>
            </div>
        </div>
    </header>
            ${previewContent}
            <div class="no-print" style="margin-top: 30px; text-align: center; padding: 20px; border-top: 1px solid #ccc;">
                <p>タシンのユニバーサルプログラミング知識 (UPKT) によって生成されました</p>
            </div>
            
            <script>
                // ウィンドウ読み込み時に自動印刷
                window.onload = function() {
                    window.print();
                };
                
                // 印刷後にウィンドウを閉じる
                window.onafterprint = function() {
                    window.close();
                };
            <\/script>
        </body>
        </html>
    `);

    printWindow.document.close();
}