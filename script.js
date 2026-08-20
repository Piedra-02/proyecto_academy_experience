// Menú de navegación principal (hamburguesa).
// Mismo patrón accesible visto en la presentación de RDA3:
// aria-expanded se actualiza según el estado real del menú,
// y la visibilidad se controla agregando/quitando .is-open.
document.addEventListener('DOMContentLoaded', function () {
    var button = document.querySelector('#menu-toggle');
    var navigation = document.querySelector('#main-navigation');

    if (!button || !navigation) {
        return;
    }

    button.addEventListener('click', function () {
        navigation.classList.toggle('is-open');
        var isOpen = navigation.classList.contains('is-open');
        button.setAttribute('aria-expanded', isOpen);
    });

    // Cierra el menú si se hace clic fuera de él
    document.addEventListener('click', function (event) {
        var clickedInsideNav = navigation.contains(event.target);
        var clickedButton = button.contains(event.target);

        if (!clickedInsideNav && !clickedButton && navigation.classList.contains('is-open')) {
            navigation.classList.remove('is-open');
            button.setAttribute('aria-expanded', 'false');
        }
    });

    // Cierra el menú con la tecla Escape
    document.addEventListener('keydown', function (event) {
        if (event.key === 'Escape' && navigation.classList.contains('is-open')) {
            navigation.classList.remove('is-open');
            button.setAttribute('aria-expanded', 'false');
            button.focus();
        }
    });
});