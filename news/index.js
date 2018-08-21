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

menuInfo.onclick = function(e) {
    e.preventDefault();
    infoContent.classList.toggle("opcoesMenuInfo");
}
// ___________SLIDE________________
var myIndex = 0;
carousel();

function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
       x[i].style.display = "none";  
    }
    myIndex++;
    if (myIndex > x.length) {myIndex = 1}    
    x[myIndex-1].style.display = "block";  
    setTimeout(carousel, 7000);}
// ___________SLIDE________________

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

// MODAL IMAGENS 2

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

// MODAL IMAGENS 3

let modal3 = document.getElementById('meuModal3');
let img3 = document.getElementById('materias3');
let modalImg3 = document.getElementById("img03");

img3.onclick = function () {
    modal3.style.display = "block";
    modalImg3.src = img03.src;
    span3.style.display = "block";
}

let span3 = document.getElementsByClassName("close")[2];

span3.onclick = function () {
    modal3.style.display = "none";
}

// MODAL IMAGENS 4

let modal4 = document.getElementById('meuModal4');
let img4 = document.getElementById('materias4');
let modalImg4 = document.getElementById("img04");

img4.onclick = function () {
    modal4.style.display = "block";
    modalImg4.src = img04.src;
    span4.style.display = "block";
}

let span4 = document.getElementsByClassName("close")[3];

span4.onclick = function () {
    modal4.style.display = "none";
}

// MODAL IMAGENS 5

let modal5 = document.getElementById('meuModal5');
let img5 = document.getElementById('materias5');
let modalImg5 = document.getElementById("img05");

img5.onclick = function () {
    modal5.style.display = "block";
    modalImg5.src = img05.src;
    span5.style.display = "block";
}

let span5 = document.getElementsByClassName("close")[4];

span5.onclick = function () {
    modal5.style.display = "none";
}

// MODAL IMAGENS 6

let modal6 = document.getElementById('meuModal6');
let img6 = document.getElementById('materias6');
let modalImg6 = document.getElementById("img06");

img6.onclick = function () {
    modal6.style.display = "block";
    modalImg6.src = img06.src;
    span6.style.display = "block";
}

let span6 = document.getElementsByClassName("close")[5];

span6.onclick = function () {
    modal6.style.display = "none";
}

// MODAL IMAGENS 7

let modal7 = document.getElementById('meuModal7');
let img7 = document.getElementById('materias7');
let modalImg7 = document.getElementById("img07");

img7.onclick = function () {
    modal7.style.display = "block";
    modalImg7.src = img07.src;
    span7.style.display = "block";
}

let span7 = document.getElementsByClassName("close")[6];

span7.onclick = function () {
    modal7.style.display = "none";
}

// MODAL IMAGENS 8

let modal8 = document.getElementById('meuModal8');
let img8 = document.getElementById('materias8');
let modalImg8 = document.getElementById("img08");

img8.onclick = function () {
    modal8.style.display = "block";
    modalImg8.src = img08.src;
    span8.style.display = "block";
}

let span8 = document.getElementsByClassName("close")[7];

span8.onclick = function () {
    modal8.style.display = "none";
}