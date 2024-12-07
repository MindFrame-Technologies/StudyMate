

let cadastro = document.getElementById('cadastro')
let login = document.getElementById('login')

function cad(){
    cadastro.showModal();
}

function fcad(){
    cadastro.close();
    setTimeout(() => {
        window.location = "indexapp.html";
    }, 1000);
}

function log(){
    login.showModal();
}

function flog(){
    login.close();
    setTimeout(() => {
        window.location = "indexapp.html";
    }, 1000);
}