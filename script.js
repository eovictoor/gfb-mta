function checkbox(){
    let campo = document.getElementById("userSenha")
    if(campo.type === "password"){
        //pass
    }
    else{
        campo.type = "password"
    }
    let valorSenha = document.getElementById("userSenha").value
    let imagem = document.querySelector("#img")
    if(valorSenha.length > 4){
        imagem.style.display = "inline"
    }else{
        imagem.style.display = "none"
    }
}

function checkSenha(){
    let Senha = document.getElementById("userSenha")
    if(Senha.type === "password"){
        Senha.type = "text"
    }else{
        Senha.type = "password"
    }
}