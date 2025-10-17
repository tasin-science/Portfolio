function login() {
    let email = document.getElementById('email').value;
    let pass = document.getElementById('password').value;

    if (email && pass) {
        // 重定向到作品集页面
        window.location.href = "portfolio_zh.html";
    } else {
        alert("请输入邮箱和密码");
    }
}

// 获取所有输入元素
const inputs = document.querySelectorAll('input, textarea');

// 添加实时更新的事件监听器
inputs.forEach(input => {
    input.addEventListener('input', updatePreview);
});

// 单独处理照片上传
document.getElementById('photo').addEventListener('change', updatePreview);

// 实时更新预览的函数
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

    // 只显示有内容的章节
    if (name || contact || bio || photoURL) {
        html += `<div class="preview-section">
                    <h3>个人信息</h3>
                    ${name ? `<p><span class="preview-label">姓名:</span> <span class="preview-value">${name}</span></p>` : ''}
                    ${photoURL ? `<img class="ImagePreview" src="${photoURL}">` : ''}
                    ${contact ? `<p><span class="preview-label">联系方式:</span> <span class="preview-value">${contact}</span></p>` : ''}
                    ${bio ? `<p><span class="preview-label">个人简介:</span> <span class="preview-value">${bio}</span></p>` : ''}
                </div>`;
    }

    if (soft || tech) {
        html += `<div class="preview-section">
                    <h3>技能</h3>
                    ${soft ? `<p><span class="preview-label">软技能:</span> <span class="preview-value">${soft}</span></p>` : ''}
                    ${tech ? `<p><span class="preview-label">技术技能:</span> <span class="preview-value">${tech}</span></p>` : ''}
                </div>`;
    }

    if (institute || degree || year) {
        html += `<div class="preview-section">
                    <h3>教育背景</h3>
                    ${institute ? `<p><span class="preview-label">学校:</span> <span class="preview-value">${institute}</span></p>` : ''}
                    ${degree ? `<p><span class="preview-label">学位:</span> <span class="preview-value">${degree}</span></p>` : ''}
                    ${year ? `<p><span class="preview-label">年份:</span> <span class="preview-value">${year}</span></p>` : ''}
                </div>`;
    }

    if (company || duration || responsibility) {
        html += `<div class="preview-section">
                    <h3>工作经历</h3>
                    ${company ? `<p><span class="preview-label">公司:</span> <span class="preview-value">${company}</span></p>` : ''}
                    ${duration ? `<p><span class="preview-label">工作时间:</span> <span class="preview-value">${duration}</span></p>` : ''}
                    ${responsibility ? `<p><span class="preview-label">工作职责:</span> <span class="preview-value">${responsibility}</span></p>` : ''}
                </div>`;
    }

    if (projectTitle || projectDesc || projectLink) {
        html += `<div class="preview-section">
                    <h3>项目/出版物</h3>
                    ${projectTitle ? `<p><span class="preview-label">标题:</span> <span class="preview-value">${projectTitle}</span></p>` : ''}
                    ${projectDesc ? `<p><span class="preview-label">描述:</span> <span class="preview-value">${projectDesc}</span></p>` : ''}
                    ${projectLink ? `<p><span class="preview-label">链接:</span> <span class="preview-value"><a href="${projectLink}" target="_blank">${projectLink}</a></span></p>` : ''}
                </div>`;
    }

    // 如果没有内容，显示占位符消息
    if (!html) {
        html = '<h2>作品集预览</h2><h3>开始填写表单以在此处查看您的作品集预览。</h3>';
    } else {
        html = `<h2>${name ? name + '的作品集' : "作品集预览"}</h2>` + html;
    }

    document.getElementById('portfolioPreview').innerHTML = html;
}

// 最终作品集生成的原始函数
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
            <h2>${name}的作品集</h2>
            ${photoURL ? `<img class="ImagePreview" src="${photoURL}">` : ''}
            <p><strong>联系方式:</strong> ${contact}</p>
            <p><strong>个人简介:</strong> ${bio}</p>
            <h3>技能</h3>
            <p><strong>软技能:</strong> ${soft}</p>
            <p><strong>技术技能:</strong> ${tech}</p>
            ${institute || degree || year ? `
            <h3>教育背景</h3>
            <p><strong>学校:</strong> ${institute}</p>
            <p><strong>学位:</strong> ${degree}</p>
            <p><strong>年份:</strong> ${year}</p>` : ''}
            <h3>工作经历</h3>
            <p><strong>公司:</strong> ${company}</p>
            <p><strong>工作时间:</strong> ${duration}</p>
            <p><strong>工作职责:</strong> ${responsibility}</p>
            ${projectTitle || projectDesc || projectLink ? `
            <h3>项目/出版物</h3>
            <p><strong>标题:</strong> ${projectTitle}</p>
            <p><strong>描述:</strong> ${projectDesc}</p>
            <p><strong>链接:</strong> <a href="${projectLink}" target="_blank">${projectLink}</a></p>` : ''}
            `;

    document.getElementById('portfolioPreview').innerHTML = html;

    // 显示确认消息
    alert("最终作品集已生成！您现在可以打印或保存此页面。");
}

function printPortfolio() {
    // 获取作品集预览内容
    const previewContent = document.getElementById('portfolioPreview').innerHTML;

    // 创建新的打印窗口
    const printWindow = window.open('', '_blank');

    // 写入打印页面的HTML内容
    printWindow.document.write(`
<!DOCTYPE html>
<html lang="zh-CN">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">

    <meta name="my_web" content="这是我的网站">
    <meta name="robots" content="index, follow">

    <link rel="stylesheet" href="../CSS/main.css">
    

    <title>作品集页面</title>
</head>
        <body>
        <header class="heading">
        <div class="container">
            <div class="left">
                <img class="icon" src="../SRC/ScienceMe_profilE.png" alt="Science Tasin">
            </div>
            <div class="right">
                <span>Tasin的通用编程知识 (UPKT)</span>
            </div>
        </div>
    </header>
            ${previewContent}
            <div class="no-print" style="margin-top: 30px; text-align: center; padding: 20px; border-top: 1px solid #ccc;">
                <p>由Tasin的通用编程知识 (UPKT) 生成</p>
            </div>
            
            <script>
                // 窗口加载时自动打印
                window.onload = function() {
                    window.print();
                };
                
                // 打印后关闭窗口
                window.onafterprint = function() {
                    window.close();
                };
            <\/script>
        </body>
        </html>
    `);

    printWindow.document.close();
}