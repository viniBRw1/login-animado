document.getElementById('asinar').addEventListener('click' , login)
document.getElementById('sing-up').addEventListener('click' , cadastro)

let bod = document.querySelector("body")

function login(){
    bod.className = "sing-in"
}
function cadastro(){
    bod.className = 'sing-up'
}

