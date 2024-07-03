//CREO LA LISTA//

const lista_spesa = ['Pomodoro', 'Patate', 'Pane', 'Pasta', 'Insalata'];
//RECUPERO L'ELEMENTO CONTENENTE I VALORI DELL'ARRAY//
const ul = document.getElementById('lista-spesa');
//AVVIO CICLO ARRAY CON WHILE//
let i = 0;
//DEFINISCO CONDIZIONE FINE CICLO//
while(i < lista_spesa.length) {
    //CREO NUOVA LISTA//
    const li = document.createElement('li');

    li.innerText = lista_spesa[i];

    //AGGIUNGO LIST ITEM ALLA LISTA//
    ul.append(li);
    //FINE CICLO: INCREMENTO DI 1 DI I//
    i++;
}



