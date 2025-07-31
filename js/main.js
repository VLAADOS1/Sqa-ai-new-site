document.querySelectorAll('.gender-btn').forEach(button => {
    button.addEventListener('click', function() {
        document.querySelectorAll('.gender-btn').forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');
    });
});