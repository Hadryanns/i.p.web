function senhaDiff() {
    var senha = senhaId.value
    var confirmarSenha = confirmId.value
    if (senha != confirmarSenha) {
        mensagem.innerHTML = "Senhas Diferentes"
        mensagem.classList.add("Vermelho")
        mensagem.classList.remove("Verde")
    }
    else {
        mensagem.innerHTML = "Senhas Corretas"
        mensagem.classList.add("Verde")
        mensagem.classList.remove("Vermelho")
    }

}
function VerSenha(id) {
    const input = document.getElementById(id)
    if (input.getAttribute('type') == 'password') {
        input.setAttribute('type', 'text');
    } else {
        input.setAttribute('type', 'password');
    }
}
