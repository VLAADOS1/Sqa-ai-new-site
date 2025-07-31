document.addEventListener('DOMContentLoaded', function() {
    const carousels = document.querySelectorAll('.carousel');
    
    carousels.forEach(carousel => {
        const cards = carousel.querySelectorAll('.card');
        const cardWidth = 150;
        const gap = 15;
        let currentPosition = 0;
        let maxPosition = (cards.length * (cardWidth + gap)) - carousel.parentElement.offsetWidth;
        let startX, startY;
        let isHorizontalDrag = false;
        let isVerticalDrag = false;
        let initialTransform = 0;
        let isDragging = false;

        const friction = 0.94;        
        const wheelSensitivity = 0.15;
        const touchSensitivity = 0.5;  
        const maxVelocity = 100;       
        const snapBackStrength = 0.15;

        let scrollVelocity = 0;
        let lastScrollTime = 0;
        let lastScrollPosition = 0;
        let inertiaAnimationId = null;
        let isScrolling = false;
        let isTouchEvent = false;

        carousel.addEventListener('mousedown', handleDragStart);
        document.addEventListener('mousemove', handleDragMove);
        document.addEventListener('mouseup', handleDragEnd);
        carousel.addEventListener('wheel', handleWheel, { passive: false });

        carousel.addEventListener('touchstart', function(e) {
            isTouchEvent = true;
            handleDragStart(e);
        }, { passive: true });
        
        document.addEventListener('touchmove', handleDragMove, { passive: false });
        document.addEventListener('touchend', handleDragEnd);

        function handleDragStart(e) {
            const clientX = e.clientX || e.touches[0].clientX;
            const clientY = e.clientY || e.touches[0].clientY;
            
            startX = clientX;
            startY = clientY;
            initialTransform = currentPosition;
            isHorizontalDrag = false;
            isVerticalDrag = false;
            isDragging = true;
            
            carousel.style.transition = 'none';
            carousel.style.cursor = 'grabbing';
            
            stopInertia();
        }

        function handleDragMove(e) {
            if (!isDragging) return;
            
            const clientX = e.clientX || e.touches[0].clientX;
            const clientY = e.clientY || e.touches[0].clientY;
            const dx = clientX - startX;
            const dy = clientY - startY;

            if (!isHorizontalDrag && !isVerticalDrag) {
                if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 5) {
                    isHorizontalDrag = true;
                    e.preventDefault();
                } else if (Math.abs(dy) > Math.abs(dx) && Math.abs(dy) > 5) {
                    isVerticalDrag = true;
                    return;
                }
            }

            if (isHorizontalDrag) {
                const moveX = dx * (isTouchEvent ? touchSensitivity : 1);
                let newPosition = initialTransform + moveX;

                if (newPosition > 0) {
                    newPosition *= 0.6;
                } else if (newPosition < -maxPosition && maxPosition > 0) {
                    newPosition = -maxPosition + (newPosition + maxPosition) * 0.6;
                }
                
                currentPosition = newPosition;
                carousel.style.transform = `translateX(${currentPosition}px)`;

                const now = Date.now();
                const deltaTime = now - lastScrollTime;
                if (deltaTime > 0) {
                    scrollVelocity = (currentPosition - lastScrollPosition) / deltaTime * 800;
                    lastScrollPosition = currentPosition;
                    lastScrollTime = now;

                    scrollVelocity = Math.max(-maxVelocity, Math.min(maxVelocity, scrollVelocity));
                }

                e.preventDefault();
            }
        }

        function handleDragEnd() {
            if (isHorizontalDrag) {
                carousel.style.cursor = '';

                if (isTouchEvent) {
                    scrollVelocity *= 0.5;
                }
                
                if (currentPosition > 0 || (currentPosition < -maxPosition && maxPosition > 0)) {
                    carousel.style.transition = 'transform 0.5s cubic-bezier(0.2, 0.8, 0.2, 1)';
                    if (currentPosition > 0) currentPosition = 0;
                    if (currentPosition < -maxPosition && maxPosition > 0) currentPosition = -maxPosition;
                    carousel.style.transform = `translateX(${currentPosition}px)`;
                } else if (Math.abs(scrollVelocity) > 2) {
                    startInertia();
                } else {
                    carousel.style.transition = 'transform 0.3s ease';
                }
            }
            
            isDragging = false;
            isTouchEvent = false;
            startX = null;
            startY = null;
            isHorizontalDrag = false;
            isVerticalDrag = false;
        }

        function handleWheel(e) {
            e.preventDefault();
            
            const now = Date.now();
            const deltaTime = now - lastScrollTime;
            lastScrollTime = now;

            scrollVelocity = e.deltaY * wheelSensitivity * (deltaTime > 0 ? 500 / Math.max(deltaTime, 16) : 1);
            scrollVelocity = Math.max(-maxVelocity * 0.5, Math.min(maxVelocity * 0.5, scrollVelocity));
            
            stopInertia();
            
            if (!isScrolling) {
                isScrolling = true;
                startInertia();
            }
        }

        function startInertia() {
            carousel.style.transition = 'none';
            let lastFrameTime = Date.now();
            
            const animate = () => {
                const now = Date.now();
                const deltaTime = now - lastFrameTime;
                lastFrameTime = now;

                const currentFriction = isTouchEvent ? friction * 0.98 : friction;
                scrollVelocity *= Math.pow(currentFriction, deltaTime / 16);

                if (Math.abs(scrollVelocity) < 0.5) {
                    scrollVelocity = 0;
                    isScrolling = false;
                    carousel.style.transition = 'transform 0.4s ease';

                    if (currentPosition > 0 || (currentPosition < -maxPosition && maxPosition > 0)) {
                        carousel.style.transition = 'transform 0.5s cubic-bezier(0.2, 0.8, 0.2, 1)';
                        if (currentPosition > 0) currentPosition = 0;
                        if (currentPosition < -maxPosition && maxPosition > 0) currentPosition = -maxPosition;
                        carousel.style.transform = `translateX(${currentPosition}px)`;
                    }
                    return;
                }

                currentPosition += scrollVelocity * (deltaTime / 16) * (isTouchEvent ? 0.3 : 0.6);

                if (currentPosition > 0) {
                    currentPosition = Math.max(0, currentPosition - (currentPosition * snapBackStrength));
                    scrollVelocity *= 0.6;
                } else if (currentPosition < -maxPosition && maxPosition > 0) {
                    const overPull = -maxPosition - currentPosition;
                    currentPosition = Math.min(-maxPosition, currentPosition + (overPull * snapBackStrength));
                    scrollVelocity *= 0.6;
                }
                
                carousel.style.transform = `translateX(${currentPosition}px)`;
                
                inertiaAnimationId = requestAnimationFrame(animate);
            };
            
            inertiaAnimationId = requestAnimationFrame(animate);
        }

        function stopInertia() {
            if (inertiaAnimationId) {
                cancelAnimationFrame(inertiaAnimationId);
                inertiaAnimationId = null;
            }
            isScrolling = false;
        }

        window.addEventListener('resize', function() {
            maxPosition = (cards.length * (cardWidth + gap)) - carousel.parentElement.offsetWidth;
            if (currentPosition < -maxPosition && maxPosition > 0) {
                currentPosition = -maxPosition;
                carousel.style.transform = `translateX(${currentPosition}px)`;
            }
        });
    });
});