// Abrir e fechar modal dos Termos
const abrirModal = document.getElementById("abrir-termos");
const fecharModal = document.getElementById("fechar-modal");
const modal = document.getElementById("modal-termos");

abrirModal.addEventListener("click", function (e) {
e.preventDefault();
modal.style.display = "block";
});

fecharModal.addEventListener("click", function () {
modal.style.display = "none";
});

window.addEventListener("click", function (e) {
if (e.target === modal) {
modal.style.display = "none";
}
});
