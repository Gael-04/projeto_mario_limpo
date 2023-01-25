const botaoTrailer = document.querySelector('.botao_trailer');
const video = document.getElementById('video');
const link = video.src; 
const fecharModal = document.querySelector('.fechar_modal');
const modal = document.querySelector('.modal'); 

function alternarModal(){ 
    modal.classList.toggle('aberto');
};

botaoTrailer.addEventListener('click', () => {
    alternarModal(); 
    video.setAttribute('src', link); 
}); 

fecharModal.addEventListener('click', () => {
    alternarModal();
    video.setAttribute('src', '');
});