
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