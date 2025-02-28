// Obtendo os elementos do DOM
const modal = document.getElementById("myModal");
const openModalButton = document.getElementById("openModal");
const closeModalButton = document.getElementById("closeModal");

// Abrir o modal
openModalButton.onclick = function() {
    modal.style.display = "block";
}

// Fechar o modal
closeModalButton.onclick = function() {
    modal.style.display = "none";
}

// Fechar o modal clicando fora dele
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}