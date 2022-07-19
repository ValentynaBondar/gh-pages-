(() => {
  const refs = {
    openModalMenu: document.querySelector('.menu-btn-open'),
    closeModalMenu: document.querySelector('.mob-menu__btn-close'),
    menu: document.querySelector('.mob-menu'),
    body: document.querySelector('body'),
    list: document.querySelector('.mob-menu__list'),
  };

  refs.openModalMenu.addEventListener('click', toggleMenu);
  refs.closeModalMenu.addEventListener('click', toggleMenu);
  refs.list.addEventListener('click', toggleMenu);

  function toggleMenu() {
    refs.menu.classList.toggle('is-hidden');
    refs.body.classList.toggle('no-scroll');
  }
})();

// ------------------------------- //

(() => {
  const showWindow = {
    openWindow: document.querySelector('.header-btn'),
    closeWindow: document.querySelector('.header-modal__btn-close'),
    Modal: document.querySelector('.header-backdrop'),
    body: document.querySelector('body'),
  };

  showWindow.openWindow.addEventListener('click', show);
  showWindow.closeWindow.addEventListener('click', show);

  function show() {
    showWindow.Modal.classList.toggle('is-hidden');
    showWindow.body.classList.toggle('no-scroll');
  }
})();

// --------------------------------- //

(() => {
  const closeMenu = {
    openWindowMobil: document.querySelector('.mob-menu__btn'),
    menu: document.querySelector('.mob-menu'),
    Modal: document.querySelector('.header-backdrop'),
    menuMob: document.querySelector('.mob-menu'),
  };

  closeMenu.openWindowMobil.addEventListener('click', showClose);

  function showClose() {
    closeMenu.Modal.classList.toggle('is-hidden');
    closeMenu.menuMob.classList.toggle('is-hidden');
  }
})();
