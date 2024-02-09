const nome = document.querySelector("#nomeCompleto")

const txt = document.querySelector(".txtx")

function pegarNome(){
    console.log(nome.value)
    console.log(typeof(nome))
    // txt.innerHTML = "✔️"

    if(nome.value.length < 4){
        txt.innerHTML = "Digite o nome completo"
        txt.style.color ="red"
    } else {
        txt.innerHTML = "✔️"
    }
}