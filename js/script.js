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
// MODAL FATOS
let modalFatos = document.querySelector(".didUknow");

// VERIFICADOR GERAL
let ativo = false;

// PARTE PLANETAS GERAL
let mercurio = document.querySelector("#mercurio");
let venus = document.querySelector("#venus");
let terra = document.querySelector("#terra");
let marte = document.querySelector("#marte");
let jupiter = document.querySelector("#jupiter");
let saturno = document.querySelector("#saturno");
let urano = document.querySelector("#urano");
let netuno = document.querySelector("#netuno");

mercurio.onclick = apareceMercurio;
venus.onclick = apareceVenus;
terra.onclick = apareceTerra;
marte.onclick = apareceMarte;
jupiter.onclick = apareceJupiter;
saturno.onclick = apareceSaturno;
urano.onclick = apareceUrano;
netuno.onclick = apareceNetuno;

// FUNÇAÕ PRA APARECER MODAL

function apareceMercurio() {
    modalFatos.classList.toggle("aparece");
    modalFatos.classList.toggle("didUknow");
    if (document.querySelector(".mercury").style.display == ("flex")) {
        document.querySelector(".mercury").style.display = ("none");
        ativo = false;
    }
    else {
        document.querySelector(".mercury").style.display = ("flex");
        ativo = true;
    }
}

function apareceVenus() {
    modalFatos.classList.toggle("aparece");
    modalFatos.classList.toggle("didUknow");
    if (document.querySelector(".venus").style.display == ("flex")) {
        document.querySelector(".venus").style.display = ("none");
        ativo = false;
    }
    else {
        document.querySelector(".venus").style.display = ("flex");
        ativo = true;
    }
}

function apareceTerra() {
    modalFatos.classList.toggle("aparece");
    modalFatos.classList.toggle("didUknow");
    if (document.querySelector(".earth").style.display == ("flex")) {
        document.querySelector(".earth").style.display = ("none");
        ativo = false;
    }
    else {
        document.querySelector(".earth").style.display = ("flex");
        ativo = true;
    }
}

function apareceMarte() {
    modalFatos.classList.toggle("aparece");
    modalFatos.classList.toggle("didUknow");
    if (document.querySelector(".mars").style.display == ("flex")) {
        document.querySelector(".mars").style.display = ("none");
        ativo = false;
    }
    else {
        document.querySelector(".mars").style.display = ("flex");
        ativo = true;
    }
}

function apareceJupiter() {
    modalFatos.classList.toggle("aparece");
    modalFatos.classList.toggle("didUknow");
    if (document.querySelector(".jupiter").style.display == ("flex")) {
        document.querySelector(".jupiter").style.display = ("none");
        ativo = false;
    }
    else {
        document.querySelector(".jupiter").style.display = ("flex");
        ativo = true;
    }
}

function apareceSaturno() {
    modalFatos.classList.toggle("aparece");
    modalFatos.classList.toggle("didUknow");
    if (document.querySelector(".saturn").style.display == ("flex")) {
        document.querySelector(".saturn").style.display = ("none");
        ativo = false;
    }
    else {
        document.querySelector(".saturn").style.display = ("flex");
        ativo = true;
    }
}

function apareceUrano() {
    modalFatos.classList.toggle("aparece");
    modalFatos.classList.toggle("didUknow");
    if (document.querySelector(".uranus").style.display == ("flex")) {
        document.querySelector(".uranus").style.display = ("none");
        ativo = false;
    }
    else {
        document.querySelector(".uranus").style.display = ("flex");
        ativo = true;
    }
}

function apareceNetuno() {
    modalFatos.classList.toggle("aparece");
    modalFatos.classList.toggle("didUknow");
    if (document.querySelector(".neptune").style.display == ("flex")) {
        document.querySelector(".neptune").style.display = ("none");
        ativo = false;
    }
    else {
        document.querySelector(".neptune").style.display = ("flex");
        ativo = true;
    }
}