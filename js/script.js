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

//MODAI IMAGENS 3
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

menuInfo.onclick = function(e) {
    e.preventDefault();
    infoContent.classList.toggle("opcoesMenuInfo");
}
//--------------------


// MODAL FATOS
let modalFatos = document.querySelector(".didUknow");

// PARTE PLANETAS GERAL
let nomesMercurio = document.querySelector("#nomeMercurio");
let nomesVenus = document.querySelector("#nomeVenus");
let nomesTerra = document.querySelector("#nomeTerra");
let nomesMarte = document.querySelector("#nomeMarte");
let nomesJupiter = document.querySelector("#nomeJupiter");
let nomesSaturno = document.querySelector("#nomeSaturno");
let nomesUrano = document.querySelector("#nomeUrano");
let nomesNetuno = document.querySelector("#nomeNetuno");

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
let ativo = false

function remover() {
    document.querySelector(".mercury").style.display = ("none");
    document.querySelector(".venus").style.display = ("none");
    document.querySelector(".earth").style.display = ("none");
    document.querySelector(".mars").style.display = ("none");
    document.querySelector(".jupiter").style.display = ("none");
    document.querySelector(".saturn").style.display = ("none");
    document.querySelector(".uranus").style.display = ("none");
    document.querySelector(".neptune").style.display = ("none");
    modalFatos.classList.remove("aparece");

    mercurio.style.transform = ("scale(1)");
    venus.style.transform = ("scale(1)");
    terra.style.transform = ("scale(1)");
    marte.style.transform = ("scale(1)");
    jupiter.style.transform = ("scale(1)");
    saturno.style.transform = ("scale(1)");
    urano.style.transform = ("scale(1)");
    netuno.style.transform = ("scale(1)");

    nomesMercurio.style.transform = ("scale(1)");
    nomesVenus.style.transform = ("scale(1)");
    nomesTerra.style.transform = ("scale(1)");
    nomesMarte.style.transform = ("scale(1)");
    nomesJupiter.style.transform = ("scale(1)");
    nomesSaturno.style.transform = ("scale(1)");
    nomesUrano.style.transform = ("scale(1)");
    nomesNetuno.style.transform = ("scale(1)");

    ativo = false;
}

function apareceMercurio() {   
    if(ativo == false){
        modalFatos.classList.add("aparece");
        document.querySelector(".mercury").style.display = ("flex");
        mercurio.style.transform = ("scale(1.2)");
        nomesMercurio.style.transform = ("scale(0)");
        ativo = true;
    }
    else{
        remover();
    }
}

function apareceVenus() {
    if(ativo == false){
        modalFatos.classList.add("aparece");
        document.querySelector(".venus").style.display = ("flex");
        venus.style.transform = ("scale(1.2)");
        nomesVenus.style.transform = ("scale(0)");
        ativo = true;
    }
    else{
        remover();
    }
}

function apareceTerra() {
    if(ativo == false){
        modalFatos.classList.add("aparece");
        document.querySelector(".earth").style.display = ("flex");
        terra.style.transform = ("scale(1.2)");
        nomesTerra.style.transform = ("scale(0)");
        ativo = true;
    }
    else{
        remover();
    }
}

function apareceMarte() {
    if(ativo == false){
        modalFatos.classList.add("aparece");
        document.querySelector(".mars").style.display = ("flex");
        marte.style.transform = ("scale(1.2)");
        nomesMarte.style.transform = ("scale(0)");
        ativo = true;
    }
    else{
        remover();
    }
}

function apareceJupiter() {
    if(ativo == false){
        modalFatos.classList.add("aparece");
        document.querySelector(".jupiter").style.display = ("flex");
        jupiter.style.transform = ("scale(1.2)");
        nomesJupiter.style.transform = ("scale(0)");
        ativo = true;
    }
    else{
        remover();
    }
}

function apareceSaturno() {
    if(ativo == false){
        modalFatos.classList.add("aparece");
        document.querySelector(".saturn").style.display = ("flex");
        saturno.style.transform = ("scale(1.2)");
        nomesSaturno.style.transform = ("scale(0)");
        ativo = true;
    }
    else{
        remover();
    }
}

function apareceUrano() {
    if(ativo == false){
        modalFatos.classList.add("aparece");
        document.querySelector(".uranus").style.display = ("flex");
        urano.style.transform = ("scale(1.2)");
        nomesUrano.style.transform = ("scale(0)");
        ativo = true;
    }
    else{
        remover();
    }
}

function apareceNetuno() {
    if(ativo == false){
        modalFatos.classList.add("aparece");
        document.querySelector(".neptune").style.display = ("flex");
        netuno.style.transform = ("scale(1.2)");
        nomesNetuno.style.transform = ("scale(0)");
        ativo = true;
    }
    else{
        remover();
    }
}
//-----------------------------------