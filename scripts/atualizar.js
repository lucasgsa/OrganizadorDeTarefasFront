var textTokenAtual = document.getElementById("text_token_atual");

function atualizarTokenTela() {
    let stringResult = "Token atual: "+readToken();
    textTokenAtual.textContent = stringResult;
}

function atualizarTarefas() {
    mostraTarefas();
}
