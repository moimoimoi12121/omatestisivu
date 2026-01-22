document.addEventListener('DOMContentLoaded', function() {
    var menuToggle = document.getElementById('menuToggle');
    var offCanvasMenu = document.getElementById('offCanvasMenu');
    var menuLogoLink = document.getElementById('menuLogoLink');
    var menuLinks = document.querySelectorAll('.menu-link');

    // Valikon avaus ja sulku
    function toggleMenu() {
        offCanvasMenu.classList.toggle('active');
        menuToggle.classList.toggle('active');
        var isExpanded = menuToggle.classList.contains('active');
        menuToggle.setAttribute('aria-expanded', isExpanded);
    }

    menuToggle.addEventListener('click', toggleMenu);

    // Sulje valikko linkeistä
    menuLinks.forEach(function(link) {
        link.addEventListener('click', function() {
            offCanvasMenu.classList.remove('active');
            menuToggle.classList.remove('active');
            menuToggle.setAttribute('aria-expanded', 'false');
        });
    });

    if(menuLogoLink) {
        menuLogoLink.addEventListener('click', function() {
            offCanvasMenu.classList.remove('active');
            menuToggle.classList.remove('active');
            menuToggle.setAttribute('aria-expanded', 'false');
        });
    }

    console.log("Sivu ja skriptit ladattu.");
});
