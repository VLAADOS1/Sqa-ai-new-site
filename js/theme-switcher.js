function toggleTheme() {
    const currentTheme = localStorage.getItem('theme') || 'light';
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    
    localStorage.setItem('theme', newTheme);
    applyTheme(newTheme);
    updateThemeButtonText(newTheme);
    toggleThemeSpecificElements(newTheme);
}

function applyTheme(theme) {
    const darkStyle = document.getElementById('dark-style');
    const darkNavigation = document.getElementById('dark-navigation');
    const darkPersonalizstion = document.getElementById('dark-personalization');
    const darkSelectClothes = document.getElementById('dark-select-clothes');
    const darkSelectFilters = document.getElementById('dark-select-filters');
    const darkSelectedClothes = document.getElementById('dark-selected-clothes');
    const darkHelp = document.getElementById('dark-help');
    const darkBalance = document.getElementById('dark-balance');
    const darkCreateAgent = document.getElementById('dark-create-agent');
    const darkChangeAgent = document.getElementById('dark-change-agent');
    const darkLocalization = document.getElementById('dark-localization');
    const darkPhotoMaster = document.getElementById('dark-photo-master');
    const darkSelectHats = document.getElementById('dark-select-hats');
    const darkSelectHair = document.getElementById('dark-select-hair');
    const darkSelectShoes = document.getElementById('dark-select-shoes');
    const darkSelectDecoration = document.getElementById('dark-select-decoration');
    const darkSelectMakeUp = document.getElementById('dark-select-makeup');
    const darkPolitika = document.getElementById('dark-politika');
    const darkManual = document.getElementById('dark-manual');
    const darkUpgrade = document.getElementById('dark-upgrade');
    const darkFormat = document.getElementById('dark-format');
    const darkUpload = document.getElementById('dark-upload');
    const darkUpload2 = document.getElementById('dark-upload-2');
    const darkUpload3 = document.getElementById('dark-upload-3');
    const darkUpload4 = document.getElementById('dark-upload-4');
    const darkProfil = document.getElementById('dark-profil');
    
    if (theme === 'dark') {
        if (!darkStyle && document.querySelector('link[href="/css/style.css"]')) {
            const link = document.createElement('link');
            link.id = 'dark-style';
            link.rel = 'stylesheet';
            link.href = '/css/dark-theme/dark-style.css';
            document.head.appendChild(link);
        }
        
        if (!darkNavigation && document.querySelector('link[href="/css/navigation.css"]')) {
            const link = document.createElement('link');
            link.id = 'dark-navigation';
            link.rel = 'stylesheet';
            link.href = '/css/dark-theme/dark-navigation.css';
            document.head.appendChild(link);
        }

        if (!darkNavigation && document.querySelector('link[href="/css/personalization.css"]')) {
            const link = document.createElement('link');
            link.id = 'dark-personalization';
            link.rel = 'stylesheet';
            link.href = '/css/dark-theme/dark-personalization.css';
            document.head.appendChild(link);
        }

        if (!darkSelectClothes && document.querySelector('link[href="/css/select-clothes.css"]')) {
            const link = document.createElement('link');
            link.id = 'dark-select-clothes';
            link.rel = 'stylesheet';
            link.href = '/css/dark-theme/dark-select-clothes.css';
            document.head.appendChild(link);
        }

        if (!darkSelectFilters && document.querySelector('link[href="/css/select-filters.css"]')) {
            const link = document.createElement('link');
            link.id = 'dark-select-filters';
            link.rel = 'stylesheet';
            link.href = '/css/dark-theme/dark-select-filters.css';
            document.head.appendChild(link);
        }

        if (!darkSelectedClothes && document.querySelector('link[href="/css/selected-clothes.css"]')) {
            const link = document.createElement('link');
            link.id = 'dark-selected-clothes';
            link.rel = 'stylesheet';
            link.href = '/css/dark-theme/dark-selected-clothes.css';
            document.head.appendChild(link);
        }

        if (!darkHelp && document.querySelector('link[href="/css/help.css"]')) {
            const link = document.createElement('link');
            link.id = 'dark-help';
            link.rel = 'stylesheet';
            link.href = '/css/dark-theme/dark-help.css';
            document.head.appendChild(link);
        }

        if (!darkBalance && document.querySelector('link[href="/css/balance.css"]')) {
            const link = document.createElement('link');
            link.id = 'dark-balance';
            link.rel = 'stylesheet';
            link.href = '/css/dark-theme/dark-balance.css';
            document.head.appendChild(link);
        }

        if (!darkCreateAgent && document.querySelector('link[href="/css/create-agent.css"]')) {
            const link = document.createElement('link');
            link.id = 'dark-create-agent';
            link.rel = 'stylesheet';
            link.href = '/css/dark-theme/dark-create-agent.css';
            document.head.appendChild(link);
        }

        if (!darkChangeAgent && document.querySelector('link[href="/css/change-agent.css"]')) {
            const link = document.createElement('link');
            link.id = 'dark-change-agent';
            link.rel = 'stylesheet';
            link.href = '/css/dark-theme/dark-change-agent.css';
            document.head.appendChild(link);
        }

        if (!darkLocalization && document.querySelector('link[href="/css/localization.css"]')) {
            const link = document.createElement('link');
            link.id = 'dark-localization';
            link.rel = 'stylesheet';
            link.href = '/css/dark-theme/dark-localization.css';
            document.head.appendChild(link);
        }

        if (!darkPhotoMaster && document.querySelector('link[href="/css/photo-master.css"]')) {
            const link = document.createElement('link');
            link.id = 'dark-photo-master';
            link.rel = 'stylesheet';
            link.href = '/css/dark-theme/dark-photo-master.css';
            document.head.appendChild(link);
        }

        if (!darkSelectHats && document.querySelector('link[href="/css/select-hats.css"]')) {
            const link = document.createElement('link');
            link.id = 'dark-select-hats';
            link.rel = 'stylesheet';
            link.href = '/css/dark-theme/dark-select-hats.css';
            document.head.appendChild(link);
        }

        if (!darkSelectHair && document.querySelector('link[href="/css/select-hair.css"]')) {
            const link = document.createElement('link');
            link.id = 'dark-select-hair';
            link.rel = 'stylesheet';
            link.href = '/css/dark-theme/dark-select-hair.css';
            document.head.appendChild(link);
        }

        if (!darkSelectShoes && document.querySelector('link[href="/css/select-shoes.css"]')) {
            const link = document.createElement('link');
            link.id = 'dark-select-shoes';
            link.rel = 'stylesheet';
            link.href = '/css/dark-theme/dark-select-shoes.css';
            document.head.appendChild(link);
        }

        if (!darkSelectDecoration && document.querySelector('link[href="/css/select-decoration.css"]')) {
            const link = document.createElement('link');
            link.id = 'dark-select-decoration';
            link.rel = 'stylesheet';
            link.href = '/css/dark-theme/dark-select-decoration.css';
            document.head.appendChild(link);
        }

        if (!darkSelectMakeUp && document.querySelector('link[href="/css/select-makeup.css"]')) {
            const link = document.createElement('link');
            link.id = 'dark-select-makeup';
            link.rel = 'stylesheet';
            link.href = '/css/dark-theme/dark-select-makeup.css';
            document.head.appendChild(link);
        }

        if (!darkPolitika && document.querySelector('link[href="/css/politika.css"]')) {
            const link = document.createElement('link');
            link.id = 'dark-politika';
            link.rel = 'stylesheet';
            link.href = '/css/dark-theme/dark-politika.css';
            document.head.appendChild(link);
        }

        if (!darkManual && document.querySelector('link[href="/css/manual.css"]')) {
            const link = document.createElement('link');
            link.id = 'dark-manual';
            link.rel = 'stylesheet';
            link.href = '/css/dark-theme/dark-manual.css';
            document.head.appendChild(link);
        }

        if (!darkUpgrade && document.querySelector('link[href="/css/upgrade.css"]')) {
            const link = document.createElement('link');
            link.id = 'dark-upgrade';
            link.rel = 'stylesheet';
            link.href = '/css/dark-theme/dark-upgrade.css';
            document.head.appendChild(link);
        }

        if (!darkFormat && document.querySelector('link[href="/css/format.css"]')) {
            const link = document.createElement('link');
            link.id = 'dark-format';
            link.rel = 'stylesheet';
            link.href = '/css/dark-theme/dark-format.css';
            document.head.appendChild(link);
        }

        if (!darkUpload && document.querySelector('link[href="/css/upload.css"]')) {
            const link = document.createElement('link');
            link.id = 'dark-upload';
            link.rel = 'stylesheet';
            link.href = '/css/dark-theme/dark-upload.css';
            document.head.appendChild(link);
        }

        if (!darkUpload2 && document.querySelector('link[href="/css/upload-2.css"]')) {
            const link = document.createElement('link');
            link.id = 'dark-upload-2';
            link.rel = 'stylesheet';
            link.href = '/css/dark-theme/dark-upload-2.css';
            document.head.appendChild(link);
        }

        if (!darkUpload3 && document.querySelector('link[href="/css/upload-3.css"]')) {
            const link = document.createElement('link');
            link.id = 'dark-upload-3';
            link.rel = 'stylesheet';
            link.href = '/css/dark-theme/dark-upload-3.css';
            document.head.appendChild(link);
        }

        if (!darkUpload4 && document.querySelector('link[href="/css/upload-4.css"]')) {
            const link = document.createElement('link');
            link.id = 'dark-upload-4';
            link.rel = 'stylesheet';
            link.href = '/css/dark-theme/dark-upload-4.css';
            document.head.appendChild(link);
        }

        if (!darkProfil && document.querySelector('link[href="/css/profil.css"]')) {
            const link = document.createElement('link');
            link.id = 'dark-profil';
            link.rel = 'stylesheet';
            link.href = '/css/dark-theme/dark-profil.css';
            document.head.appendChild(link);
        }

    } else {
        if (darkStyle) darkStyle.remove();
        if (darkNavigation) darkNavigation.remove();
        if (darkPersonalizstion) darkPersonalizstion.remove();
        if (darkSelectClothes) darkSelectClothes.remove();
        if (darkSelectFilters) darkSelectFilters.remove();
        if (darkSelectedClothes) darkSelectedClothes.remove();
        if (darkHelp) darkHelp.remove();
        if (darkBalance) darkBalance.remove();
        if (darkCreateAgent) darkCreateAgent.remove();
        if (darkChangeAgent) darkChangeAgent.remove();
        if (darkLocalization) darkLocalization.remove();
        if (darkPhotoMaster) darkPhotoMaster.remove();
        if (darkSelectHats) darkSelectHats.remove();
        if (darkSelectHair) darkSelectHair.remove();
        if (darkSelectShoes) darkSelectShoes.remove();
        if (darkSelectDecoration) darkSelectDecoration.remove();
        if (darkSelectMakeUp) darkSelectMakeUp.remove();
        if (darkPolitika) darkPolitika.remove();
        if (darkManual) darkManual.remove();
        if (darkUpgrade) darkUpgrade.remove();
        if (darkFormat) darkFormat.remove();
        if (darkUpload) darkUpload.remove();
        if (darkUpload2) darkUpload2.remove();
        if (darkUpload3) darkUpload3.remove();
        if (darkUpload4) darkUpload4.remove();
        if (darkProfil) darkProfil.remove();
    }
}

function updateThemeButtonText(theme) {
    const themeBtn = document.querySelector('.theme-btn');
    if (themeBtn) {
        const themeText = themeBtn.querySelector('.theme-text');
        if (themeText) {
            themeText.textContent = theme === 'dark' ? 'Сменить тему на дневную' : 'Сменить тему на ночную';
        }
        
        const themeIcon = themeBtn.querySelector('.theme-icon');
        if (themeIcon) {
            themeIcon.src = theme === 'dark' ? '/images/icons/sun.png' : '/images/icons/moon-stars-svgrepo-com.png';
        }
    }
}

function toggleThemeSpecificElements(theme) {
    const lightElements = document.querySelectorAll('[id^="light-"]');
    const darkElements = document.querySelectorAll('[id^="dark-"]');
    
    if (theme === 'dark') {
        lightElements.forEach(el => el.style.display = 'none');
        darkElements.forEach(el => el.style.display = 'block');
    } else {
        lightElements.forEach(el => el.style.display = 'block');
        darkElements.forEach(el => el.style.display = 'none');
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    applyTheme(savedTheme);
    toggleThemeSpecificElements(savedTheme);
    
    const themeBtn = document.querySelector('.theme-btn');
    if (themeBtn) {
        themeBtn.addEventListener('click', toggleTheme);
        updateThemeButtonText(savedTheme);
    }
});