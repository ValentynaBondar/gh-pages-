(() => {
  const refs = {
    openModalBtn: document.querySelector('.header-btn, .mob-menu__btn'),
    closeModalBtn: document.querySelector('.header-modal__btn-close'),
    Modal: document.querySelector('.header-backdrop'),
    body: document.querySelector('body'),
  };

  refs.openModalBtn.addEventListener('click', toggleMenu);
  refs.closeModalBtn.addEventListener('click', toggleMenu);

  function toggleMenu() {
    refs.Modal.classList.toggle('is-hidden');
    refs.body.classList.toggle('no-scroll');
  }
})();
