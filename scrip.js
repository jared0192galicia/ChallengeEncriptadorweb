// Encriptador

const buttEncrip = document.getElementById('encrip');
const buttDesencrip = document.getElementById("desencrip");
const buttCopy = document.getElementById("copy");
const buttTema = document.getElementById("tema");
const warning = document.getElementById('warning');
const htmlMain = document.getElementById('html-main');

const conten = document.getElementById("mensaje");
const gato = document.getElementsByClassName("gato-decorativo");
const section = document.getElementsByClassName("mostrar-txt");
const instruc = document.getElementsByClassName("instrucciones");
const big = document.getElementsByClassName("contenedor");
const messCont = document.getElementsByClassName("mostrar-txt");
const background = document.getElementsByClassName("text-area");
const logoAlura = document.getElementById("logo");
const gitHub = document.getElementsByClassName("git-hub");
var range = document.createRange();
var selection = window.getSelection();
var tema = true;

/**
 * It's a function that runs when the page loads, and it assigns functions to the buttons
 */
function run(){
    buttEncrip.onclick = encriptar;
    buttDesencrip.onclick = desencriptar;
    buttCopy.onclick = copy;
    buttTema.onclick = changeTema;
}

/**
 * It takes the text from the textarea, and then it replaces the vowels with the corresponding code
 */
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
        clear();
        mostrar(encriptado);
    } else {
        alert("Primero debes escribir algo.");
    }
    
}

function desencriptar(){
    var texto = document.querySelector('textarea').value;
    var desencriptado = "";
    var aux = "";
    var continua = false;
    var decifrado = true;

    if (texto != "") {
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
        
        clear();
        // Validacion palabra real
        if (aux == "") {
            mostrar(desencriptado);
            console.log("palabra: " + desencriptado);
        } else {
            mostrar(texto);
            console.log("palabra: " + texto);
        }
        console.log("aux: " + aux);
        // alert("desencriptaado");
    } else {
        alert("Primero debes escribir algo.");
    }
}

function clear(){

    gato[0].style.display = "none";
    instruc[0].style.display = "none";
    section[0].style.padding_top = "3%";
    conten.style.fontWeight = "normal";
    conten.style.fontSize = "16px";
    conten.style.top = "4%";
    conten.style.left = "5%";
    buttCopy.style.display = "block";
}
function mostrar(texto){
    conten.textContent = texto;
}
/**
 * It copies the content of the div with the id of "conten"
 */
function copy(){
    range.selectNodeContents(conten);
    selection.removeAllRanges();
    selection.addRange(range);
    const successfull = document.execCommand('copy');
    if(successfull){
        copySuccessfull();
    }
}
/**
 * It changes the background color of the button to blue and the text to white.
 */
function copySuccessfull(){
    buttCopy.style.backgroundColor = "#0A3871";
    buttCopy.style.color = "whitesmoke";
    setTimeout(()=> copyDefault(), 2000);
}
function copyDefault(){
    buttCopy.style.backgroundColor = "whitesmoke";
    buttCopy.style.color = "#0A3871";
    console.log("restablecido");
}
function changeTema(){
    if (tema) {
        background[0].style.width = "120%";
        // background[0].style.height = "10%";
        background[0].style.backgroundColor = "rgb(10, 30, 40)";
        var txt = document.querySelector('textarea');
        messCont[0].style.backgroundColor = "rgb(10, 30, 40)";
        // big[0].style.backgroundColor = "black";
        txt.style.backgroundColor = "rgb(35, 35, 35)";
        gato[0].style.backgroundColor = "rgb(10, 30, 40)";
        conten.style.color = "whitesmoke";
        conten.style.backgroundColor = "rgb(10, 30, 40)";
        instruc[0].style.backgroundColor = "rgb(10, 30, 40)";
        instruc[0].style.color = "whitesmoke";
        gitHub[0].style.backgroundColor = "rgb(10, 30, 40)";
        logoAlura.style.backgroundColor = "rgb(10, 30, 40)";
        htmlMain.style.backgroundColor = "rgb(10, 30, 40)";
        warning.style.backgroundColor = "rgb(10, 30, 40)";
        warning.style.color = "rgb(225, 225, 225)";
        // section[0].style.backgroundColor = "rgb(20, 40, 50)";
        tema = !tema;
    } else {
        var txt = document.querySelector('textarea');
        background[0].style.width = "120%";
        // background[0].style.height = "10%";
        background[0].style.backgroundColor = "#F5F5F5";
        messCont[0].style.backgroundColor = "whitesmoke";
        // big[0].style.backgroundColor = "black";
        txt.style.backgroundColor = "#F5F5F5";
        gato[0].style.backgroundColor = "whitesmoke";
        conten.style.color = "black";
        conten.style.backgroundColor = "whitesmoke";
        instruc[0].style.backgroundColor = "whitesmoke";
        instruc[0].style.color = "black";
        gitHub[0].style.backgroundColor = "#F5F5F5";
        logoAlura.style.backgroundColor = "#F5F5F5"
        
        tema = !tema;
    }
    
} 

run();