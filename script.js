/* Consegna
L'utente indica un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata,
in cui ogni cella contiene un numero tra quelli compresi in un range:
con difficoltà 1 => tra 1 e 100
con difficoltà 2 => tra 1 e 81
con difficoltà 3 => tra 1 e 49
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro. */

const divContainer = document.querySelector(".container");

let domandaUtente = parseInt(prompt("scegli un livello di difficoltà, digita 1, 2 o 3"));
/* verifico che l'utente inserisca 1 o 2 o 3 */
let numero_celle = 0;

if (domandaUtente == 1) {
    numero_celle = 100;

    creazione_celle(numero_celle);

}
else if (domandaUtente == 2) {
    numero_celle = 81;
    creazione_celle(numero_celle);
}
else if (domandaUtente == 3) {
    numero_celle = 49;
    creazione_celle(numero_celle);
}
else {
    alert("non hai digitato correttamente il numero");
}

/* cella_griglia.addEventListener("click", function() {
    cella_griglia.classList.add("red");
   
}); */


let cella_griglia = document.querySelectorAll(".cella");
console.log(cella_griglia);

for (let i = 0; i < cella_griglia.length; i++) {
    const element = cella_griglia[i];

    element.addEventListener("click", function () {
        element.classList.add("red");
    })
}















/* funzione che mi richiama n celle  */
function creazione_celle (numero) {
    for (let i = 0; i < numero; i++) {
        const element = `<div class="cella"></div>`;

        divContainer.innerHTML += element;
    }

}


