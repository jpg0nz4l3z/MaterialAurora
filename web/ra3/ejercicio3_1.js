//Ejercicio 3.1
const elements = document.querySelectorAll(".info-item");

elements[0].querySelector("span").innerHTML = document.title;
elements[1].querySelector("span").innerHTML = window.location.pathname;
elements[2].querySelector("span").innerHTML = navigator.language;
elements[3].querySelector("span").innerHTML = window.innerWidth + " x " + window.innerHeight;
elements[4].querySelector("span").innerHTML = screen.width + " x " + screen.height;
elements[5].querySelector("span").innerHTML = navigator.userAgent;


//Ejercicio 3.2
const iframe = document.querySelector("iframe");
const url = document.querySelector(".notice")
url.innerHTML = iframe.src;

//--------------------------------------------
let conteoHistorial = []

let conteoAdelante = 0;
function historial() {
    conteoHistorial.push(iframe.contentWindow.history)
    console.log(conteoHistorial.length - 1)
    conteoAdelante++;
    console.log(conteoAdelante)
}
function adelante() {


        iframe.contentWindow.history.go();
    
}


function atras() {
    if (conteoAdelante > 0) {
        conteoAdelante = conteoAdelante - 1;
        iframe.contentWindow.history.back()
        conteoHistorial.pop()
    }

}