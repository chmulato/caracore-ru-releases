/**
 * Loja Cara Core RU — script compartilhado
 * Todas as páginas: index, download, licenca-uso, canal-feedback, manual-tecnico
 */
(function () {
    'use strict';
    // Scroll suave para âncoras (se houver)
    document.querySelectorAll('a[href^="#"]').forEach(function (a) {
        var id = a.getAttribute('href');
        if (id === '#') return;
        var el = document.querySelector(id);
        if (el) {
            a.addEventListener('click', function (e) {
                e.preventDefault();
                el.scrollIntoView({ behavior: 'smooth', block: 'start' });
            });
        }
    });
})();
