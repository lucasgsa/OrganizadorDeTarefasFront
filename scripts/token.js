var buttonAcessToken = document.getElementById("button_select_token")
var textAcessToken = document.getElementById("text_box_select_token");

function onClickAcessToken(){
    let tempToken = textAcessToken.value;
    defineToken(tempToken);
    atualizarTokenTela();
}

function readToken() {
    return localStorage.getItem('acess-token');
}

function defineToken(newToken) {
    localStorage.setItem('acess-token', newToken);
}

buttonAcessToken.addEventListener("click", () => onClickAcessToken());