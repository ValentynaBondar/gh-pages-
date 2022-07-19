(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-cream-open]'),
    closeModalBtn: document.querySelector('[data-modal-cream-close]'),
    modal: document.querySelector('[data-modal-cream]'),
    body: document.querySelector('body'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
    refs.body.classList.toggle('no-scroll');
  }
})();

(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-coffee-open]'),
    closeModalBtn: document.querySelector('[data-modal-coffee-close]'),
    modal: document.querySelector('[data-modal-coffee]'),
    body: document.querySelector('body'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
    refs.body.classList.toggle('no-scroll');
  }
})();

(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-milkshakes-open]'),
    closeModalBtn: document.querySelector('[data-modal-milkshakes-close]'),
    modal: document.querySelector('[data-modal-milkshakes]'),
    body: document.querySelector('body'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
    refs.body.classList.toggle('no-scroll');
  }
})();
