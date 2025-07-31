const filterMap = {
    btn1:  'filter_female_sakha',
    btn11: 'filter_male_sakha',
    btn2:  'filter_billionaire',
    btn12: 'filter_billionaire',
    btn3:  'filter_beach',
    btn13: 'filter_beach',
    btn4:  'filter_photoshoot',
    btn14: 'filter_photoshoot',
    btn5:  'filter_portrait',
    btn15: 'filter_portrait',
    btn6:  'filter_child',
    btn16: 'filter_child',
    btn7:  'filter_nature_spirit',
    btn17: 'filter_nature_spirit',
    btn8:  'filter_ufc',
    btn18: 'filter_ufc',
    btn9:  'filter_retro',
    btn19: 'filter_retro',
    btn10: 'filter_other_gender',
    btn20: 'filter_other_gender',
};

document.addEventListener('DOMContentLoaded', function() {
    const buttonsConfig = {
        'btn1': {
            images: [
                '/images/filter-bg2.png',
                '/images/filter-bg1.png',
                '/images/filter-bg2.png',
                '/images/filter-bg3.png',
                '/images/filter-bg4.png',
                '/images/filter-bg5.png',
                '/images/filter-bg6.png',
            ],
            interval: 3000
        },
        'btn4': {
            images: [
                '/images/filter-bg7.png',
                '/images/filter-bg8.png',
                '/images/filter-bg9.png',
                '/images/filter-bg10.png',
                '/images/filter-bg11.png',
            ],
            interval: 3000
        },
        'btn6': {
            images: [
                '/images/filter-bg12.png',
                '/images/filter-bg13.png',
                '/images/filter-bg14.png',
                '/images/filter-bg15.png',
                '/images/filter-bg16.png',
            ],
            interval: 3000
        },
        'btn10': {
            images: [
                '/images/filter-bg117.png',
                '/images/filter-bg118.png',
                '/images/filter-bg119.png',
                '/images/filter-bg120.png',
                '/images/filter-bg121.png',
            ],
            interval: 3000
        },
        'btn2': {
            images: [
                '/images/filter-bg22.png',
                '/images/filter-bg23.png',
                '/images/filter-bg24.png',
                '/images/filter-bg25.png',
                '/images/filter-bg26.png',
            ],
            interval: 3000
        },
        'btn3': {
            images: [
                '/images/filter-bg27.png',
                '/images/filter-bg28.png',
                '/images/filter-bg29.png',
                '/images/filter-bg30.png',
                '/images/filter-bg31.png',
            ],
            interval: 3000
        },
        'btn5': {
            images: [
                '/images/filter-bg32.png',
                '/images/filter-bg33.png',
                '/images/filter-bg34.png',
                '/images/filter-bg35.png',
                '/images/filter-bg36.png',
            ],
            interval: 3000
        },
        'btn7': {
            images: [
                '/images/filter-bg38.png',
                '/images/filter-bg37.png',
                '/images/filter-bg38.png',
                '/images/filter-bg39.png',
                '/images/filter-bg40.png',
                '/images/filter-bg41.png',
                '/images/filter-bg42.png',
                '/images/filter-bg43.png',
                '/images/filter-bg44.png',
            ],
            interval: 3000
        },
        'btn9': {
            images: [
                '/images/filter-bg45.png',
                '/images/filter-bg46.png',
                '/images/filter-bg47.png',
                '/images/filter-bg48.png',
                '/images/filter-bg49.png',
                '/images/filter-bg50.png',
            ],
            interval: 3000
        },
        'btn8': {
            images: [
                '/images/filter-bg51.png',
                '/images/filter-bg52.png',
                '/images/filter-bg53.png',
                '/images/filter-bg54.png',
                '/images/filter-bg55.png',
            ],
            interval: 3000
        },
        'btn11': {
            images: [
                '/images/filter-bg56.png',
                '/images/filter-bg57.png',
                '/images/filter-bg58.png',
                '/images/filter-bg59.png',
                '/images/filter-bg60.png',
                '/images/filter-bg61.png',
                '/images/filter-bg62.png',
            ],
            interval: 3000
        },
        'btn12': {
            images: [
                '/images/filter-bg63.png',
                '/images/filter-bg64.png',
                '/images/filter-bg65.png',
                '/images/filter-bg66.png',
                '/images/filter-bg67.png',
                '/images/filter-bg68.png',
                '/images/filter-bg69.png',
                '/images/filter-bg70.png',
            ],
            interval: 3000
        },
        'btn13': {
            images: [
                '/images/filter-bg71.png',
                '/images/filter-bg72.png',
                '/images/filter-bg73.png',
                '/images/filter-bg74.png',
                '/images/filter-bg75.png',
                '/images/filter-bg76.png',
            ],
            interval: 3000
        },
        'btn14': {
            images: [
                '/images/filter-bg77.png',
                '/images/filter-bg78.png',
                '/images/filter-bg79.png',
                '/images/filter-bg80.png',
                '/images/filter-bg81.png',
                '/images/filter-bg82.png',
                '/images/filter-bg83.png',
            ],
            interval: 3000
        },
        'btn15': {
            images: [
                '/images/filter-bg84.png',
                '/images/filter-bg85.png',
                '/images/filter-bg86.png',
                '/images/filter-bg87.png',
                '/images/filter-bg88.png',
                '/images/filter-bg89.png',
                '/images/filter-bg90.png',
                '/images/filter-bg91.png',
            ],
            interval: 3000
        },
        'btn16': {
            images: [
                '/images/filter-bg92.png',
                '/images/filter-bg93.png',
                '/images/filter-bg94.png',
                '/images/filter-bg95.png',
                '/images/filter-bg96.png',
            ],
            interval: 3000
        },
        'btn17': {
            images: [
                '/images/filter-bg97.png',
                '/images/filter-bg98.png',
                '/images/filter-bg99.png',
                '/images/filter-bg100.png',
                '/images/filter-bg101.png',
                '/images/filter-bg102.png',
                '/images/filter-bg103.png',
            ],
            interval: 3000
        },
        'btn18': {
            images: [
                '/images/filter-bg104.png',
                '/images/filter-bg105.png',
                '/images/filter-bg106.png',
                '/images/filter-bg107.png',
                '/images/filter-bg108.png',
                '/images/filter-bg109.png',
                '/images/filter-bg110.png',
            ],
            interval: 3000
        },
        'btn19': {
            images: [
                '/images/filter-bg111.png',
                '/images/filter-bg112.png',
                '/images/filter-bg113.png',
                '/images/filter-bg114.png',
                '/images/filter-bg115.png',
                '/images/filter-bg116.png',
            ],
            interval: 3000
        },
        'btn20': {
            images: [
                '/images/filter-bg17.png',
                '/images/filter-bg18.png',
                '/images/filter-bg19.png',
                '/images/filter-bg20.png',
                '/images/filter-bg21.png',
            ],
            interval: 3000
        },
    };

    function createBgLayer(imageUrl) {
        const layer = document.createElement('div');
        layer.className = 'bg-layer';
        layer.style.cssText = `
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-image: url(${imageUrl});
            background-size: cover;
            background-position: center 0%;
            transition: opacity 1s ease-in-out;
            will-change: opacity;
        `;
        return layer;
    }

    function animateTextChange(element, newText, withCoin = false) {
        return new Promise((resolve) => {
            element.style.transition = 'opacity 0.3s ease';
            element.style.opacity = '0';
            
            setTimeout(() => {
                if (withCoin) {
                    element.innerHTML = `
                        <button class="generate-btn">
                            <span class="generate-text">Генерировать - 1</span>
                            <img src="/images/coin.png" class="coin-icon">
                        </button>
                    `;
                } else {
                    element.textContent = newText;
                }
                element.style.opacity = '1';
                
                setTimeout(() => {
                    resolve();
                }, 300);
            }, 300);
        });
    }

    function handleGenerateClick(btnId) {
        const resultPage = buttonsConfig[btnId]?.resultPage || 'upload.html';
        
        const generateBtn = document.querySelector(`#${btnId} .generate-btn`);
        if (generateBtn) {
            generateBtn.style.transform = 'scale(0.95)';
            setTimeout(() => {
                generateBtn.style.transform = 'scale(1)';
                window.location.href = resultPage;
            }, 200);
        }
    }

    for (const [btnId, config] of Object.entries(buttonsConfig)) {
        const btn = document.getElementById(btnId);
        if (!btn) continue;

        const { images, interval } = config;
        if (!images || images.length === 0) continue;

        images.forEach(img => {
            const preloadImg = new Image();
            preloadImg.src = img;
        });

        let currentIndex = 0;
        let isAnimating = false;
        let intervalId;

        const bgContainer = document.createElement('div');
        bgContainer.className = 'bg-container';
        bgContainer.style.cssText = `
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            z-index: 0;
            overflow: hidden;
            transition: filter 0.5s ease, backdrop-filter 0.5s ease;
            will-change: filter, backdrop-filter;
        `;
        btn.insertBefore(bgContainer, btn.firstChild);

        const bgLayer1 = createBgLayer(images[0]);
        const bgLayer2 = createBgLayer(images[1 % images.length]);
        bgLayer2.style.opacity = '0';
        bgContainer.appendChild(bgLayer1);
        bgContainer.appendChild(bgLayer2);

        function changeBackground() {
            if (isAnimating || images.length <= 1) return;
            isAnimating = true;

            const nextIndex = (currentIndex + 1) % images.length;
            const activeLayer = bgLayer1.style.opacity === '1' ? bgLayer1 : bgLayer2;
            const nextLayer = activeLayer === bgLayer1 ? bgLayer2 : bgLayer1;

            nextLayer.style.backgroundImage = `url(${images[nextIndex]})`;
            nextLayer.style.opacity = '1';
            activeLayer.style.opacity = '0';

            setTimeout(() => {
                currentIndex = nextIndex;
                isAnimating = false;
            }, 1000);
        }

        setTimeout(() => changeBackground(), 100);

        function startAnimation() {
            clearInterval(intervalId);
            intervalId = setInterval(changeBackground, interval);
        }
        startAnimation();

        const textElement = btn.querySelector('.setting-text');
        const originalText = textElement.textContent;
        let isTextChanged = false;
        let generateBtnClickHandler = null;

        btn.addEventListener('mouseenter', () => {
            clearInterval(intervalId);
            btn.style.transform = 'scale(0.98)';
            bgContainer.style.filter = 'blur(4px)';
            bgContainer.style.backdropFilter = 'blur(4px)';
            
            if (!isTextChanged) {
                animateTextChange(textElement, originalText, true).then(() => {
                    const generateBtn = btn.querySelector('.generate-btn');
                    if (generateBtn) {
                        if (generateBtnClickHandler) {
                            generateBtn.removeEventListener('click', generateBtnClickHandler);
                        }
                        // <script src="/js/webapp.js"></script>

                        // generateBtnClickHandler = function(e) {
                        //     e.preventDefault();
                        //     e.stopPropagation();
                        //     // handleGenerateClick(btnId);
                            
                        // };
                        generateBtnClickHandler = function(e) {
                            e.preventDefault();
                            e.stopPropagation();

                            const filterKey = filterMap[btnId];
                            if (filterKey) {
                                send(filterKey);
                            }
                            console.log(`Filter ${filterKey} sent`);
                        };
                        
                        generateBtn.addEventListener('click', generateBtnClickHandler);
                    }
                });
                isTextChanged = true;
            }
        });

        btn.addEventListener('mouseleave', () => {
            btn.style.transform = 'scale(1)';
            bgContainer.style.filter = 'none';
            bgContainer.style.backdropFilter = 'none';
            startAnimation();
            
            if (isTextChanged) {
                animateTextChange(textElement, originalText, false);
                isTextChanged = false;
            }
        });

        document.addEventListener('visibilitychange', () => {
            if (document.hidden) {
                clearInterval(intervalId);
            } else {
                startAnimation();
            }
        });
    }

    if (!document.getElementById('dynamic-styles')) {
        const style = document.createElement('style');
        style.id = 'dynamic-styles';
        style.textContent = `
            .bg-container {
                transition: filter 0.5s ease, backdrop-filter 0.5s ease;
            }
            .bg-layer {
                transition: opacity 1s ease-in-out;
            }
            .setting-text {
                transition: opacity 0.3s ease;
                will-change: opacity;
                display: inline-flex;
                align-items: center;
            }
            .coin-icon {
                width: 15px;
                height: 15px;
                margin-left: 5px;
                vertical-align: middle;
            }
            .generate-btn {
                background: none;
                border: none;
                color: inherit;
                font: inherit;
                padding: 0;
                margin: 0;
                cursor: pointer;
                display: inline-flex;
                align-items: center;
                justify-content: center;
                transition: transform 0.2s ease;
            }
            .generate-text {
                font-size: 0.85em;
                transition: all 0.3s ease;
            }
            .setting-btn {
                position: relative;
                overflow: hidden;
            }
        `;
        document.head.appendChild(style);
    }
});