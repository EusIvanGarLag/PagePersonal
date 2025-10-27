document.addEventListener('DOMContentLoaded', function () {
    const menuButton = document.getElementById('menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    const openIcon = document.getElementById('open-icon');
    const closeIcon = document.getElementById('close-icon');

    menuButton.addEventListener('click', function() {
        // Alternar la visibilidad del menú
        mobileMenu.classList.toggle('hidden');

        // Alternar los íconos (hamburguesa <-> X)
        openIcon.classList.toggle('hidden');
        closeIcon.classList.toggle('hidden');
    });
});