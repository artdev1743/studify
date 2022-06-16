const openModalButton = document.getElementById('open-button');
const closeModalButton = document.getElementById('close-button');
const modal = document.getElementsByClassName('instructions-modal')[0];

const openModal = function () {
  console.log('nice');
  modal.style.display = 'block';
  body.style.overflow = 'hidden';
};

const closeModal = function () {
  modal.style.display = 'none';
  body.style.overflow = 'auto';
};

openModalButton.addEventListener('click', openModal);
closeModalButton.addEventListener('click', closeModal);
