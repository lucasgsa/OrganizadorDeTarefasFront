var plusButton = document.getElementById('plusButton');
var criarTarefa = document.getElementById("criarTarefa");
var menuSensor = document.getElementById("sensorOff");
var menu = document.querySelector(".addMenu");
var header = document.querySelector("header");
var nomeTarefaAdd = document.getElementById('nomeTarefaAdd');
var detalhesTarefaAdd = document.getElementById('detalhesTarefaAdd');
var dataTarefaAdd = document.getElementById('dataTarefaAdd');
var colorTarefaAdd = document.getElementById('colorTarefaAdd');
var xButton = document.querySelector(".addMenu .menuTop img");

function getNome(){
    return nomeTarefaAdd.value;
}

function getColor(){
    return colorTarefaAdd.value;
}

function getDetalhes(){
    return detalhesTarefaAdd.value;
}

function getColor(){
    return colorTarefaAdd.value;
}

function getData(){
    return dataTarefaAdd.value;
}

function limparCampos(){
    nomeTarefaAdd.value = "";
    detalhesTarefaAdd.value = "";
}

function showAddDisplay(){
    if (!isMenuOpened()){
        menu.style.top = header.offsetHeight+"px";
    }
    else {
        menu.style.top = "-100%";
    }
}

function isMenuOpened(){
    return (menu.style.top != "-100%" & menu.style.top != "");
}

function enter(event){
    if (isMenuOpened() & event.keyCode == 13){
        criarTarefa.click();
    }
}

document.addEventListener("keyup", (event) => enter(event));

menuSensor.addEventListener('click', () => showAddDisplay());
criarTarefa.addEventListener('click', () => criarTarefa(getNome(), getData(), getColor(), getDetalhes()));
plusButton.addEventListener('click', () => showAddDisplay());
xButton.addEventListener('click', () => showAddDisplay());