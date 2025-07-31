document.addEventListener('DOMContentLoaded', function() {
    const idButton = document.querySelector('.id-btn');
    const idText = document.querySelector('.id-text');
    const idSpan = document.querySelector('.id');
    const originalText = idText.innerHTML;
    const idIcon = document.querySelector('.id-icon');
    const originalIconSrc = idIcon.src;
    
    idButton.addEventListener('click', function() {
        const idToCopy = idSpan.textContent;
        
        navigator.clipboard.writeText(idToCopy)
            .then(() => {
                idText.innerHTML = 'Скопировано!';
                idIcon.src = '/images/icons/select-icon.svg';
                
                idButton.style.transform = 'scale(0.95)';
                setTimeout(() => {
                    idButton.style.transform = '';
                }, 200);
                
                setTimeout(() => {
                    idText.innerHTML = originalText;
                    idIcon.src = originalIconSrc;
                }, 2000);
            })
            .catch(err => {
                console.error('Ошибка при копировании: ', err);
                idText.innerHTML = 'Ошибка';
                setTimeout(() => {
                    idText.innerHTML = originalText;
                }, 2000);
            });
    });
});