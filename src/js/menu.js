(() => {
  const refs = {
    openMenuBtn: document.querySelector('.menu-btn-open'),
    closeMenuBtn: document.querySelector('.mob-menu__btn-close'),
    menu: document.querySelector('.mob-menu'),
    body: document.querySelector('body'),
    list: document.querySelector('.mob-menu__list'),
  };

  refs.openMenuBtn.addEventListener('click', toggleMenu);
  refs.closeMenuBtn.addEventListener('click', toggleMenu);
  refs.list.addEventListener('click', toggleMenu);

  function toggleMenu() {
    refs.menu.classList.toggle('is-hidden');
    refs.body.classList.toggle('no-scroll');
  }
})();
