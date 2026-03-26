document.addEventListener('DOMContentLoaded', () => {
    // Scroll Reveal Animation
    const reveals = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, {
        threshold: 0.1
    });

    reveals.forEach(reveal => {
        observer.observe(reveal);
    });

    // Mobile Navigation Toggle
    const btn = document.getElementById('mobile-menu-btn');
    const icon = btn.querySelector('i');
    const overlay = document.getElementById('mobile-menu-overlay');
    const mobileLinks = document.querySelectorAll('.mobile-link');
    let isMenuOpen = false;

    function toggleMenu() {
        isMenuOpen = !isMenuOpen;
        if (isMenuOpen) {
            overlay.classList.remove('translate-y-full');
            overlay.classList.add('translate-y-0');
            if (icon) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-xmark');
            }
            document.body.style.overflow = 'hidden';
        } else {
            overlay.classList.remove('translate-y-0');
            overlay.classList.add('translate-y-full');
            if (icon) {
                icon.classList.remove('fa-xmark');
                icon.classList.add('fa-bars');
            }
            document.body.style.overflow = '';
        }
    }

    if (btn) btn.addEventListener('click', toggleMenu);

    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (isMenuOpen) toggleMenu();
        });
    });
});
