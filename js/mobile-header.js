// Header auto-hide en móvil para ganar espacio y funcionalidad de menú hamburguesa
document.addEventListener('DOMContentLoaded', () => {
    // === HEADER AUTO-HIDE ===
    let lastScrollTop = 0;
    let isScrolling = false;
    const header = document.querySelector('.site-header');
    
    if (header) {
        function handleScroll() {
            if (!isScrolling) {
                window.requestAnimationFrame(() => {
                    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
                    
                    // Solo en móvil (pantallas menores a 768px)
                    if (window.innerWidth <= 768) {
                        if (scrollTop > lastScrollTop && scrollTop > 100) {
                            // Scroll hacia abajo - ocultar header
                            header.classList.add('hidden');
                        } else if (scrollTop < lastScrollTop) {
                            // Scroll hacia arriba - mostrar header
                            header.classList.remove('hidden');
                        }
                    } else {
                        // En desktop siempre visible
                        header.classList.remove('hidden');
                    }
                    
                    lastScrollTop = scrollTop;
                    isScrolling = false;
                });
            }
            isScrolling = true;
        }
        
        window.addEventListener('scroll', handleScroll, { passive: true });
        
        // Asegurar que el header sea visible al cambiar tamaño de ventana
        window.addEventListener('resize', () => {
            if (window.innerWidth > 768) {
                header.classList.remove('hidden');
            }
        });
    }
    
    // === MENÚ HAMBURGUESA ===
    const mobileToggle = document.querySelector('.mobile-menu-toggle');
    const mainNav = document.querySelector('.main-nav');
    
    if (mobileToggle && mainNav) {
        // Toggle del menú móvil
        mobileToggle.addEventListener('click', (e) => {
            e.stopPropagation();
            const isOpen = mobileToggle.getAttribute('aria-expanded') === 'true';
            
            mobileToggle.setAttribute('aria-expanded', !isOpen);
            mobileToggle.classList.toggle('active');
            mainNav.classList.toggle('mobile-open');
            document.body.classList.toggle('menu-open');
        });
        
        // Cerrar menú al hacer click en un enlace
        const navLinks = mainNav.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileToggle.setAttribute('aria-expanded', 'false');
                mobileToggle.classList.remove('active');
                mainNav.classList.remove('mobile-open');
                document.body.classList.remove('menu-open');
            });
        });
        
        // Cerrar menú al hacer click fuera
        document.addEventListener('click', (e) => {
            if (!mobileToggle.contains(e.target) && !mainNav.contains(e.target)) {
                mobileToggle.setAttribute('aria-expanded', 'false');
                mobileToggle.classList.remove('active');
                mainNav.classList.remove('mobile-open');
                document.body.classList.remove('menu-open');
            }
        });
    }
});