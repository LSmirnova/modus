document.addEventListener('DOMContentLoaded', () => {
    let addInput = document.querySelector('.ba-header__search-img');
    addInput.addEventListener('click', () => {
        addInput.parentNode.classList.toggle('ba-header__search--active')
    });

});


