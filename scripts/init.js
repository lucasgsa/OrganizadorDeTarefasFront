function checkFirstTime() {
    if (readToken() == null){
        defineToken(randomToken());
    }
}

function randomToken(){
    return Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 10);
}
function init(){
    checkFirstTime();
    atualizarTokenTela();
    atualizarTarefas();
}

init();
