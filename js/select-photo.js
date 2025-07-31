document.addEventListener('DOMContentLoaded', function() {
    const uploadBtn = document.getElementById('upload');
    const generateBtn = document.querySelector('.btn-container .select-btn:not(#upload)');
    const fileInput = document.getElementById('fileInput');

    const checkmarkIcon = `
        <svg width="17" height="13" viewBox="0 0 17 13" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14.9072 0.75C15.0811 0.750005 15.2532 0.783691 15.4141 0.848633C15.5732 0.912913 15.7182 1.0071 15.8408 1.12598H15.8418C15.9703 1.24649 16.0732 1.39117 16.1436 1.55176C16.2139 1.71252 16.25 1.8864 16.25 2.06152C16.2499 2.2365 16.2139 2.40968 16.1436 2.57031C16.0736 2.73009 15.9704 2.873 15.8428 2.99316L15.8438 2.99414L6.33008 12.1797L6.14941 12.3535L5.97656 12.1738L1.11035 7.12305C0.868302 6.87162 0.738298 6.53529 0.750977 6.18848C0.763708 5.84172 0.918298 5.51609 1.17773 5.28223C1.43694 5.04859 1.78 4.92549 2.13086 4.9375C2.4816 4.9496 2.81487 5.09562 3.05664 5.34668L6.21191 8.63379L13.9697 1.12891C14.093 1.00845 14.2398 0.913512 14.4004 0.848633C14.5612 0.783706 14.7334 0.75 14.9072 0.75Z" fill="currentColor" stroke="currentColor" stroke-width="0.5"/>
        </svg>
    `;

    const originalUploadText = uploadBtn.textContent;
    const generateTextElement = generateBtn.querySelector('.select-btn-text');
    const iconImage = generateBtn.querySelector('.select-btn-icon');

    function updateGenerateButtonStyles(isActive) {
        generateBtn.style.backgroundColor = '#10A37F';
        generateBtn.style.color = '#fff';
    }

    uploadBtn.addEventListener('click', function () {
        fileInput.click(); 
    });

    fileInput.addEventListener('change', function () {
        const file = fileInput.files[0];

        if (file) {
        const reader = new FileReader();

        reader.onload = function (e) {
            localStorage.setItem('selectedImage', e.target.result);
        };

        reader.readAsDataURL(file);
            uploadBtn.innerHTML = checkmarkIcon + ' Фото выбрано';
            uploadBtn.classList.add('active');
            uploadBtn.style.backgroundColor = '#10A37F26';
            uploadBtn.style.color = '#10A37F';

            generateTextElement.textContent = 'Генерировать - 2';
            if (iconImage) iconImage.style.transform = 'scale(1.2)';

            updateGenerateButtonStyles(true);
        } else {
            uploadBtn.innerHTML = originalUploadText;
            uploadBtn.classList.remove('active');
            uploadBtn.style.backgroundColor = '#10A37F';
            uploadBtn.style.color = '#fff';

            generateTextElement.textContent = 'Генерировать - 2';
            if (iconImage) iconImage.style.transform = 'scale(1)';

            updateGenerateButtonStyles(false);
        }
    });

    updateGenerateButtonStyles(false);

    document.addEventListener('themeChanged', function () {
        const isActive = uploadBtn.classList.contains('active');
        updateGenerateButtonStyles(isActive);
    });
});
