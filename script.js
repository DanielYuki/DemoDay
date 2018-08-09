let expand = document.querySelector(".topico");
let butaoFechar = document.querySelector(".close");
let expandOtherCase = document.querySelector("article")
let expandirVoltar = true;

expand.onclick = () => {
    if(expandirVoltar === true){
    expandOtherCase.classList.add("expande");
    butaoFechar.classList.add("desExpande");
    expandirVoltar = false;
    }
};

butaoFechar.onclick = () =>{
    if(expandirVoltar === false){
        expandOtherCase.classList.remove("expande");
        butaoFechar.classList.remove("desExpande");
        expandirVoltar = true;
    }
}