// Encriptador

var buttEncrip = document.getElementById('encrip');
var buttDesencrip = document.getElementById("desencrip");

var section = document.getElementsByClassName("mostrar-txt");
var gato = document.getElementsByClassName("gato-decorativo");
var instruc = document.getElementsByClassName("instrucciones");
var conten = document.getElementById("mensaje");

function run(){
    buttEncrip.onclick = encriptar;
    buttDesencrip.onclick = desencriptar;
}

function encriptar(){
    var texto = document.querySelector('textarea').value;
    var encriptado = "";

    if (texto != "") {
            
        // Cifrado de mensaje
        for (let i = 0; i < texto.length; i++) {
            if(texto[i] == "e"){
                encriptado += "enter";
            } else if(texto[i] == "i"){
                encriptado += "imes";

            } else if(texto[i] == "a"){
                encriptado += "ai";

            } else if(texto[i] == "o"){
                encriptado += "ober";

            } else if(texto[i] == "u"){
                encriptado += "ufat";

            } else{
                encriptado += texto[i];
                console.log("Elemento no identificado");
            }
        }
        console.log(encriptado);
        // alert(texto.length);
        clear();
        mostrar(encriptado);
    } else {
        alert("Primero debes escribir algo. !Simio estupido¡");
    }
    
}

function desencriptar(){
    var texto = document.querySelector('textarea').value;
    var desencriptado = "";
    var aux = "";
    var continua = false;
    // Decifrado de mensaje
    for (let i = 0; i < texto.length; i++) {

        aux += texto[i];

        if(aux == "enter"){
            desencriptado += "e";
            aux = "";
        } else if(aux == "imes"){
            desencriptado += "i";
            aux = "";

        } else if(aux == "ai"){
            desencriptado += "a";
            aux = "";

        } else if(aux == "ober"){
            desencriptado += "o";
            aux = "";

        } else if(aux == "ufat"){
            desencriptado += "u";
            aux = "";

        } else {
            
            if (aux[0] == "e") {
                continua = true;

            } else if (aux[0] == "i") {
                continua = true;

            } else if (aux[0] == "a") {
                continua = true;

            } else if (aux[0] == "o") {
                continua = true;

            } else if (aux[0] == "u") {
                continua = true;

            } else {
                continua = false;
            }

            if(!continua) {
                desencriptado += aux;
                aux = "";
            }
            
        }
    }
    console.log("palabra: " + desencriptado);
    // alert("desencriptaado");
        clear();
        mostrar(desencriptado);

}

function clear(){

    gato[0].style.display = "none";
    instruc[0].style.display = "none";
    section[0].style.padding_top = "3%";
    conten.style.fontWeight = "normal";
    conten.style.fontSize = "16px";
    conten.style.top = "4%";
    conten.style.left = "5%";
}
function mostrar(texto){
    conten.textContent = texto;
}

run();