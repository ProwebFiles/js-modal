const modal = document.querySelector('.modal');
const showModal = document.querySelector('.open');
const bgModal = document.querySelector('.modal-bg');
const closeModal = document.querySelector('.close');

showModal.addEventListener('click', function(){
    modal.classList.add('open-modal');
    bgModal.style.display = 'block';
})

const closeElements = [closeModal, bgModal];

closeElements.forEach(close => {
    close.addEventListener('click', ()=>{
        modal.classList.remove('open-modal');
        bgModal.style.display = 'none';
    })
});