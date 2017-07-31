;(() => {
    function showMenu(event) {


        this.classList.toggle("ba-hamburger--open");
        this.parentNode.classList.toggle("ba-header__menu--open");

    }

    document.addEventListener('DOMContentLoaded',() => {
        document.querySelector('#hamburger').addEventListener('click', showMenu)

    });
})();
