document.addEventListener('DOMContentLoaded', function() {
  const languageButtons = document.querySelectorAll('.language-btn');
  const languageSlider = document.querySelector('.language-slider');
  
  if (!languageButtons.length || !languageSlider) return;

  const activeButton = document.querySelector('.language-btn.active');
  if (activeButton) {
    const isSah = activeButton.dataset.lang === 'sah';
    languageSlider.style.transform = isSah 
      ? 'translateX(calc(100% + 8px))' 
      : 'translateX(0)';
  }

  languageButtons.forEach(button => {
    button.addEventListener('click', function() {
      languageButtons.forEach(btn => btn.classList.remove('active'));
      this.classList.add('active');

      const isSah = this.dataset.lang === 'sah';
      languageSlider.style.transform = isSah 
        ? 'translateX(calc(100% + 8px))' 
        : 'translateX(0)';
    });

    button.addEventListener('mouseenter', function() {
      if (!this.classList.contains('active')) {
        const isSah = this.dataset.lang === 'sah';
        languageSlider.style.transform = isSah 
          ? 'translateX(calc(10% + 8px)) scaleX(0.95)'
          : 'translateX(90%) scaleX(0.95)';
      }
    });
    
    button.addEventListener('mouseleave', function() {
      if (!this.classList.contains('active')) {
        const activeBtn = document.querySelector('.language-btn.active');
        if (activeBtn) {
          const isSah = activeBtn.dataset.lang === 'sah';
          languageSlider.style.transform = isSah
            ? 'translateX(calc(100% + 8px))'
            : 'translateX(0)';
        }
      }
    });
  });
});