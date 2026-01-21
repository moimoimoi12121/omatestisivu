document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menuToggle');
    const offCanvasMenu = document.getElementById('offCanvasMenu');
    const menuLogoLink = document.getElementById('menuLogoLink');
    const menuLinks = document.querySelectorAll('.menu-link');

    // Valikon avaus ja sulku
    const toggleMenu = () => {
        offCanvasMenu.classList.toggle('active');
        menuToggle.classList.toggle('active');
        const isExpanded = menuToggle.classList.contains('active');
        menuToggle.setAttribute('aria-expanded', isExpanded);
    };

    menuToggle.addEventListener('click', toggleMenu);

    // Sulje valikko linkeistä
    menuLinks.forEach(link => {
        link.addEventListener('click', () => {
            offCanvasMenu.classList.remove('active');
            menuToggle.classList.remove('active');
        });
    });

    if(menuLogoLink) {
        menuLogoLink.addEventListener('click', () => {
            offCanvasMenu.classList.remove('active');
            menuToggle.classList.remove('active');
        });
    }

    console.log("Sivu ja skriptit ladattu.");
});
