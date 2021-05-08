function deleteTarefa(id){
    var request = new XMLHttpRequest();
    request.open('DELETE', 'https://organizadordetarefas.herokuapp.com/tarefa/?id='+id+'&token='+readToken());
    request.send();
    request.onload = function() {
        atualizarTarefas();
    }
}

function criarTarefa(nome, data, cor, detalhes) {
    let tarefaNova = {
        "color": cor,
        "data": data,
        "detalhes": detalhes,
        "nome": nome
    }
    if (data == null || data == "") {
        alert("Data inválida");
        return;
    }
    
    var request = new XMLHttpRequest();
    request.open('POST', 'https://organizadordetarefas.herokuapp.com/tarefa/?token='+readToken());
    request.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    request.send(JSON.stringify(tarefaNova));
    request.onload = function() {
        atualizarTarefas();
    }
    showAddDisplay();
    limparCampos();
}

function mostraTarefas() {
    var request = new XMLHttpRequest();
    request.open('GET', 'https://organizadordetarefas.herokuapp.com/tarefa/all/?token='+readToken());
    request.send();
    request.onload = function() {
        var data = JSON.parse(this.responseText);
        receivedTarefas(data);
    }
}

function receivedTarefas(tarefas) {
    if (Object.keys(tarefas).length === 0){
        var texto = document.createElement("p");
        texto.innerText = "Nenhuma tarefa adicionada.";
        document.querySelector('#containerTarefas').appendChild(texto);
    }
    for (let tarefa in tarefas){
        document.querySelector('#containerTarefas').appendChild(criarElementoTarefa(tarefas[tarefa]));
    }
}

function criarElementoTarefa(tarefa){
    var div = document.createElement("div");
    div.setAttribute("class", "tarefa");
    div.style.borderColor = tarefa['color'];

    var titulo = document.createElement("p");
    titulo.setAttribute("class", "titleTarefa");
    titulo.innerText = tarefa['nome'];

    var concluir = document.createElement("img");
    concluir.setAttribute("class", "concluirTarefa");
    concluir.setAttribute("src", "images/xButton.png");

    var superior = document.createElement("div");
    superior.setAttribute("class", "superiorTarefa");
    superior.appendChild(titulo);
    superior.appendChild(concluir);

    var detalhes = document.createElement("p");
    detalhes.setAttribute("class", "detalhesTarefa");
    detalhes.innerText = tarefa['detalhes'];

    var data = document.createElement("p");
    data.setAttribute("class", "dataTarefa");
    data.innerText = tarefa['data'];

    concluir.addEventListener('click', () => deleteTarefa(tarefa['id']));

    div.appendChild(superior);
    div.appendChild(detalhes);
    div.appendChild(data);

    return div;

}