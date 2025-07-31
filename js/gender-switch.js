document.addEventListener('DOMContentLoaded', function() {
    const genderButtons = document.querySelectorAll('.gender-btn');
    const slider = document.querySelector('.gender-slider');

    document.querySelectorAll('[id="man"]').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.display = 'none';
    });

    function switchGender(isMale) {
        const currentGender = isMale ? 'man' : 'girl';
        const prevGender = isMale ? 'girl' : 'man';

        genderButtons.forEach(btn => {
            btn.classList.remove('active');
            if (btn.dataset.gender === currentGender) {
                btn.classList.add('active');
            }
        });

        slider.style.transform = isMale 
            ? 'translateX(calc(100% + 8px))' 
            : 'translateX(0)';

        const currentElements = document.querySelectorAll(`[id="${prevGender}"]`);
        const newElements = document.querySelectorAll(`[id="${currentGender}"]`);

        currentElements.forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(-20px)';
        });

        setTimeout(() => {
            currentElements.forEach(el => {
                el.style.display = 'none';
            });

            newElements.forEach(el => {
                if (el.classList.contains('settings-gender')) {
                    el.style.display = 'grid';
                } else if (el.classList.contains('carousel')) {
                    el.style.display = 'flex';
                } else {
                    el.style.display = 'block';
                }

                setTimeout(() => {
                    el.style.opacity = '1';
                    el.style.transform = 'translateY(0)';
                }, 50);
            });

            initGenerateAnimation();
        }, 300);
    }

    function initGenerateAnimation() {
        const buttonsConfig = {

        };
    }

    initGenerateAnimation();

    genderButtons.forEach(button => {
        button.addEventListener('click', function() {
            switchGender(this.dataset.gender === 'man');
        });

        button.addEventListener('mouseenter', function() {
            if (!this.classList.contains('active')) {
                slider.style.transform = this.dataset.gender === 'man' 
                    ? 'translateX(calc(10% + 8px)) scaleX(0.95)'
                    : 'translateX(90%) scaleX(0.95)';
            }
        });
        
        button.addEventListener('mouseleave', function() {
            if (!this.classList.contains('active')) {
                const activeBtn = document.querySelector('.gender-btn.active');
                slider.style.transform = activeBtn.dataset.gender === 'man'
                    ? 'translateX(calc(100% + 8px))'
                    : 'translateX(0)';
            }
        });
    });
});