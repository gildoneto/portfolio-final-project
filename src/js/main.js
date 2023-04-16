const btnContact = document.querySelector('.gn-btn-contact');

btnContact.addEventListener('click', (e) => {
  const boxContact = document.querySelector('.gn-contact-info');
  boxContact.classList.toggle('gn-is-open');
  e.target.classList.toggle('gn-change-icon');
});

