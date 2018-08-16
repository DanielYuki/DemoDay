// MODAL IMAGENS 1
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

//MODAL IMAGENS 2
let modal2 = document.getElementById('meuModal2');
let img2 = document.getElementById('materias2');
let modalImg2 = document.getElementById("img02");

img2.onclick = function () {
    modal2.style.display = "block";
    modalImg2.src = img02.src;
    span2.style.display = "block";
}

let span2 = document.getElementsByClassName("close")[1];

span2.onclick = function () {
    modal2.style.display = "none";
}
// --------------------
//HAMBURGUER FUNFA
let menuHamburguer = document.querySelector(".hamburguer");
let menuContent = document.querySelector(".conteudoMenu");
let menuInfo = document.querySelector(".informacoes");
let infoContent = document.querySelector(".conteudoInformacao");

menuHamburguer.onclick = function() {
    menuHamburguer.classList.toggle("mudar");
    menuContent.classList.toggle("opcoesMenu");
    infoContent.classList.remove("opcoesMenuInfo");
}

menuInfo.onclick = function() {
    infoContent.classList.toggle("opcoesMenuInfo");
}
//--------------------