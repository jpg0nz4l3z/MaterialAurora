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
const botones = document.querySelectorAll(".panel");
let conteoAdelante = 0;
function historial() {
    conteoHistorial.push(iframe.contentWindow.history);
    conteoAdelante++;
    alert(conteoHistorial.length + " - " + conteoAdelante)


    if (conteoAdelante < conteoHistorial.length) {
        botones[1].querySelectorAll("button")[1].style.backgroundColor = "";
        botones[1].querySelectorAll("button")[1].disabled = false;
    } else {
        botones[1].querySelectorAll("button")[1].disabled = true;
        botones[1].querySelectorAll("button")[1].style.backgroundColor = "gray";
    }

    if (conteoHistorial.length >= 2 && conteoAdelante > 1) {
        botones[1].querySelectorAll("button")[0].style.backgroundColor = "";
        botones[1].querySelectorAll("button")[0].disabled = false;
    } else {
        botones[1].querySelectorAll("button")[0].disabled = true;
        botones[1].querySelectorAll("button")[0].style.backgroundColor = "gray";
    }

}

function adelante() {

    if (conteoAdelante < conteoHistorial.length) {
        conteoHistorial.pop();
        iframe.contentWindow.history.forward();
    }

}

function atras() {
    if (conteoHistorial.length >= 2 && conteoAdelante > 1) {
        conteoAdelante -= 2;
        conteoHistorial.pop();
        iframe.contentWindow.history.back()
    }

}