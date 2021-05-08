function checkFirstTime() {
    if (readToken() == null){
        defineToken("bem-vindo");
    }
}

function init(){
    checkFirstTime();
    atualizarTokenTela();
    atualizarTarefas();
}

init();
