// Encriptador

var buttEncrip = document.getElementById('encrip');
var buttDesencrip = document.getElementById("desencrip");

function run(){
    buttEncrip.onclick = encriptar;
    buttDesencrip.onclick = desencriptar;
}

function encriptar(){
    var texto = document.querySelector('textarea').value;
    alert(texto);
}

function desencriptar(){
    var texto = document.querySelector('textarea').value;
    alert("desencriptaado");
}

run();