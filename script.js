/* Consegna
L'utente indica un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata,
in cui ogni cella contiene un numero tra quelli compresi in un range:
con difficoltà 1 => tra 1 e 100
con difficoltà 2 => tra 1 e 81
con difficoltà 3 => tra 1 e 49
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro. */

const divContainer = document.querySelector(".container");

let cella_griglia = `<div class="cella"></div>`;
let domandaUtente = parseInt(prompt("scegli un livello di difficoltà, digita 1, 2 o 3"));
/* verifico che l'utente inserisca 1 o 2 o 3 */

if (domandaUtente == 1) {
    celle_livello_uno();
}
else if (domandaUtente == 2) {
    celle_livello_due();
}
else if (domandaUtente == 3) {
    celle_livello_tre();
}
else {
    alert("non hai digitato correttamente il numero");
}


















/* funzione che mi richiama 100 celle (liv. 1) */
function celle_livello_uno () {
    for (let i = 0; i < 100; i++) {
        const element = cella_griglia;

        divContainer.innerHTML += element;
    }
}


/* funzione che mi richiama 81 celle (liv. 2) */
function celle_livello_due () {
    for (let i = 0; i < 81; i++) {
        const element = cella_griglia;

        divContainer.innerHTML += element;
    }
}


/* funzione che mi richiama 49 celle (liv. 3) */
function celle_livello_tre () {
    for (let i = 0; i < 49; i++) {
        const element = cella_griglia;

        divContainer.innerHTML += element;
    }
}


