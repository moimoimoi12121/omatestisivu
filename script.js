const marquee = document.querySelector('.tech-marquee-content');
let scrollAmount = 0;

function animateMarquee() {
    scrollAmount -= 1;
    if (Math.abs(scrollAmount) >= marquee.scrollWidth / 2) {
        scrollAmount = 0;
    }
    marquee.style.transform = `translateX(${scrollAmount}px)`;
    requestAnimationFrame(animateMarquee);
}

animateMarquee();

const heroTitle = document.querySelector('.hero-title');

window.addEventListener('load', () => {
    if (heroTitle) {
        heroTitle.style.opacity = '1';
        console.log('Main section ladattu.');
    }
    
document.addEventListener("DOMContentLoaded", function () {
    lucide.createIcons();
});
