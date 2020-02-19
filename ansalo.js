var numeros = document.getElementById("numeros");
var letras = document.getElementById("letras");


function boton1() {
    var aux = numeros.innerText;
    if (aux == "1, 2, 3, 4, 5, 6, 7, 8, 9, 0") {
        letras.innerHTML = "A";
    }
    if (aux == '') {
        numeros.innerHTML= "1";// escribe en el documento
    }
}

function boton2() {

    var aux = numeros.innerText;
    var aux2 = letras.innerText;

    if (aux2 == "A") { //valido si el div de las letras ya tiene  una A
        letras.innerHTML = "A, B"; //asigno el AB al valor de letras
    } else{ // si no tiene una A el div de letras 
        if (aux2 == '' && aux == "A, B") { //valido que el div de letras este vacio y que el div de numeros este hasta el 0
            alert("Falta una letra") ; // muestro la alerta de que falta una letra
        }
    }
   
    if (aux == "1") { //valido si el div de numero tienen un 1
    numeros.innerHTML= "1, 2"; //asigno el 1,2
    } else{ //si el div numeros no tiene un 1
        if (aux == '' || aux !== "1, 2, 3" ) { //valido si esta vacio 
        alert("falta un numero") // Informo que falta un numero para asignar 1,2 
        }
    }
   
}

function boton3() {
    var aux2 = letras.innerText;
    if (aux2 == "A, B") { //valido si el div de las letras ya tiene  una A
        letras.innerHTML = "A, B, C"; //asigno el AB al valor de letras
    } else{ // si no tiene una A el div de letras 
        if (aux2 == '' && aux == "A, B, C") { //valido que el div de letras este vacio y que el div de numeros este hasta el 0
            alert("Falta una letra") ; // muestro la alerta de que falta una letra
        }
    }

    var aux = numeros.innerText;
    if (aux == "1, 2") {
        numeros.innerHTML="1, 2, 3"
    }else{
        if ( aux == '' || aux !== "1, 2, 3") {
            alert("Falta un numero")
        }
    }
}


function boton4() {
    var aux2 = letras.innerText;
    if (aux2 == "A, B, C") { //valido si el div de las letras ya tiene  una A
        letras.innerHTML = "A, B, C, D"; //asigno el AB al valor de letras
    } else{ // si no tiene una A el div de letras 
        if (aux2 == '' && aux == "A, B, C") { //valido que el div de letras este vacio y que el div de numeros este hasta el 0
            alert("Falta una letra") ; // muestro la alerta de que falta una letra
        }
    }



    var aux = numeros.innerText;
    if (aux == "1, 2, 3") {
        numeros.innerHTML="1, 2, 3, 4"
    }else{
        if (aux == '' || aux !== "1, 2, 3, 4") {
            alert("Falta un numero")
        }
    }
}

function boton5() {
    var aux2 = letras.innerText;
    if (aux2 == "A, B, C, D") { //valido si el div de las letras ya tiene  una A
        letras.innerHTML = "A, B, C, D, E"; //asigno el AB al valor de letras
    } else{ // si no tiene una A el div de letras 
        if (aux2 == '' && aux == "A, B, C") { //valido que el div de letras este vacio y que el div de numeros este hasta el 0
            alert("Falta una letra") ; // muestro la alerta de que falta una letra
        }
    }

    var aux = numeros.innerText;
    if (aux == "1, 2, 3, 4") {
        numeros.innerHTML="1, 2, 3, 4, 5"
    }else{
        if (aux == '' || aux !== "1, 2, 3, 4, 5") {
            alert("Falta un numero")
        }
    }
}

function boton6() {
    var aux2 = letras.innerText;
    if (aux2 == "A, B, C, D, E") { //valido si el div de las letras ya tiene  una A
        letras.innerHTML = "A, B, C, D, E, F"; //asigno el AB al valor de letras
    } else{ // si no tiene una A el div de letras 
        if (aux2 == '' && aux == "A, B, C") { //valido que el div de letras este vacio y que el div de numeros este hasta el 0
            alert("Falta una letra") ; // muestro la alerta de que falta una letra
        }
    }

    var aux = numeros.innerText;
    if (aux == "1, 2, 3, 4, 5") {
        numeros.innerHTML="1, 2, 3, 4, 5, 6"
    }else{
        if (aux == '' || aux !== "1, 2, 3, 4, 5, 6") {
            alert("Falta un numero")
        }
    }
}

function boton7() {
    var aux2 = letras.innerText;
    if (aux2 == "A, B, C, D, E, F") { //valido si el div de las letras ya tiene  una A
        letras.innerHTML = "A, B, C, D, E, F, G"; //asigno el AB al valor de letras
    } else{ // si no tiene una A el div de letras 
        if (aux2 == '' && aux == "A, B, C") { //valido que el div de letras este vacio y que el div de numeros este hasta el 0
            alert("Falta una letra") ; // muestro la alerta de que falta una letra
        }
    }

    var aux = numeros.innerText;
    if (aux == "1, 2, 3, 4, 5, 6") {
        numeros.innerHTML="1, 2, 3, 4, 5, 6, 7"
    }else{
        if (aux == '' || aux !== "1, 2, 3, 4, 5, 6, 7") {
            alert("Falta un numero")
        }
    }
}

function boton8() {
    var aux2 = letras.innerText;
    if (aux2 == "A, B, C, D, E, F, G") { //valido si el div de las letras ya tiene  una A
        letras.innerHTML = "A, B, C, D, E, F, G, H"; //asigno el AB al valor de letras
    } else{ // si no tiene una A el div de letras 
        if (aux2 == '' && aux == "A, B, C") { //valido que el div de letras este vacio y que el div de numeros este hasta el 0
            alert("Falta una letra") ; // muestro la alerta de que falta una letra
        }
    }

    var aux = numeros.innerText;
    if (aux == "1, 2, 3, 4, 5, 6, 7") {
        numeros.innerHTML="1, 2, 3, 4, 5, 6, 7, 8"
    }else{
        if (aux == '' || aux !== "1, 2, 3, 4, 5, 6, 7, ,8") {
            alert("Falta un numero")
        }
    }
}

function boton9() {
    var aux2 = letras.innerText;
    if (aux2 == "A, B, C, D, E, F, G, H") { //valido si el div de las letras ya tiene  una A
        letras.innerHTML = "A, B, C, D, E, F, G, H, I"; //asigno el AB al valor de letras
    } else{ // si no tiene una A el div de letras 
        if (aux2 == '' && aux == "A, B, C") { //valido que el div de letras este vacio y que el div de numeros este hasta el 0
            alert("Falta una letra") ; // muestro la alerta de que falta una letra
        }
    }

    var aux = numeros.innerText;
    if (aux == "1, 2, 3, 4, 5, 6, 7, 8") {
        numeros.innerHTML="1, 2, 3, 4, 5, 6, 7, 8, 9"
    }else{
        if (aux == '' || aux !== "1, 2, 3, 4, 5, 6, 7, 8, 9") {
            alert("Falta un numero")
        }
    }
}

function boton10() {

    var aux2 = letras.innerText;
    if (aux2 == "A, B, C, D, E, F, G, H, I") { //valido si el div de las letras ya tiene  una A
        letras.innerHTML = "A, B, C, D, E, F, G, H, I, J"; //asigno el AB al valor de letras
    } else{ // si no tiene una A el div de letras 
        if (aux2 == '' && aux == "A, B, C") { //valido que el div de letras este vacio y que el div de numeros este hasta el 0
            alert("Falta una letra") ; // muestro la alerta de que falta una letra
        }
    }

    var aux = numeros.innerText;
    if (aux == "1, 2, 3, 4, 5, 6, 7, 8, 9") {
        numeros.innerHTML="1, 2, 3, 4, 5, 6, 7, 8, 9, 0"
    }else{
        if (aux == '' || aux !== "1, 2, 3, 4, 5, 6, 7, 8, 9, 0") {
            alert("Falta un numero")
        }
    }
}

