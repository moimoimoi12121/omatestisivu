const menuToggle = document.getElementById('menuToggle');
const offCanvasMenu = document.getElementById('offCanvasMenu');
const menuLogoLink = document.getElementById('menuLogoLink');

menuToggle.addEventListener('click', () => {
    offCanvasMenu.classList.toggle('active');
    menuToggle.classList.toggle('active');
    
    // Vaihda aria-expanded tila
    const isExpanded = menuToggle.classList.contains('active');
    menuToggle.setAttribute('aria-expanded', isExpanded);
});

// Sulje valikko kun klikataan linkkiä
const menuLinks = document.querySelectorAll('.menu-link');
menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        offCanvasMenu.classList.remove('active');
        menuToggle.classList.remove('active');
    });
});

// Sulje valikko kun klikataan logoa valikon sisällä
menuLogoLink.addEventListener('click', () => {
        offCanvasMenu.classList.remove('active');
        menuToggle.classList.remove('active');
});
// Tailwind-asetukset
tailwind.config = {
  theme: {
    extend: {
      colors: {
        strongBlue: '#2563eb',
        strongDark: '#0f172a',
      }
    }
  }
}

// Skripti latautumisen varmistamiseksi
document.addEventListener('DOMContentLoaded', () => {
    console.log("Sivu ladattu ilman footeria.");
});


