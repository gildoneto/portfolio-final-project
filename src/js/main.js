// variables
const btnContact = document.querySelector('.gn-btn-contact');
const toggleModal = document.querySelectorAll('.gn-toggle-modal');
const overlay = document.querySelector('.gn-overlay');
const modalOrcamento = document.querySelector('#gn-modal-orcamento');

// page preloader
window.addEventListener('load', () => {
  const pagePreloader = document.querySelector('.gn-preloader');
  pagePreloader.classList.add('gn-fade-out');

  setTimeout(() => {
    pagePreloader.style.display = 'none';
  }, 2000);
});

// open/close contact info
btnContact.addEventListener('click', (e) => {
  const boxContact = document.querySelector('.gn-contact-info');
  boxContact.classList.toggle('gn-is-open');
  e.target.classList.toggle('gn-change-icon');
});

// open-close orçamento modal

toggleModal.forEach((element) => {
  element.addEventListener('click', () => {
    overlay.classList.toggle('gn-is-open');
    modalOrcamento.classList.toggle('gn-is-open');
    modalOrcamento.classList.toggle('gn-slide-top-in');
  });
});