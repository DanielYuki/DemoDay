// MODAL IMAGENS
let modal = document.getElementById('meuModal');
let img = document.getElementById('materias');
let modalImg = document.getElementById("img01");

img.onclick = function () {
    modal.style.display = "block";
    modalImg.src = img01.src;
    span.style.display = "block";
}

let span = document.getElementsByClassName("close")[0];

span.onclick = function () {
    modal.style.display = "none";
}
// -----

let menuHamburguer = document.querySelector(".hamburguer");

menuHamburguer.onclick = function () {
    menuHamburguer.classList.toggle("mudar");
}